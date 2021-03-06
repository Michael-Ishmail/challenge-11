const express = require('express')
const app = express()

const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3001

const apiRoute = require('./Routes/APIRoute')
const htmlRoute = require('./Routes/HTMLroute')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.use('/api', apiRoute)
app.use('/', htmlRoute)

app.listen(PORT, () => {
    console.log('Server is on port 3001')
})