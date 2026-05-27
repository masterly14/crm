'use client';

export function OnboardingWorkspacePreview() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Vista previa del espacio</h3>
      
      <div className="bg-muted/50 rounded-lg p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center">
              A
            </div>
            <span className="text-xs font-medium text-foreground">Workspace</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded" style={{ width: '80%' }} />
          <div className="h-2 bg-muted rounded" style={{ width: '60%' }} />
          <div className="h-2 bg-primary/30 rounded" style={{ width: '70%' }} />
          <div className="h-2 bg-muted rounded" style={{ width: '65%' }} />
        </div>

        {/* Content */}
        <div className="space-y-2 pt-2">
          <div className="h-3 bg-muted rounded" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 bg-muted rounded" />
            <div className="h-20 bg-muted rounded" />
          </div>
          <div className="h-3 bg-muted rounded mt-4" />
          <div className="h-3 bg-muted rounded" />
        </div>
      </div>

      <div className="text-xs text-muted-foreground space-y-2 pt-4">
        <p>
          <strong>Nombre:</strong> Tu empresa
        </p>
        <p>
          <strong>URL:</strong> app.smooobu.com/mi-espacio
        </p>
        <p>
          <strong>Facturación:</strong> Colombia
        </p>
      </div>
    </div>
  );
}
