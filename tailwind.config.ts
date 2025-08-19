export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ['Italianno', 'cursive'],
        Tinos: ['Tinos'],
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slowRotate: {
          '0%': { transform: 'rotate(-25deg) scale(1.5)' },
          '100%': { transform: 'rotate(-28deg) scale(1.5)' },
        },
        slowRotate1: {
          '0%': { transform: 'rotate(-25deg) scale(1.5)' },
          '100%': { transform: 'rotate(-28deg) scale(1.5)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #FAD29E50' },
          '50%': { boxShadow: '0 0 20px #FAD29E' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 0.8s ease-out forwards',
        wave: 'wave 4s ease-in-out infinite',
        zoomIn: 'zoomIn 1s ease-out forwards',
        slowRotate: 'slowRotate 5s ease-in-out infinite alternate',
        slowRotate1: 'slowRotate1 5s ease-in-out infinite alternate',
        bounceIn: 'bounceIn 0.7s ease-out forwards',
        glow: 'glow 1.5s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
