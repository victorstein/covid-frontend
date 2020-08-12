require('dotenv').config()

module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.jsx',
      './src/**/*.js'
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
