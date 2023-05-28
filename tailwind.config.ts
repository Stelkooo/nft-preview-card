import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215,51%,70%)',
        cyan: 'hsl(178,100%,50%)',
        'very-dark-blue-main': 'hsl(217,54%,11%)',
        'very-dark-blue-card': 'hsl(216,50%,16%)',
        'very-dark-blue-line': 'hsl(215,32%,27%)',
      },
      maxWidth: {
        xs: '327px',
      },
      fontSize: {
        xl: ['22px', '28px'],
        lg: ['18px', '26px'],
        base: ['15px', '19px'],
      },
    },
  },
  plugins: [],
} satisfies Config;
