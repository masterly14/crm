import { OnboardingTeamForm } from '@/components/register/onboarding-team-form';
import { OnboardingTeamPreview } from '@/components/register/onboarding-team-preview';
import { Globe } from '@phosphor-icons/react';

export default function OnboardingTeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">la attio</h1>
        <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
          <Globe size={20} />
          <span>ES</span>
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Section - Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
          <div className="w-full max-w-md">
            <OnboardingTeamForm />
          </div>
        </div>

        {/* Right Section - Preview */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-6 bg-muted/30 border-l border-border overflow-y-auto">
          <div className="w-full max-w-md">
            <OnboardingTeamPreview />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-4 bg-muted/30">
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <span>© 2026 Attio Limited</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Política de privacidad
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Soporte
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Cerrar sesión
          </a>
        </div>
      </footer>
    </div>
  );
}
