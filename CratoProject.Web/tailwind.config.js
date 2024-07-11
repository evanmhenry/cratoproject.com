/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      md: "2rem",
    }, 
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      brand: {
        DEFAULT: "hsl(var(--brand))",
        foreground: "hsl(var(--brand-foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      success: {
        DEFAULT: "hsl(var(--success))",
        foreground: "hsl(var(--success-foreground))",
      },
      warning: {
        DEFAULT: "hsl(var(--warning))",
        foreground: "hsl(var(--warning-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      purple: {
        DEFAULT: "hsl(var(--purple))",
        foreground: "hsl(var(--purple-foreground))",
      },
      blue: {
        DEFAULT: "hsl(var(--blue))",
        foreground: "hsl(var(--blue-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
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
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    backgroundImage: {
      'brand-gradient': 'linear-gradient(135deg, #22D3EE, #60A5FA, #818CF8)',
    },
  },
};

export const plugins = [
  function({ addUtilities }) {
    const newUtilities = {
      '.bg-brand-gradient': {
        'background-image': 'linear-gradient(135deg, #22D3EE, #60A5FA, #818CF8)',
      },
      '.text-brand-gradient': {
        'background-image': 'linear-gradient(135deg, #22D3EE, #60A5FA, #818CF8)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        'color': 'transparent',
      },
      '.border-l-brand-gradient': {
        'border-left': '1px solid transparent',
        'border-image-source': 'linear-gradient(135deg, #22D3EE, #60A5FA, #818CF8)',
        'border-image-slice': '1',
       },
    }

    addUtilities(newUtilities, ['responsive', 'hover']);
  },
];

// 'linear-gradient(135deg, #14B8A6, #06B6D4, #3B82F6)'
// 'linear-gradient(135deg, #374151 0%, #F43F5E 50%, #FB923C 100%)'
'linear-gradient(135deg, #374151 0%, #BE3A55 25%, #F43F5E 50%, #F85A39 75%, #FB923C 100%)'

// 'linear-gradient(135deg, #22D3EE, #60A5FA, #818CF8)'
// 'linear-gradient(135deg, #EC4899, #EF4444, #F97316)'

