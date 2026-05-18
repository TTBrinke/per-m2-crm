---
name: Lithos Management
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#554336'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#625e57'
  on-secondary: '#ffffff'
  secondary-container: '#e6ded6'
  on-secondary-container: '#67625b'
  tertiary: '#7f5200'
  on-tertiary: '#ffffff'
  tertiary-container: '#a06900'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#e9e1d9'
  secondary-fixed-dim: '#ccc5bd'
  on-secondary-fixed: '#1e1b16'
  on-secondary-fixed-variant: '#4a4640'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#ffb954'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
  stone-light: '#F5F4F2'
  stone-medium: '#C8C1B9'
  slate-deep: '#242424'
  amber-vivid: '#FFAF2E'
  amber-burnt: '#D97706'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for a high-performance CRM and Project Management environment, specifically tailored for the construction and real estate sectors. The brand personality is **authoritative, precise, and dependable**, reflecting the durability of the physical structures the software helps manage.

The design style utilizes a **Modern Corporate** aesthetic with a **Tactile** edge. It leverages a "Stone-Themed" foundation—utilizing warm greys and deep slates—to provide a grounded user experience. The interface prioritizes high-contrast information density while maintaining a sophisticated, premium feel through generous whitespace and meticulous typographic scales.

Targeting professionals who manage complex data, the UI evokes a sense of **structured clarity**. It avoids unnecessary ornamentation, focusing instead on clear hierarchy and functional depth to reduce cognitive load during long working sessions.

## Colors

The palette is anchored by **Amber (#D97706)**, used strategically for primary actions and brand emphasis. This is balanced by a sophisticated **Stone and Slate** neutral palette that provides the "architectural" framework of the application.

### Light Mode
In light mode, the background uses a very soft stone-white (`#F5F4F2`) rather than pure white to reduce eye strain. Neutral text is rendered in `#242424` for maximum legibility. Use `#C8C1B9` for borders and secondary decorative elements to maintain the earthy, grounded theme.

### Dark Mode
Dark mode reverses the hierarchy using `#1A1A1A` as the base surface and `#242424` for elevated containers. Primary Amber elements should maintain their hue but may utilize the more vivid `#FFAF2E` for small-scale accents or indicators to ensure they "pop" against the dark background.

## Typography

This design system exclusively utilizes **Inter** to ensure a systematic, utilitarian, and highly legible experience across all data-dense views. 

The typographic strategy relies on **High-Contrast Weights**. Headlines use Bold (700) or ExtraBold (800) to create a clear vertical rhythm, while body text remains in Regular (400) for optimal readability. For CRM dashboards, use `label-md` for table headers and metadata, employing a slight letter-spacing and uppercase transform to distinguish functional labels from user-generated content.

## Layout & Spacing

The design system employs a **Fixed-Fluid Hybrid Grid**. Main application dashboards should span the full width with 32px side margins, while content-heavy forms and project pages should be constrained to a 1440px max-width container to preserve line length and readability.

A strict **8px spacing scale** is used for all internal margins and paddings. 
- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and margins.

Prioritize "White Space as Hierarchy"—use larger gaps (48px+) between distinct project sections and tighter gaps (8px-12px) between related input fields or data points within a card.

## Elevation & Depth

To maintain a professional, grounded feel, this design system avoids aggressive shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

1.  **Level 0 (Surface):** The base background color (`#F5F4F2` in light, `#1A1A1A` in dark).
2.  **Level 1 (Cards/Containers):** Pure white in light mode or `#242424` in dark mode. These are defined by a 1px border (`#C8C1B9`) rather than a shadow.
3.  **Level 2 (Active/Floating):** Used for modals and dropdowns. Use a soft, tinted shadow: `0px 10px 30px rgba(36, 36, 36, 0.08)`.

In dark mode, depth is conveyed primarily through color luminance—elevated elements are slightly lighter than the layer beneath them.

## Shapes

The shape language is characterized by **2XL Rounded Corners** (`1.5rem` for cards/large containers). This softens the "brutalist" stone-themed colors, making the professional tool feel more modern and approachable.

- **Primary Buttons:** Fully rounded (pill) or `rounded-lg` (1rem) depending on context.
- **Input Fields:** `rounded-lg` (1rem) to provide a comfortable touch target and consistent visual flow.
- **Data Chips/Tags:** Always pill-shaped to contrast against the structured, rectangular grid of the CRM.

## Components

### Buttons
Primary buttons use the Amber (`#D97706`) background with white text. Hover states should darken to `#B45309`. Secondary buttons use a stone-grey outline with `#242424` text. 

### Cards
Project and CRM cards must use `rounded-xl` (1.5rem) corners. They should have a 1px border (`#C8C1B9`) and no shadow when resting. On hover, apply a subtle elevation shadow and transition the border color to the primary amber.

### Input Fields
Inputs should have a subtle stone background (`#F5F4F2` in dark mode context) with a 1px border. Focus states must use a 2px Amber border. Labels should always be positioned above the field using the `label-md` typographic style.

### Lists & Tables
Tables are the heart of the CRM. Use alternating row stripes (Zebra striping) with a very faint stone tint. Headers must be "sticky" and use the `label-md` style with a solid bottom border.

### Status Chips
Use the Stone palette for neutral statuses (e.g., "Draft"), Amber for active/warning (e.g., "In Progress"), and a forest green (if added as a named color) for "Completed." Always use semi-transparent backgrounds with high-contrast text for chips.