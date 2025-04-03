
import { auth, signOut, signIn } from "@/auth"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
 
export default async function SignIn() {
    const session = await auth()
    console.log(session)
    const user = session?.user
     
    return (user ? 
        (   
        <div className="flex flex-col items-center justify-center h-screen px-4 text-foreground" >

            <Card className="w-full max-w-md border dark:border-stone-50">  
                <CardHeader>
                    <CardTitle>Welcome {user.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground">You are signed in</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <form action={async () => {
                        "use server"
                        await signOut({
                            redirectTo : '/login'
                        })
                    }}>
                        <Button className="bg-primary border text-foreground rounded-md dark:border-stone-50 dark:text-foreground">Sign out</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
        ) : (
        <div className="flex   items-center justify-center h-screen px-4 text-foreground" >
            <Card className="w-full max-w-md border dark:border-stone-50">
                <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground">You are not signed in</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <form action={async () => {
                        "use server"
                        await signIn('google', {redirectTo : '/protected'})
                    }}>
                        <Button className="bg-primary border text-foreground rounded-md dark:border-stone-50  dark:text-foreground dark:bg-primary">Sign in</Button>
                    </form>
                </CardFooter>   
            </Card>
        </div>
        )
    )
} 