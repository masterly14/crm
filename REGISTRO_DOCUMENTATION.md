# Interfaz de Registro - SMOOOBU

## Páginas Implementadas

### 1. **Página de Registro (Email)** - `/register`
- **Componentes:**
  - `RegisterEmailForm` - Formulario con campo de email
  - `RegisterEmailFeature` - Panel derecho con beneficios
  
- **Características:**
  - Campo de correo electrónico con validación
  - Botón "Continuar"
  - Enlace a login
  - Enlaces a términos y privacidad
  - Layout split: formulario (izquierda) + beneficios (derecha)
  - Responsive: en móvil solo muestra formulario

---

### 2. **Página de Verificación** - `/register/verification`
- **Componentes:**
  - `RegisterVerificationForm` - Entrada de código de 6 dígitos
  - `RegisterVerificationFeature` - Información de seguridad y pasos
  
- **Características:**
  - 6 inputs para código de verificación
  - Auto-focus entre campos
  - Botón "Reenviar código" con temporizador (60 segundos)
  - Información sobre expiración del código
  - Badges de seguridad (GDPR, SSL)
  - Pasos numerados del proceso

---

### 3. **Onboarding - Perfil** - `/register/onboarding/profile`
- **Componentes:**
  - `OnboardingProfileForm` - Formulario de perfil
  - `OnboardingProfilePreview` - Vista previa del progreso
  
- **Características:**
  - Upload de foto de perfil
  - Campos: Nombre, Apellido, Email (read-only)
  - Toggle para recibir actualizaciones
  - Preview con pasos (1, 2, 3)

---

### 4. **Onboarding - Workspace** - `/register/onboarding/workspace`
- **Componentes:**
  - `OnboardingWorkspaceForm` - Formulario de espacio de trabajo
  - `OnboardingWorkspacePreview` - Vista previa del workspace
  
- **Características:**
  - Upload de logo empresarial
  - Campos: Nombre empresa, Identificador, País de facturación
  - Select dropdown para país
  - Preview de la interfaz del workspace
  - Botón atrás para navegación

---

### 5. **Onboarding - Equipo** - `/register/onboarding/team`
- **Componentes:**
  - `OnboardingTeamForm` - Formulario de colaboradores
  - `OnboardingTeamPreview` - Estado de portales e integraciones
  
- **Características:**
  - Agregar miembros del equipo por email
  - Seleccionar rol (Administrador, Miembro, Visor)
  - Eliminar miembros de la lista
  - Copiar enlace de invitación
  - Botones "Enviar invitaciones" y "Saltar por ahora"
  - Texto legal en footer
  - Card de estado de portales

---

## Características Globales

✅ **Todos los textos en español**
✅ **Respeta estilos existentes** (globals.css, tokens de diseño)
✅ **Usa componentes UI del proyecto** (Button, Input, Label, Card, Select, Switch)
✅ **Iconos Phosphor** para interfaces visuales
✅ **Responsive design** - Layout split oculta panel derecho en móvil
✅ **Headers y footers consistentes** con Attio branding
✅ **Selector de idioma** en top-right (ES)
✅ **Sin lógica de flujo real** - Solo UI

---

## Estructura de Archivos

```
components/register/
├── index.ts
├── register-email-form.tsx
├── register-email-feature.tsx
├── register-verification-form.tsx
├── register-verification-feature.tsx
├── onboarding-profile-form.tsx
├── onboarding-profile-preview.tsx
├── onboarding-workspace-form.tsx
├── onboarding-workspace-preview.tsx
├── onboarding-team-form.tsx
└── onboarding-team-preview.tsx

app/register/
├── page.tsx                          (/register)
├── verification/
│   └── page.tsx                      (/register/verification)
└── onboarding/
    ├── profile/
    │   └── page.tsx                  (/register/onboarding/profile)
    ├── workspace/
    │   └── page.tsx                  (/register/onboarding/workspace)
    └── team/
        └── page.tsx                  (/register/onboarding/team)
```

---

## URLs Disponibles

- `http://localhost:3000/register` - Registro con email
- `http://localhost:3000/register/verification` - Verificación de código
- `http://localhost:3000/register/onboarding/profile` - Completar perfil
- `http://localhost:3000/register/onboarding/workspace` - Crear workspace
- `http://localhost:3000/register/onboarding/team` - Invitar equipo
