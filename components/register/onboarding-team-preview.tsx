'use client';

import { CheckCircle } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';

export function OnboardingTeamPreview() {
  const services = [
    { name: 'Calendario Integrado', synced: true },
    { name: 'Airbnb', synced: true },
    { name: 'Booking.com', synced: true },
  ];

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <Card className="p-6 bg-card space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Estado de Portales</h3>
          <CheckCircle size={24} weight="fill" className="text-green-500" />
        </div>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
                  {service.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {service.name}
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-700">
                Sincronizado
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Benefits */}
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-sm">Ventajas de trabajar en equipo</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle size={16} weight="fill" className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">Colaboración en tiempo real</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle size={16} weight="fill" className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">Control de permisos por rol</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle size={16} weight="fill" className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">Historial de cambios completo</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle size={16} weight="fill" className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">Integraciones sincronizadas</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
