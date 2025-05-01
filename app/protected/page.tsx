import { auth } from "@/auth"
import { redirect } from "next/navigation"
import UserReservations from "@/app/_components/booking/UserReservations"

export default async function pages() {
  const session = await auth()
  if (!session?.user) return redirect('/login')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 pt-24">
      <div className="max-w-5xl w-full mx-auto text-center">
        <h1 className="text-3xl text-foreground font-bold mb-4 py-4 px-4">Booking Reservations</h1>
        <p className="text-muted-foreground mb-4">Here you can view and manage your booking reservations.</p>
        <UserReservations userId={session.user.id} />
      </div>
    </div>
    )
}
