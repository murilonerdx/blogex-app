module.exports = {
  darkMode: 'class', // ou 'media' para basear-se nas preferências do sistema
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      backgroundColor: {
        'custom-dark': '#4B0082', // Roxo escuro para o fundo
      },
      textColor: {
        'custom-dark-text': '#FFFFFF', // Branco para o texto
      }
    },
  },
  purge: ['./src/**/*.{html,ts}'],
  plugins: [],
  // outras configurações do Tailwind
};
