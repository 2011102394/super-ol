const express = require('express')
const open = require('open')

const app = express()
const fileName = express.static(`${__dirname}/../examples`)
app.use(fileName)
const server = app.listen(10086, 'localhost', () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`服务器启动:http://${host}:${port}/index.html`)
  open(`http://${host}:${port}/index.html`)
})

