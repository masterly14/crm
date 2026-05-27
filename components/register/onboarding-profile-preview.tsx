'use client';

import { Briefcase, Users } from '@phosphor-icons/react';

export function OnboardingProfilePreview() {
  return (
    <div className="space-y-6 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground">
        <Users size={32} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground">
          Tu espacio personal
        </h3>
        <p className="text-muted-foreground text-sm">
          Personaliza tu perfil y comienza tu viaje con SMOOOBU
        </p>
      </div>

      <div className="space-y-3 pt-6">
        <div className="flex items-start gap-4 text-left">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
            <span className="text-sm font-semibold">1</span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Perfil completo</p>
            <p className="text-xs text-muted-foreground">Agrega tu foto y información</p>
          </div>
        </div>
        <div className="flex items-start gap-4 text-left">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
            <span className="text-sm font-semibold">2</span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Espacio de trabajo</p>
            <p className="text-xs text-muted-foreground">Configura tu workspace principal</p>
          </div>
        </div>
        <div className="flex items-start gap-4 text-left">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
            <span className="text-sm font-semibold">3</span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Equipo</p>
            <p className="text-xs text-muted-foreground">Invita a tus compañeros</p>
          </div>
        </div>
      </div>
    </div>
  );
}
