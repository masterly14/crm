import { RegisterEmailForm } from '@/components/register/register-email-form';
import { RegisterEmailFeature } from '@/components/register/register-email-feature';
import { Globe } from '@phosphor-icons/react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <RegisterEmailForm />
        </div>
      </div>

      {/* Right Section - Feature */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-6 bg-accent/50 relative">
        {/* Language Selector */}
        <button className="absolute top-6 right-6 flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
          <Globe size={20} />
          <span>ES</span>
        </button>

        {/* Features Container */}
        <div className="w-full max-w-md">
          <RegisterEmailFeature />
        </div>
      </div>
    </div>
  );
}
