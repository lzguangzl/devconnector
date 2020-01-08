const express = require('express')
const mongoose = require('mongoose')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.Promise = global.Promise
mongoose
  .connect(db, { useMongoClient: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
