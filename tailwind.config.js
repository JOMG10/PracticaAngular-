/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    colors: {
      // Configure your color palette here
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    //require('daisyui'),

  ],
}
