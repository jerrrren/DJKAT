/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px #4f46e5' },
          '50%': { boxShadow: '0 0 30px #4f46e5' }
        }
      },
      animation: {
        pulse: 'pulse 2s infinite',
        glow: 'glow 1.5s infinite'
      }
    }
  },
  plugins: [],
};
