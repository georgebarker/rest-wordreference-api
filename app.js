const wr = require('wordreference-api')
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.get('/api/:word/:from/:to/', async (req, res, next) => {
  console.log(req.params)
  const result = await wr(req.params.word, req.params.from, req.params.to)
  res.json(result)
})
