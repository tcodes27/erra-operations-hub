# ERRA Visual Style Guide

Self-contained reference for reproducing the ERRA look in any Vite + shadcn/ui project. Paste the snippets below into `index.html`, `index.css`, and `tailwind.config.ts` and you'll get an identical shell.

> This document is a **style guide only**. It does not include any private ERRA source code, schemas, endpoints, secrets, or product screenshots.

---

## 1. Brand

- **Name**: ERRA
- **Tagline**: *Your business, running smoothly* (also used: "Business Automation Platform")
- **Logo**: `src/assets/erra-logo.png` in the private repo, rendered `h-8` mobile / `h-10` desktop in the top nav. Export from the running app or recreate , not bundled here.
- **Favicon**: `/logo.png` referenced from `index.html`.

## 2. Typography

- **Family** (everything): `Inter`, weights `300, 400, 500, 600, 700`.
- Load via Google Fonts `<link>` in `<head>` , do **not** `@import` a URL from CSS.
- Tailwind: `fontFamily.sans = ['Inter', 'sans-serif']` so every default class uses Inter.

## 3. Color tokens

All tokens are HSL CSS variables. Hex equivalents shown for reference.

### Light mode (`:root`)

| Token | HSL | Hex |
|---|---|---|
| `--background` | `0 0% 100%` | `#FFFFFF` |
| `--foreground` | `237 24% 16%` | `#1F2033` |
| `--card` / `--popover` | `0 0% 100%` | `#FFFFFF` |
| `--card-foreground` | `237 24% 16%` | `#1F2033` |
| `--primary` | `191 100% 35%` | `#00A3B3` (teal , brand) |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` |
| `--secondary` | `191 100% 45%` | `#00D1E6` (bright cyan) |
| `--muted` | `0 0% 96.1%` | `#F5F5F5` |
| `--muted-foreground` | `0 0% 45.1%` | `#737373` |
| `--accent` | `34 50% 72%` | `#DDBB8F` (warm sand) |
| `--accent-foreground` | `237 29% 15%` | `#1B1D31` |
| `--destructive` | `0 84.2% 60.2%` | `#EF4444` |
| `--border` / `--input` | `0 0% 89.8%` | `#E5E5E5` |
| `--ring` | `191 100% 35%` | `#00A3B3` |
| `--highlight` | `36 34% 71%` | `#D4BB99` |
| `--dark` | `237 24% 16%` | `#1F2033` |
| `--radius` | , | `1rem` |

### Dark mode (`.dark`)

| Token | HSL | Hex |
|---|---|---|
| `--background` | `237 24% 16%` | `#1F2033` |
| `--foreground` | `0 0% 98%` | `#FAFAFA` |
| `--card` | `237 24% 20%` | `#272940` |
| `--muted` | `237 24% 25%` | `#31334F` |
| `--border` / `--input` | `237 24% 30%` | `#3B3D5E` |
| `--primary` | `191 100% 35%` | `#00A3B3` |
| `--secondary` | `191 100% 45%` | `#00D1E6` |
| `--accent` | `34 50% 72%` | `#DDBB8F` |
| `--ring` | `191 100% 45%` | `#00D1E6` |

### Chart palette

- Light: `#00A3B3, #00D1E6, #1F2033, #D4BB99, #F5A45C`
- Dark: same, with `chart-5` → `#E11D74`

## 4. Design language

- **Radius**: `--radius: 1rem` (16px). Very rounded, soft.
- **Shadows**: default shadcn `shadow-sm` on cards and sticky nav. No custom shadow tokens.
- **Theme system**: `next-themes` with `light | dark | system`, class-based (`darkMode: ["class"]`).
- **Icons**: `lucide-react`.
- **Components**: shadcn/ui (Radix) , `components.json` style `default`, baseColor `slate`, CSS variables `true`.
- **Custom utility**: `.scrollbar-hide` (cross-browser scrollbar hiding).
- **Keyframes**: `accordion-down`, `accordion-up`, `fall` (3s ease-in falling confetti).

