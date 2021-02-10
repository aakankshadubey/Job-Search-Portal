const express = require('express')
const route = express.Router()
const app = express()
const path = require('path')

const homePath = path.join(__dirname, "../public/homePage")
route.use('/', express.static(homePath))


exports = module.exports = route

