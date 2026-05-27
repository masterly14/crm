'use client';

import { CheckCircle, Clock } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';

export function RegisterVerificationFeature() {
  return (
    <div className="space-y-8">
      {/* Main Message */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Casi listo
        </h2>
        <p className="text-lg text-muted-foreground">
          Verifica tu correo para asegurar que sea válido
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
            ✓
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Correo registrado</h3>
            <p className="text-sm text-muted-foreground">Recibiste nuestro código</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Ingresa el código</h3>
            <p className="text-sm text-muted-foreground">En los campos de arriba</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
            3
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Completa tu perfil</h3>
            <p className="text-sm text-muted-foreground">Y comienza a usar SMOOOBU</p>
          </div>
        </div>
      </div>

      {/* Security Info */}
      <Card className="p-4 bg-card border border-border">
        <div className="flex gap-3">
          <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-foreground text-sm">El código expira en 10 minutos</h4>
            <p className="text-xs text-muted-foreground">
              Por seguridad, los códigos de verificación tienen un tiempo de vida limitado
            </p>
          </div>
        </div>
      </Card>

      {/* Trust Badge */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle size={20} weight="fill" className="text-green-500" />
          <span className="text-sm text-muted-foreground">
            Tu correo no será compartido
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={20} weight="fill" className="text-green-500" />
          <span className="text-sm text-muted-foreground">
            Información 100% privada
          </span>
        </div>
      </div>
    </div>
  );
}
