const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var jsonParser = bodyParser.json()

app.use(express.json())

app.post('/', jsonParser, function (req, res) {
  res.send('Welcome ' + req.body.name)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
