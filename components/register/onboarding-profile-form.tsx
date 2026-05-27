'use client';

import { useState, useRef } from 'react';
import { Image as ImageIcon, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function OnboardingProfileForm() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('usuario@ejemplo.com');
  const [subscribe, setSubscribe] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
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
      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-foreground">Conozcámonos</h2>
      </div>

      {/* Profile Picture */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Foto de perfil</Label>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl font-semibold text-primary-foreground">A</span>
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
            {profileImage && (
              <button
                type="button"
                onClick={() => setProfileImage(null)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
              >
                <X size={16} />
                Eliminar
              </button>
            )}
            <p className="text-xs text-muted-foreground">
              PNG, JPEG hasta 10MB. Mínimo 400x400px
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

      {/* First Name */}
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
          Nombre
        </Label>
        <Input
          id="firstName"
          placeholder="Ingresa tu nombre..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="h-10"
        />
      </div>

      {/* Last Name */}
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
          Apellido
        </Label>
        <Input
          id="lastName"
          placeholder="Ingresa tu apellido..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="h-10"
        />
      </div>

      {/* Email (Read-only) */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Correo
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          disabled
          className="h-10 bg-muted/50"
        />
      </div>

      {/* Subscribe Toggle */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <p className="font-medium text-sm text-foreground">
            Recibir actualizaciones de producto
          </p>
          <p className="text-xs text-muted-foreground">
            Mantente informado sobre nuevas características
          </p>
        </div>
        <Switch checked={subscribe} onCheckedChange={setSubscribe} />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full h-10">
        Continuar
      </Button>
    </form>
  );
}
