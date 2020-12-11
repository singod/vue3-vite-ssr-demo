const path = require('path')
const express = require('express')

const { ssr } = require('./dist/ssr/package.json')
const { default: handler } = require('./dist/ssr/main')

const server = express()

for (const asset of ssr.assets || []) {
  server.use(
    '/' + asset,
    express.static(path.join(__dirname, './dist/client/' + asset))
  )
}
// 再代理到根路径，解决图片问题
server.use('/', express.static(path.join(__dirname, './dist/client/_assets')))

server.get('*', async (req, res) => {
  const url = req.protocol + '://' + req.get('host') + req.originalUrl
  const { html } = await handler({ request: { ...req, url } })
  res.end(html)
})

const port = 8080
console.log(`Server started: http://localhost:${port}`)
server.listen(port)
