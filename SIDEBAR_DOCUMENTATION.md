# Sidebar Component Documentation

## Overview
The `Sidebar` component is a navigation sidebar with collapsible functionality. It features:
- Brand logo with name at the top
- Main navigation items with icons
- Expandable/collapsible submenu sections
- Collapse/expand toggle to show only icons
- Tooltips for icon-only mode
- Responsive design with smooth transitions

## Features

### 1. **Collapsible Sidebar**
- Click the menu icon in the header to toggle between full (264px) and collapsed (64px) states
- When collapsed, only icons are visible
- Text labels appear in tooltips on hover

### 2. **Navigation Items**
- Main navigation items: Dashboard, Propiedades, Demandas
- Each item has a colored icon using Phosphor Icons
- Active states using the `secondary` button variant
- Hover effects with the `ghost` variant

### 3. **Expandable Sections**
- Demandas section includes a submenu with 11 child items
- Collapsible trigger shows/hides submenu
- Chevron icon rotates on expand/collapse
- Submenu items are indented with a left border

### 4. **Design System Integration**
- Uses existing design tokens from `globals.css`
- Respects color scheme (primary, secondary, muted, foreground, background)
- Maintains spacing and typography standards
- Icon colors: blue-500, purple-500, blue-600

## Usage

### Basic Implementation
```tsx
import { Sidebar } from '@/components/sidebar'

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        {/* Your content here */}
      </main>
    </div>
  )
}
```

### With Default Collapsed State
```tsx
<Sidebar defaultCollapsed={true} />
```

## Component Structure

### Main Component: `Sidebar`
- **Props:**
  - `defaultCollapsed?: boolean` - Initial collapsed state (default: false)
- **State:**
  - `isCollapsed` - Tracks sidebar collapse state
  - `expandedSections` - Array of expanded section IDs
- **Features:**
  - Header with logo and collapse toggle
  - Navigation with main items
  - Collapsible Demandas section
  - Footer with copyright info

### Sub-Components: `NavItem` & `NavSection`
- **NavItem:** Individual navigation item with optional icon
  - Supports tooltips when collapsed
  - Active/inactive states
  - Icon alignment and spacing
- **NavSection:** Group of NavItems
  - Consistent spacing between items
  - Responsive to collapsed state

## Customization

### Modify Navigation Items
Edit the `mainItems` and `demandasSubItems` in the Sidebar component:
```tsx
const mainItems = [
  {
    icon: <YourIcon size={20} weight="fill" className="text-color" />,
    label: 'Your Label',
  },
  // ...
]
```

### Change Icon Colors
Update the className on icon elements:
```tsx
icon: <SquaresFour size={20} weight="fill" className="text-your-color" />
```

### Adjust Sidebar Width
Modify the width classes:
```tsx
isCollapsed ? 'w-16' : 'w-64'  // Change w-64 to your desired width
```

## Layout Integration

The Sidebar component is designed to work with a flex layout:
```tsx
<div className="flex h-screen">
  <Sidebar />
  <main className="flex-1 flex flex-col overflow-hidden">
    {/* Main content */}
  </main>
</div>
```

## Accessibility
- Button elements are properly semantic
- Icons have adequate size (16-20px) for visibility
- Tooltips provide context for icon-only mode
- Keyboard navigation supported through native button interactions
- Color contrast maintained with design tokens

## Demo
Visit `/dashboard` to see the Sidebar component in action with sample content.

## Dependencies
- `@phosphor-icons/react` - Icon library
- `radix-ui` - Collapsible and Tooltip primitives
- `class-variance-authority` - Button styling
- `tailwindcss` - Utility-first CSS
