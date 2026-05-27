'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function RegisterVerificationForm() {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Auto-focus to next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (codes.some(code => !code)) return;
    
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const isCodeComplete = codes.every(code => code !== '');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Back Button */}
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      {/* Logo */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-primary">SMOOOBU</h1>
      </div>

      {/* Title */}
      <div className="space-y-2 text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Verifica tu correo</h2>
        <p className="text-sm text-muted-foreground">
          Hemos enviado un código de 6 dígitos a tu correo
        </p>
      </div>

      {/* Email Display */}
      <div className="bg-accent/50 rounded-lg p-3 text-center">
        <p className="text-sm text-muted-foreground">usuario@ejemplo.com</p>
      </div>

      {/* Verification Codes */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">
          Código de verificación *
        </Label>
        <div className="flex gap-2 justify-center">
          {codes.map((code, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold"
              placeholder="•"
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-10"
        disabled={!isCodeComplete || isLoading}
      >
        {isLoading ? 'Verificando...' : 'Continuar'}
      </Button>

      {/* Resend Code */}
      <div className="text-center space-y-2 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          ¿No recibiste el código?
        </p>
        <button
          type="button"
          disabled={resendTimer > 0}
          onClick={() => setResendTimer(60)}
          className="text-primary font-medium hover:underline disabled:text-muted-foreground disabled:cursor-not-allowed text-sm"
        >
          {resendTimer > 0 ? `Reintentar en ${resendTimer}s` : 'Reenviar código'}
        </button>
      </div>

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
