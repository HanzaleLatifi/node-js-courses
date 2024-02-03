const express = require('express');
require('dotenv').config();

const app = express()
const port = process.env.APP_PORT ;


app.use(express.json())

app.get('/', (req, res) => {
    res.send(req.query)
    const page = req.query.page;
    const limit = req.query.limit;
   
})
app.get('/:id', (req, res) => {
    res.send(req.params.id)
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

