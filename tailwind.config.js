/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],

  // ⬇️ Safelist para clases dinámicas de Swiper
safelist: [
  'scale-90',
  'bg-white/80',
  'opacity-100',
  {
    pattern: /swiper-slide-(next|prev)/,
  }
],

  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        // Explicitly map CSS variables to Tailwind color names
        border: 'rgb(var(--color-border))', // General border
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          foreground: 'rgb(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          // Add foreground if needed, e.g., secondary: { DEFAULT: '...', foreground: '...' }
        },
        card: {
          DEFAULT: 'rgb(var(--color-card))',
          foreground: 'rgb(var(--color-card-foreground))',
        },
        // Keep sidebar specific colors if they differ significantly
        // or remove if they are now redundant with the above
        sidebar: {
          DEFAULT: 'rgb(var(--color-sidebar))', // Or use 'card' if same
          foreground: 'rgb(var(--color-sidebar-foreground))', // Or use 'card-foreground'
          // primary: 'rgb(var(--color-sidebar-primary))', // Likely redundant now
          // 'primary-foreground': 'rgb(var(--color-sidebar-primary-foreground))', // Likely redundant
          // accent: 'rgb(var(--color-sidebar-accent))', // Define if needed
          // 'accent-foreground': 'rgb(var(--color-sidebar-accent-foreground))', // Define if needed
          border: 'rgb(var(--color-border))', // Use general border
          // ring: 'rgb(var(--color-sidebar-ring))' // Define if needed
          hover: 'rgb(var(--color-sidebar-hover))', // Keep if specific hover needed
        },
        // Add other custom colors if necessary
        // Example: muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
