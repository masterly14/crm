"use client"

import { useState } from "react"
import { CheckCircle, Circle } from "@phosphor-icons/react"
import { Card } from "@/components/ui/card"

interface Feature {
  id: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: "calendar",
    title: "One complete calendar",
    description: "Sync all of your bookings automatically and avoid manually updating different websites.",
  },
  {
    id: "integration",
    title: "Two-way sync with your tools",
    description: "Connect to all major booking platforms and keep everything in sync.",
  },
  {
    id: "analytics",
    title: "Advanced analytics",
    description: "Get insights into your bookings and customer behavior.",
  },
]

interface PortalService {
  name: string
  status: "synced" | "pending"
  icon: string
}

const portalServices: PortalService[] = [
  { name: "HomeToGo", status: "synced", icon: "🏠" },
  { name: "Airbnb", status: "synced", icon: "🔴" },
  { name: "Booking.com", status: "synced", icon: "🅱️" },
]

export function LoginFeature() {
  const [currentFeature, setCurrentFeature] = useState(0)

  return (
    <div className="flex flex-col gap-8 h-full justify-between">
      {/* Feature Content */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          {features[currentFeature].title}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          {features[currentFeature].description}
        </p>
      </div>

      {/* Portal Status Card */}
      <Card className="p-6 space-y-4 bg-card shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Portal Status</h3>
          <CheckCircle size={24} weight="fill" className="text-green-500" />
        </div>

        <div className="space-y-3">
          {portalServices.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {service.name}
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded bg-secondary/20 text-secondary-foreground">
                {service.status === "synced" ? "Synced" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Feature Navigation Dots */}
      <div className="flex gap-2 justify-center items-center">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFeature(index)}
            className={`transition-colors ${
              index === currentFeature
                ? "text-primary"
                : "text-muted-foreground hover:text-muted-foreground/80"
            }`}
            aria-label={`Feature ${index + 1}`}
          >
            <Circle
              size={12}
              weight={index === currentFeature ? "fill" : "regular"}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
