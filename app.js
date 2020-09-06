const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))


const PORT = config.get('port') || 5000

app.use('/api/auth', require('./routes/auth.routes') )

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(5000, () => console.log(`app started on ${PORT}...`))
  } catch (e) {
    console.log('Server error', e)
    process.exit()

  }
}

start()
