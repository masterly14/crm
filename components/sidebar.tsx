'use client'

import { useState } from 'react'
import {
  House,
  SquaresFour,
  Buildings,
  FileText,
  ChevronDown,
  Menu,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface NavItemProps {
  icon?: React.ReactNode
  label: string
  href?: string
  isActive?: boolean
  isCollapsed?: boolean
  onClick?: () => void
}

interface NavSectionProps {
  items: NavItemProps[]
  isCollapsed?: boolean
}

function NavItem({
  icon,
  label,
  href,
  isActive = false,
  isCollapsed = false,
  onClick,
}: NavItemProps) {
  const content = (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      size="default"
      className={cn(
        'w-full justify-start gap-3',
        isCollapsed && 'justify-center px-0 w-9 h-9'
      )}
      onClick={onClick}
      asChild={!!href && !isCollapsed}
    >
      {href && !isCollapsed ? (
        <a href={href} className="flex items-center gap-3 w-full">
          {icon && <div className="shrink-0">{icon}</div>}
          <span className={cn('truncate', isCollapsed && 'hidden')}>{label}</span>
        </a>
      ) : (
        <>
          {icon && <div className="shrink-0">{icon}</div>}
          <span className={cn('truncate', isCollapsed && 'hidden')}>{label}</span>
        </>
      )}
    </Button>
  )

  if (isCollapsed && label) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent side="right" className="text-xs">
          {label}
        </TooltipContent>
      </Tooltip>
    )
  }

  return content
}

function NavSection({ items, isCollapsed = false }: NavSectionProps) {
  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <NavItem
          key={index}
          {...item}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  )
}

interface SidebarProps {
  defaultCollapsed?: boolean
}

export function Sidebar({ defaultCollapsed = false }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [expandedSections, setExpandedSections] = useState<string[]>(['demandas'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const mainItems = [
    {
      icon: <SquaresFour size={20} weight="fill" className="text-blue-500" />,
      label: 'Dashboard',
    },
    {
      icon: <Buildings size={20} weight="fill" className="text-purple-500" />,
      label: 'Propiedades',
    },
    {
      icon: <FileText size={20} weight="fill" className="text-blue-600" />,
      label: 'Demandas',
    },
  ]

  const demandasSubItems = [
    { label: 'Cruces' },
    { label: 'Visitas' },
    { label: 'Notas de encargo' },
    { label: 'Captación' },
    { label: 'Tareas' },
    { label: 'IA Conversacional' },
    { label: 'Sitio web' },
    { label: 'Evaluación' },
    { label: 'Legal' },
    { label: 'Reportes' },
    { label: 'Inteligencia' },
  ]

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-border bg-background transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-primary text-primary-foreground">
              <House size={16} weight="fill" />
            </div>
            <span className="text-sm font-semibold text-foreground">House</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="shrink-0"
        >
          <Menu size={18} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-2">
        {/* Main Items */}
        <NavSection items={mainItems} isCollapsed={isCollapsed} />

        {/* Demandas Section with Submenu */}
        <Collapsible
          open={expandedSections.includes('demandas')}
          onOpenChange={(open) => {
            if (open) {
              setExpandedSections((prev) => [...prev, 'demandas'])
            } else {
              setExpandedSections((prev) => prev.filter((id) => id !== 'demandas'))
            }
          }}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="default"
              className={cn(
                'w-full justify-between gap-3',
                isCollapsed && 'justify-center px-0 w-9 h-9'
              )}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="shrink-0">
                  <FileText size={20} weight="fill" className="text-blue-600" />
                </div>
                {!isCollapsed && <span className="truncate">Demandas</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  size={16}
                  className={cn(
                    'shrink-0 transition-transform',
                    expandedSections.includes('demandas') && 'rotate-180'
                  )}
                />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className={cn(
            'space-y-1 mt-1 overflow-hidden transition-all',
            isCollapsed && 'hidden'
          )}>
            <div className="pl-2 space-y-1 border-l border-border">
              {demandasSubItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-3 text-xs h-8 px-3 text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-3 space-y-2 text-xs text-muted-foreground">
        <div className={cn('text-center', !isCollapsed && 'text-left')}>
          {!isCollapsed && (
            <>
              <p className="font-medium text-foreground">© 2024</p>
              <p>Terms & Privacy</p>
            </>
          )}
        </div>
      </div>
    </aside>
  )
}

export { NavItem, NavSection }
