const express = require('express')
const open = require('open')

const app = express()
const exampleDir = express.static(`${__dirname}/../examples`)
const distDir = express.static(`${__dirname}/../dist`)
const libDir = express.static(`${__dirname}../examples/lib`)
const imgDir = express.static(`${__dirname}../examples/img`)
app.use(exampleDir)
app.use('/dist', distDir)
app.use('/lib', libDir)
const server = app.listen(10086, 'localhost', () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`服务器启动:http://${host}:${port}/index.html`)
	open(`http://${host}:${port}/index.html`)
})
