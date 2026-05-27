export type PropertyType = "apartment" | "house" | "commercial" | "land"
export type PropertyStatus = "available" | "reserved" | "sold"

export interface Property {
  id: string
  title: string
  type: PropertyType
  status: PropertyStatus
  price: number
  area: number
  bedrooms: number
  bathrooms: number
  address: string
  createdAt: string
  image?: string
}

export const propertyTypeLabels: Record<PropertyType, string> = {
  apartment: "Apartamento",
  house: "Casa",
  commercial: "Local Comercial",
  land: "Terreno",
}

export const propertyStatusLabels: Record<PropertyStatus, string> = {
  available: "Disponible",
  reserved: "Reservado",
  sold: "Vendido",
}
