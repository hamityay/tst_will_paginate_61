const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')
const sass = require('./loaders/sass')
const scss = require('./loaders/scss')
const css = require('./loaders/css')

environment.loaders.prepend('sass', sass)
environment.loaders.prepend('scss', scss)
environment.loaders.prepend('css', css)
environment.loaders.prepend('coffee', coffee)
module.exports = environment
