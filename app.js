const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const readData = require('./readData')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(readData)

app.listen(3000, () => console.log(`App is running on : ${3000}`))
