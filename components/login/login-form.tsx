"use client"

import { useState } from "react"
import { Eye, EyeSlash, FacebookLogo, AppleLogo, GoogleLogo } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {/* Logo */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-primary">SMOOBU</h1>
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password <span className="text-destructive">*</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            name="rememberMe"
            checked={formData.rememberMe}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, rememberMe: checked === true }))}
          />
          <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
            Remember me
          </Label>
        </div>
        <a href="#" className="text-sm text-primary hover:underline">
          Forgot your password?
        </a>
      </div>

      {/* Login Button */}
      <Button
        type="submit"
        className="w-full"
        variant="outline"
      >
        Login
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border"></div>
        <span className="text-sm text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="flex gap-3 justify-center">
        <Button
          type="button"
          variant="outline"
          className="flex-1 h-9"
          aria-label="Login with Facebook"
        >
          <FacebookLogo size={20} weight="fill" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 h-9"
          aria-label="Login with Apple"
        >
          <AppleLogo size={20} weight="fill" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 h-9"
          aria-label="Login with Google"
        >
          <GoogleLogo size={20} weight="fill" />
        </Button>
      </div>

      {/* Register Link */}
      <p className="text-sm text-center">
        Don&apos;t have an account yet?{" "}
        <a href="#" className="text-primary hover:underline font-medium">
          Register
        </a>
      </p>

      {/* Footer Links */}
      <div className="flex gap-4 justify-center text-sm text-primary">
        <a href="#" className="hover:underline">
          Imprint
        </a>
        <a href="#" className="hover:underline">
          Privacy policy
        </a>
      </div>
    </form>
  )
}
