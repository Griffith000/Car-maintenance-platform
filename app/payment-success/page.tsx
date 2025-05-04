import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCheck } from "lucide-react"

export default function Component() {
  return (
    <Card className="mx-auto max-w-md p-6 text-center">
      <CardHeader>
        <CheckCheck className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <CardTitle>Payment Successful</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Congratulations! You have successfully Payed.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}