## 5. Layout patterns

- **App shell**: sticky top nav (`h-16`, `border-b bg-card shadow-sm`), centered logo + label, grouped `DropdownMenu` navigation (Radix , not `NavigationMenu`), right-cluster: notifications → theme toggle → sign out.
- **Container**: `max-w-7xl mx-auto`, page padding `px-4 lg:px-6 py-8`.
- **Mobile nav**: horizontal scroll strip of pill buttons using `.scrollbar-hide`.
- **Buttons**: shadcn defaults; primary uses teal `--primary`, hover `bg-primary/90`.

---

## 6. Ready-to-paste snippets

### `index.html` , `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<title>ERRA | Business Automation Platform</title>
<meta name="description" content="We handle the behind-the-scenes systems so you can focus on serving your clients. Automated booking, follow-ups, and client care that works on autopilot." />
<link rel="icon" href="/logo.png" />
```

### `src/index.css` , token blocks

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 237 24% 16%;

    --card: 0 0% 100%;
    --card-foreground: 237 24% 16%;
    --popover: 0 0% 100%;
    --popover-foreground: 237 24% 16%;

    --primary: 191 100% 35%;
    --primary-foreground: 0 0% 100%;

    --secondary: 191 100% 45%;
    --secondary-foreground: 0 0% 100%;

    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;

    --accent: 34 50% 72%;
    --accent-foreground: 237 29% 15%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 191 100% 35%;

    --highlight: 36 34% 71%;
    --dark: 237 24% 16%;

    --chart-1: 191 100% 35%;
    --chart-2: 191 100% 45%;
    --chart-3: 237 24% 16%;
    --chart-4: 34 42% 71%;
    --chart-5: 24 90% 66%;

    --radius: 1rem;
  }

  .dark {
    --background: 237 24% 16%;
    --foreground: 0 0% 98%;

    --card: 237 24% 20%;
    --card-foreground: 0 0% 98%;
    --popover: 237 24% 20%;
    --popover-foreground: 0 0% 98%;

    --primary: 191 100% 35%;
    --primary-foreground: 0 0% 100%;

    --secondary: 191 100% 45%;
    --secondary-foreground: 0 0% 100%;

    --muted: 237 24% 25%;
    --muted-foreground: 0 0% 70%;

    --accent: 34 50% 72%;
    --accent-foreground: 237 29% 15%;

    --destructive: 0 62.8% 50%;
    --destructive-foreground: 0 0% 98%;

    --border: 237 24% 30%;
    --input: 237 24% 30%;
    --ring: 191 100% 45%;

    --chart-5: 330 75% 50%;
  }

  * { @apply border-border; }
  body { @apply bg-background text-foreground font-sans antialiased; }
}

@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
}
```

### `tailwind.config.ts` , fragment

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        highlight: "hsl(var(--highlight))",
        dark: "hsl(var(--dark))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fall: {
          "0%": { transform: "translateY(-100vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fall: "fall 3s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 7. How to apply in a fresh Vite + shadcn project

1. Scaffold with Vite + React + TS, install shadcn/ui with `baseColor: slate`, CSS variables `true`.
2. Paste the `<head>` snippet into `index.html` (fonts + title + description + favicon).
3. Paste the token blocks into `src/index.css` (overwriting the shadcn defaults).
4. Merge the Tailwind config fragment into `tailwind.config.ts`.
5. `bun add next-themes lucide-react` , wire `<ThemeProvider defaultTheme="system">` at the app root.
6. Export the ERRA logo PNG from the private repo and drop it at `src/assets/erra-logo.png` + `public/logo.png`.
7. Build the sticky top nav (`h-16 border-b bg-card shadow-sm`, `max-w-7xl mx-auto`), use `DropdownMenu` for nav groups, `lucide-react` for icons, and `.scrollbar-hide` for the mobile pill strip.

That's the entire visual system.
