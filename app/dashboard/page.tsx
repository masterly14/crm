'use client'

import { Sidebar } from '@/components/sidebar'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-background px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Bienvenido a tu panel de control</p>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="p-4 border border-border rounded-lg bg-card text-foreground shadow-xs hover:shadow-sm transition-shadow"
                >
                  <div className="font-semibold">Tarjeta {i}</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contenido de ejemplo para demostrar el layout con sidebar.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
