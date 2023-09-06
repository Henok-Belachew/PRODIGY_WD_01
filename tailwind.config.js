/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "ff-oswald": ['Oswald', 'sans-serif'],
        "ff-rubik": ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        "fw-500": 500,
        "fw-700": 700
      },
      fontSize: {
        'headline-lg': '5rem',
        'headline-md': '3rem',
        'headline-sm': '2rem',
        'title-lg': '1.8rem',
        'title-md': '1.5rem',
        'title-sm': '1.4rem',
      },
      transitionDuration: {
        'td-1': '0.25s',
        'td-2': '0.5s',
        'td-3': '1s',
      },
      cubicBezier: {
        'in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'out': 'cubic-bezier(0.05, 0.83, 0.52, 0.97)',
      },
      borderRadius: {
        "radius-circle": "50%",
        "radius-12": "12px",
        "radius-6": "6px",
        "radius-4": "4px"     // Use the custom CSS variable for 4px ra"diu",
      },
      colors: {
        "rich-black-fogra-29": "hsl(222, 44%, 8%)",
        "middle-blue-green_40": "hsla(174, 64%, 71%, 0.4)",
        "midnight-green": "hsl(186, 100%, 19%)",
        "midnight-green_a25": "hsla(186, 100%, 19%, 0.25)",
        "independece": "hsl(236, 14%, 39%)",
        "verdigris": "hsl(182, 100%, 35%)",
        "ming": "hsl(186, 72%, 24%)",
        "space-cadet": "hsla(226, 45%, 24%)",
        "eerie-black": "hsl(0, 0%, 13%)",
        "alice-blue": "hsl(187, 25%, 94%)",
        "gray-web": "hsl(0, 0%, 50%)",
        "gainsboro": "hsl(0, 0%, 87%)",
        "white": "hsl(0, 0%, 100%)",
        "white_a20": "hsla(0, 0%, 100%, 0.2)",
        "white_a10": "hsla(0, 0%, 100%, 0.1)",
        "black": "hsl(0, 0%, 0%)",
      }
    },
  },
  plugins: [],
}

