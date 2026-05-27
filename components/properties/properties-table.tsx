"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DotsThreeVertical,
  PencilSimple,
  Trash,
  Eye,
  Bed,
  Bathtub,
  Ruler,
  MapPin,
} from "@phosphor-icons/react"
import type { Property, PropertyStatus, PropertyType } from "@/types/property"
import { propertyTypeLabels, propertyStatusLabels } from "@/types/property"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface PropertiesTableProps {
  properties: Property[]
  onEdit: (property: Property) => void
  onDelete: (property: Property) => void
}

const statusVariants: Record<PropertyStatus, "default" | "secondary" | "outline"> = {
  available: "default",
  reserved: "secondary",
  sold: "outline",
}

const typeIcons: Record<PropertyType, string> = {
  apartment: "Apt",
  house: "Casa",
  commercial: "Local",
  land: "Terr",
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price)
}

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString))
}

export function PropertiesTable({ properties, onEdit, onDelete }: PropertiesTableProps) {
  if (properties.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-dashed bg-muted/30 py-16">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted">
          <MapPin className="size-6 text-muted-foreground" weight="duotone" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
          No hay propiedades
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          No se encontraron propiedades con los filtros seleccionados.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6 rounded-lg border bg-card">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Propiedad</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              <TableHead>Detalles</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative size-12 overflow-hidden rounded-md bg-muted">
                      <Image
                        src={property.image || "/placeholder.svg?height=48&width=48"}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-foreground">
                        {property.title}
                      </p>
                      <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                        <MapPin className="size-3" />
                        {property.address}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {propertyTypeLabels[property.type]}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={statusVariants[property.status]}
                    className={cn(
                      property.status === "available" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                      property.status === "reserved" && "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                      property.status === "sold" && "bg-muted text-muted-foreground"
                    )}
                  >
                    {propertyStatusLabels[property.status]}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatPrice(property.price)}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Ruler className="size-3" />
                      {property.area}m2
                    </span>
                    {property.bedrooms > 0 && (
                      <span className="flex items-center gap-1">
                        <Bed className="size-3" />
                        {property.bedrooms}
                      </span>
                    )}
                    {property.bathrooms > 0 && (
                      <span className="flex items-center gap-1">
                        <Bathtub className="size-3" />
                        {property.bathrooms}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(property.createdAt)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <DotsThreeVertical />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Eye data-icon="inline-start" />
                          Ver detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onEdit(property)}>
                          <PencilSimple data-icon="inline-start" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDelete(property)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash data-icon="inline-start" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden">
        <div className="divide-y">
          {properties.map((property) => (
            <div key={property.id} className="flex items-start gap-3 p-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={property.image || "/placeholder.svg?height=64&width=64"}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-foreground">
                      {property.title}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {property.address}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <DotsThreeVertical />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Eye data-icon="inline-start" />
                          Ver detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onEdit(property)}>
                          <PencilSimple data-icon="inline-start" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDelete(property)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash data-icon="inline-start" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge
                    variant={statusVariants[property.status]}
                    className={cn(
                      "text-xs",
                      property.status === "available" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                      property.status === "reserved" && "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                      property.status === "sold" && "bg-muted text-muted-foreground"
                    )}
                  >
                    {propertyStatusLabels[property.status]}
                  </Badge>
                  <span className="text-sm font-medium text-foreground">
                    {formatPrice(property.price)}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Ruler className="size-3" />
                    {property.area}m2
                  </span>
                  {property.bedrooms > 0 && (
                    <span className="flex items-center gap-1">
                      <Bed className="size-3" />
                      {property.bedrooms}
                    </span>
                  )}
                  {property.bathrooms > 0 && (
                    <span className="flex items-center gap-1">
                      <Bathtub className="size-3" />
                      {property.bathrooms}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
