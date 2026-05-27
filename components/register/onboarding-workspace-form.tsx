'use client';

import { useState, useRef } from 'react';
import { Image as ImageIcon, X, CaretLeft } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const countries = [
  'Colombia',
  'México',
  'Argentina',
  'Chile',
  'España',
  'Otro',
];

export function OnboardingWorkspaceForm() {
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState('');
  const [workspaceHandle, setWorkspaceHandle] = useState('');
  const [billingCountry, setBillingCountry] = useState('Colombia');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no actual submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      {/* Back Button */}
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <CaretLeft size={20} />
        <span>Volver</span>
      </button>

      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-foreground">Crear tu espacio de trabajo</h2>
      </div>

      {/* Company Logo */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Logo de empresa</Label>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden border border-border">
            {logoImage ? (
              <img
                src={logoImage}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-semibold text-muted-foreground">A</span>
            )}
          </div>
          <div className="space-y-2 flex-1">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 text-primary hover:underline text-sm font-medium"
            >
              <ImageIcon size={16} />
              Subir imagen
            </button>
            {logoImage && (
              <button
                type="button"
                onClick={() => setLogoImage(null)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
              >
                <X size={16} />
                Eliminar
              </button>
            )}
            <p className="text-xs text-muted-foreground">
              PNG, JPEG, GIF hasta 10MB. Tamaño recomendado 400x400px
            </p>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/gif"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-sm font-medium text-foreground">
          Nombre de la empresa
        </Label>
        <Input
          id="companyName"
          placeholder="Ingresa el nombre de tu empresa..."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="h-10"
        />
      </div>

      {/* Workspace Handle */}
      <div className="space-y-2">
        <Label htmlFor="workspaceHandle" className="text-sm font-medium text-foreground">
          Identificador del espacio
        </Label>
        <div className="flex items-center">
          <span className="text-sm text-muted-foreground mr-2">app.smooobu.com/</span>
          <Input
            id="workspaceHandle"
            placeholder="mi-espacio"
            value={workspaceHandle}
            onChange={(e) => setWorkspaceHandle(e.target.value)}
            className="h-10 flex-1"
          />
        </div>
      </div>

      {/* Billing Country */}
      <div className="space-y-2">
        <Label htmlFor="country" className="text-sm font-medium text-foreground">
          País de facturación
        </Label>
        <Select value={billingCountry} onValueChange={setBillingCountry}>
          <SelectTrigger id="country" className="h-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full h-10">
        Continuar
      </Button>
    </form>
  );
}
