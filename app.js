const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()


const PORT = config.get('port') || 5000
app.listen(5000, () => console.log(`app started on ${PORT}...`))

async function start () {
  try {
    await mongoose.connect(config.get('mongoUrl')
  } catch (e) {

  }
}