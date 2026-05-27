"use client"

import { useState } from "react"
import { PropertiesHeader } from "@/components/properties/properties-header"
import { PropertiesFilters } from "@/components/properties/properties-filters"
import { PropertiesTable } from "@/components/properties/properties-table"
import { PropertyFormSheet } from "@/components/properties/property-form-sheet"
import { DeletePropertyDialog } from "@/components/properties/delete-property-dialog"
import type { Property } from "@/types/property"

const initialProperties: Property[] = [
  {
    id: "1",
    title: "Apartamento Centro Historico",
    type: "apartment",
    status: "available",
    price: 250000,
    area: 85,
    bedrooms: 2,
    bathrooms: 1,
    address: "Calle Mayor 15, Madrid",
    createdAt: "2024-01-15",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    title: "Casa Unifamiliar Zona Norte",
    type: "house",
    status: "reserved",
    price: 450000,
    area: 180,
    bedrooms: 4,
    bathrooms: 3,
    address: "Av. del Parque 42, Madrid",
    createdAt: "2024-02-20",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    title: "Local Comercial Gran Via",
    type: "commercial",
    status: "sold",
    price: 380000,
    area: 120,
    bedrooms: 0,
    bathrooms: 1,
    address: "Gran Via 88, Madrid",
    createdAt: "2024-03-10",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "4",
    title: "Terreno Urbanizable",
    type: "land",
    status: "available",
    price: 150000,
    area: 500,
    bedrooms: 0,
    bathrooms: 0,
    address: "Parcela 23, Las Rozas",
    createdAt: "2024-03-25",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "5",
    title: "Piso Reformado Salamanca",
    type: "apartment",
    status: "available",
    price: 520000,
    area: 110,
    bedrooms: 3,
    bathrooms: 2,
    address: "Calle Serrano 78, Madrid",
    createdAt: "2024-04-05",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "6",
    title: "Chalet con Piscina",
    type: "house",
    status: "reserved",
    price: 890000,
    area: 320,
    bedrooms: 5,
    bathrooms: 4,
    address: "Urb. La Moraleja 15, Madrid",
    createdAt: "2024-04-18",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [deletingProperty, setDeletingProperty] = useState<Property | null>(null)

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || property.status === statusFilter
    const matchesType = typeFilter === "all" || property.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const handleAddProperty = () => {
    setEditingProperty(null)
    setIsFormOpen(true)
  }

  const handleEditProperty = (property: Property) => {
    setEditingProperty(property)
    setIsFormOpen(true)
  }

  const handleDeleteProperty = (property: Property) => {
    setDeletingProperty(property)
  }

  const handleSaveProperty = (propertyData: Omit<Property, "id" | "createdAt">) => {
    if (editingProperty) {
      setProperties((prev) =>
        prev.map((p) =>
          p.id === editingProperty.id
            ? { ...p, ...propertyData }
            : p
        )
      )
    } else {
      const newProperty: Property = {
        ...propertyData,
        id: String(Date.now()),
        createdAt: new Date().toISOString().split("T")[0],
      }
      setProperties((prev) => [newProperty, ...prev])
    }
    setIsFormOpen(false)
    setEditingProperty(null)
  }

  const handleConfirmDelete = () => {
    if (deletingProperty) {
      setProperties((prev) => prev.filter((p) => p.id !== deletingProperty.id))
      setDeletingProperty(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 lg:px-8">
        <PropertiesHeader
          totalProperties={properties.length}
          onAddProperty={handleAddProperty}
        />
        
        <PropertiesFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
        />
        
        <PropertiesTable
          properties={filteredProperties}
          onEdit={handleEditProperty}
          onDelete={handleDeleteProperty}
        />
        
        <PropertyFormSheet
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
          property={editingProperty}
          onSave={handleSaveProperty}
        />
        
        <DeletePropertyDialog
          open={!!deletingProperty}
          onOpenChange={(open) => !open && setDeletingProperty(null)}
          property={deletingProperty}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  )
}
