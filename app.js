const http = require('http')
const wr = require('wordreference-api')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)

  console.log('before')
  wr('Rainbow')
  wr('Rainbow', 'en', 'fr').then((result) => console.log(result))
  console.log('after')
})
