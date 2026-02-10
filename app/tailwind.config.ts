import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dream-purple': '#8B5CF6',
        'dream-pink': '#EC4899',
        'dream-blue': '#3B82F6',
        'dream-dark': '#1e1b4b',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config