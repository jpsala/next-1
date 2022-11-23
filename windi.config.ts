import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,css,tsx}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  attributify: true,
  shortcuts: {
    // btn: 'rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow',
  },
  extend: {
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" }
      }
    },
    animation: {
      wiggle: "wiggle 200ms ease-in-out"
    }
  },
  plugins: [
    // Other plugins
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
  
})
