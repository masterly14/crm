'use client';

import { Lock, CheckCircle } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: '🔐',
    title: 'Seguridad garantizada',
    description: 'Tu información está protegida con encriptación de nivel empresarial'
  },
  {
    icon: '⚡',
    title: 'Rápido y fácil',
    description: 'Completa tu registro en menos de 2 minutos'
  },
  {
    icon: '🎯',
    title: 'Sin sorpresas',
    description: 'No pedimos información innecesaria, solo lo esencial'
  },
];

export function RegisterEmailFeature() {
  return (
    <div className="space-y-8">
      {/* Main Message */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Bienvenido a SMOOOBU
        </h2>
        <p className="text-lg text-muted-foreground">
          Únete a miles de usuarios que ya optimizan su flujo de trabajo
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-4 bg-card border border-border">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="pt-4 border-t border-border space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle size={20} weight="fill" className="text-green-500" />
          <span className="text-sm text-muted-foreground">
            Certificado SSL de seguridad
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={20} weight="fill" className="text-green-500" />
          <span className="text-sm text-muted-foreground">
            Cumple con regulaciones GDPR
          </span>
        </div>
      </div>
    </div>
  );
}
