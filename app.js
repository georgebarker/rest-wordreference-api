const wr = require('wordreference-api')
const express = require('express')
const app = express()
// TODO make port configurable in Dockerfile
app.listen(3000, () => {
  console.log('Server running on port 3000')
})

app.get('/url', (req, res, next) => {
  res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food'])
})

app.get('/api/:word/:from/:to/', async (req, res, next) => {
  console.log(req.params)
  const result = await wr(req.params.word, req.params.from, req.params.to)
  res.json(result)
})
