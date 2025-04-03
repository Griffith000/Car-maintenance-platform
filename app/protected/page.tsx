import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function pages() {
    const session = await auth()
    if (!session?.user) return redirect('/login')
    
  return (
    <div className="container h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-foreground font-bold mb-4 py-4 px-4">Protected Page !!!!!</h1>
        <p className="text-foreground text-center py-4 px-4">This is a protected page. You need to be signed in to access it.
          Amine try signing out and you'll see that you can't access this page.
        </p>
    </div>
  )
}
