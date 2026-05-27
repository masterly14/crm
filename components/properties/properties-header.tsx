import { Button } from "@/components/ui/button"
import { Buildings, Plus } from "@phosphor-icons/react"

interface PropertiesHeaderProps {
  totalProperties: number
  onAddProperty: () => void
}

export function PropertiesHeader({ totalProperties, onAddProperty }: PropertiesHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <Buildings className="size-5 text-primary" weight="duotone" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-semibold text-foreground">
            Propiedades
          </h1>
          <p className="text-sm text-muted-foreground">
            {totalProperties} {totalProperties === 1 ? "propiedad" : "propiedades"} en tu inventario
          </p>
        </div>
      </div>
      <Button onClick={onAddProperty}>
        <Plus data-icon="inline-start" />
        Nueva Propiedad
      </Button>
    </div>
  )
}
