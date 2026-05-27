"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Warning } from "@phosphor-icons/react"
import type { Property } from "@/types/property"

interface DeletePropertyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  property: Property | null
  onConfirm: () => void
}

export function DeletePropertyDialog({
  open,
  onOpenChange,
  property,
  onConfirm,
}: DeletePropertyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10">
            <Warning className="size-6 text-destructive" weight="duotone" />
          </div>
          <DialogTitle className="text-center">Eliminar Propiedad</DialogTitle>
          <DialogDescription className="text-center">
            Estas a punto de eliminar <strong>{property?.title}</strong>. Esta accion no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={onConfirm}
          >
            Eliminar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
