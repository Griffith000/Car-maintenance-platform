import { auth } from "@/auth"
import { redirect } from "next/navigation"
import UserReservations from "@/app/_components/booking/UserReservations"

export default async function pages() {
    const session = await auth()
    if (!session?.user) return redirect('/login')
    
  return (
    <div className="container h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-foreground font-bold mb-4 py-4 px-4">Protected Page !!!!!</h1>
        <UserReservations userId={session.user.id} />
    </div>
  )
}
