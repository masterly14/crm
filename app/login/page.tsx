import { LoginForm, LoginFeature } from "@/components/login"
import { Globe } from "@phosphor-icons/react"

export const metadata = {
  title: "Login - SMOOBU",
  description: "Login to your SMOOBU account",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-svh">
      {/* Left Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>

      {/* Right Section - Features */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-6 bg-accent/50 relative">
        {/* Language Selector */}
        <button className="absolute top-6 right-6 flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
          <Globe size={20} />
          <span>EN</span>
        </button>

        {/* Features Container */}
        <div className="w-full max-w-md">
          <LoginFeature />
        </div>
      </div>
    </div>
  )
}
