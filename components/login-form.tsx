"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { signIn } from "next-auth/react"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  const router = useRouter()

   const handleLogin = async () => {
    // const res = await signIn("credentials", {
    //   username,
    //   password,
    //   redirect: true,
    //   callbackUrl: "/dashboard/products"
    // })
    router.push("/dashboard/products")
  }
  return (
    <div className={cn("flex flex-col gap-6 w-full", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold">Sign In</CardTitle>
          {/* <CardDescription>
            Enter your email below to login to your account
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  placeholder="m@example.com"
                  required
                  value={"kminchelle"}
                  //  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required value={"1234"} 
                //  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button onClick={handleLogin} className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
           
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
