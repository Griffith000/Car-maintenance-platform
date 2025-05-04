import NextAuth from "next-auth"
import Google from "next-auth/providers/google"; 
import { $Enums } from "@prisma/client";
import { DefaultSession } from "next-auth";
import prisma from "@/lib/prisma"

declare module "next-auth" {
  interface Session {
    user: {
      role: $Enums.Roles;
      id: string;
    } & DefaultSession["user"];
  }
}
export const { handlers, signIn, signOut, auth, } = NextAuth({
  providers: [
    Google(
      {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }
    )
  ],
  callbacks: {
    signIn: async({ user }) => {
      try {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email as string
          }
        });
        
        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email as string,
              username: user.name ?? 'default_username',
              image: user.image ?? null,
              role: $Enums.Roles.PEASANT, // Default role for new users
            }
          });
        }
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
    session: async ({session}) => {
      if (session?.user?.email) {
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email
          }
        });
        
        if (user) {
          return {
            ...session,
            user: {
              ...session.user,
              id: user.userId.toString(),// authjs expects id to be a string
              role: user.role
            }
          };
        }
      }
      return session;
    },
  }
})
