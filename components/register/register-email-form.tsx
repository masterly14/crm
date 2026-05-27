'use client';

import { useState } from 'react';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function RegisterEmailForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no actual submission
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">SMOOOBU</h1>
      </div>

      {/* Title */}
      <div className="space-y-2 text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Crear tu cuenta</h2>
        <p className="text-sm text-muted-foreground">
          Ingresa tu correo para empezar
        </p>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Correo electrónico *
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10"
          />
          <EnvelopeSimple
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-10"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Continuar'}
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">o</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Login Link */}
      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{' '}
        <a href="/login" className="text-primary font-medium hover:underline">
          Inicia sesión
        </a>
      </p>

      {/* Footer Links */}
      <div className="flex justify-center gap-6 pt-4 border-t border-border">
        <a href="#" className="text-xs text-primary hover:underline">
          Términos
        </a>
        <a href="#" className="text-xs text-primary hover:underline">
          Privacidad
        </a>
      </div>
    </form>
  );
}
