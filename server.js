const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

// constants
const PORT = process.env.PORT || 4040

//  view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// static files
app.use(express.static(path.join(__dirname, 'public')))

// middleware
// app.use(morgan('combined'))
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', require('./routes/index'))

// server
app.listen(PORT, () => {
  console.log(`server has started at ${PORT}`)
})
