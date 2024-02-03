const express = require('express');
require('dotenv').config();

const app = express()
const port = process.env.APP_PORT || 4000


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Educative User <3!')
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

