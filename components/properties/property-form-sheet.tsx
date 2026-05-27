"use client"

import { useEffect, useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Property, PropertyStatus, PropertyType } from "@/types/property"

interface PropertyFormSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  property: Property | null
  onSave: (data: Omit<Property, "id" | "createdAt">) => void
}

const initialFormState = {
  title: "",
  type: "apartment" as PropertyType,
  status: "available" as PropertyStatus,
  price: 0,
  area: 0,
  bedrooms: 0,
  bathrooms: 0,
  address: "",
  image: "",
}

export function PropertyFormSheet({
  open,
  onOpenChange,
  property,
  onSave,
}: PropertyFormSheetProps) {
  const [formData, setFormData] = useState(initialFormState)

  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title,
        type: property.type,
        status: property.status,
        price: property.price,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        address: property.address,
        image: property.image || "",
      })
    } else {
      setFormData(initialFormState)
    }
  }, [property, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const isEditing = !!property

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {isEditing ? "Editar Propiedad" : "Nueva Propiedad"}
          </SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Actualiza los datos de la propiedad."
              : "Completa los datos para agregar una nueva propiedad."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 pb-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium text-foreground">
              Titulo
            </label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Ej: Apartamento Centro"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-sm font-medium text-foreground">
              Direccion
            </label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
              placeholder="Ej: Calle Mayor 15, Madrid"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="text-sm font-medium text-foreground">
                Tipo
              </label>
              <Select
                value={formData.type}
                onValueChange={(value: PropertyType) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apartment">Apartamento</SelectItem>
                    <SelectItem value="house">Casa</SelectItem>
                    <SelectItem value="commercial">Local Comercial</SelectItem>
                    <SelectItem value="land">Terreno</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-medium text-foreground">
                Estado
              </label>
              <Select
                value={formData.status}
                onValueChange={(value: PropertyStatus) =>
                  setFormData((prev) => ({ ...prev, status: value }))
                }
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="available">Disponible</SelectItem>
                    <SelectItem value="reserved">Reservado</SelectItem>
                    <SelectItem value="sold">Vendido</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-medium text-foreground">
                Precio (EUR)
              </label>
              <Input
                id="price"
                type="number"
                value={formData.price || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, price: Number(e.target.value) }))
                }
                placeholder="250000"
                min={0}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="area" className="text-sm font-medium text-foreground">
                Area (m2)
              </label>
              <Input
                id="area"
                type="number"
                value={formData.area || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, area: Number(e.target.value) }))
                }
                placeholder="85"
                min={0}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="bedrooms" className="text-sm font-medium text-foreground">
                Habitaciones
              </label>
              <Input
                id="bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bedrooms: Number(e.target.value) }))
                }
                min={0}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="bathrooms" className="text-sm font-medium text-foreground">
                Banos
              </label>
              <Input
                id="bathrooms"
                type="number"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bathrooms: Number(e.target.value) }))
                }
                min={0}
              />
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              {isEditing ? "Guardar Cambios" : "Crear Propiedad"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
