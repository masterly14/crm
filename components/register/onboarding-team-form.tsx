'use client';

import { useState } from 'react';
import { Plus, Link as LinkIcon, CaretLeft } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function OnboardingTeamForm() {
  const [teamMembers, setTeamMembers] = useState([
    { email: 'ejemplo@correo.com', role: 'Miembro' },
    { email: 'otro@correo.com', role: 'Miembro' },
  ]);
  const [newEmail, setNewEmail] = useState('');

  const handleAddMember = () => {
    if (newEmail) {
      setTeamMembers([...teamMembers, { email: newEmail, role: 'Miembro' }]);
      setNewEmail('');
    }
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

  const handleRoleChange = (index: number, role: string) => {
    const updated = [...teamMembers];
    updated[index].role = role;
    setTeamMembers(updated);
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
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Colabora con tu equipo</h2>
        <p className="text-sm text-muted-foreground">
          Cuantos más compañeros usen SMOOOBU, más potente se vuelve
        </p>
      </div>

      {/* Add Team Member */}
      <div className="space-y-3 bg-muted/30 rounded-lg p-4">
        <Label className="text-sm font-medium text-foreground">
          Invita a tu equipo a colaborar
        </Label>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="ejemplo@correo.com"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="h-9 flex-1"
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleAddMember}
            className="h-9 px-3"
            disabled={!newEmail}
          >
            <Plus size={18} />
          </Button>
        </div>
      </div>

      {/* Team Members List */}
      <div className="space-y-2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border"
          >
            <div className="flex-1 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0">
                {member.email.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">{member.email}</p>
              </div>
            </div>
            <Select value={member.role} onValueChange={(role) => handleRoleChange(index, role)}>
              <SelectTrigger className="w-28 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Administrador">Administrador</SelectItem>
                <SelectItem value="Miembro">Miembro</SelectItem>
                <SelectItem value="Visor">Visor</SelectItem>
              </SelectContent>
            </Select>
            <button
              type="button"
              onClick={() => handleRemoveMember(index)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Copy Link */}
      <Button
        type="button"
        variant="outline"
        className="w-full h-9"
      >
        <LinkIcon size={16} className="mr-2" />
        Copiar enlace de invitación
      </Button>

      {/* Actions */}
      <div className="space-y-2">
        <Button type="submit" className="w-full h-10">
          Enviar invitaciones
        </Button>
        <button
          type="button"
          className="w-full h-10 text-muted-foreground hover:text-foreground font-medium text-sm"
        >
          Saltar por ahora
        </button>
      </div>

      {/* Legal Text */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        Al continuar aceptas nuestras Condiciones de Servicio. Además aceptas y entiendes que los servicios de SMOOOBU son exclusivamente para usuarios comerciales y por lo tanto confirmas que tienes la autoridad legal para actuar en nombre del único comerciante o empresa que se registra en el servicio de SMOOOBU.
      </p>
    </form>
  );
}
