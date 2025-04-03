// may be useful afterwards to put them here but not using them rn
'use server'

import { signIn, signOut } from "@/auth"

export async function handleSignOut() {
    await signOut({ redirectTo: '/sign-in' })
}

export async function handleSignIn() {
    await signIn('google', { redirectTo: '/protected' })
}
