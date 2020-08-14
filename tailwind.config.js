require('dotenv').config()

module.exports = {
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
