/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    screens: {
      // Target iOS specifically using user-agent detection
      ios: {
        raw: "(pointer: coarse) and (hover: none) and (-webkit-touch-callout: none)",
      },
    },
  },
};
export const plugins = [];
