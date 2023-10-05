/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },

    extend: {
      backgroundColor: {
        "hero-background": "#ffffff",
        "history-background": "#f4effc",
        "stuff-background": "#ffffff",
        "music-background": "#301e4e",
        "closing-background": "#ffffff",
      },
      textColor: {
        "hero-headline": "#1b1425",
        "hero-subheadline": "#1f1235",
        "hero-button": "#ff6e6c",
        "history-headline": "#1f1135",
        "history-subheadline": "#1b1325",
        "timer-headline": "#1f1135",
        "timer-subheadline": "#1b1325",
        "stuff-headline": "#1f1235",
        "stuff-subheadline": "#1b1425",
        "music-headline": "#ffffff",
        "music-paragraph": "#c9bae2",
        "closing-headline": "#1f1235",
        "closing-paragraph": "#1b1425",
        "closing-links": "#ff6e6c",
      },
      boxShadow: {
       "chatbubble": "0 35px 60px -15px rgba(0,0,0,0.2)"
      },
      scale: {
        "-1": "-1"
      },
      // fontSize: {
      //   "hero-headline": "160px",
      //   "hero-subheadline": "32px",
      //   "hero-paragraph": "48px",
      //   "history-headline": "64px",
      //   "history-paragraph": "32px",
      //   "timer-headline": "128px",
      //   "timer-subheadline": "48px",
      //   "timer-paragraph": "32px",
      //   "stuff-headline": "64px",
      //   "stuff-paragraph": "32px",
      //   "music-headline": "64px",
      //   "music-paragraph": "32px",
      //   "closing-headline": "64px",
      //   "closing-subheadline": "32px",
      //   "closing-paragraph": "32px",
      // },
    },
  },
  plugins: [],
};
