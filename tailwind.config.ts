import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'ifood-red': '#EA1D2C',
        'ifood-input-bg': '#F7F7F7',
        'ifood-light-gray': '#A6A6A6',
        'ifood-gray': '#717171',
        'ifood-black': '#3F3E3E',
        'ifood-yellow': '#FCBB00',
        'ifood-green': '#50A773',
        'ifood-border': '#DCDCDC',
      },
      fontFamily: {
        'ifood-regular': ['var(--font-ifood-regular)'],
        'ifood-bold': ['var(--font-ifood-bold)'],
        'ifood-thin': ['var(--font-ifood-thin)'],
        'ifood-light': ['var(--font-ifood-light)'],
        'ifood-medium': ['var(--font-ifood-medium)'],
        'ifood-extra-bold': ['var(--font-ifood-extra-bold)'],
        'ifood-titulos-regular': ['var(--font-ifood-titulos-regular)'],
        'ifood-titulos-bold': ['var(--font-ifood-titulos-bold)'],
        'ifood-titulos-thin': ['var(--font-ifood-titulos-thin)'],
        'ifood-titulos-light': ['var(--font-ifood-titulos-light)'],
        'ifood-titulos-medium': ['var(--font-ifood-titulos-medium)'],
        'ifood-titulos-extra-bold': ['var(--font-ifood-titulos-extra-bold)'],
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
