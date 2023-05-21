import http from 'http'

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        console.log('hello from server')
        res.end()
    }
})

server.listen(3001, () => {
    console.log('server on localhost:3001')
})
