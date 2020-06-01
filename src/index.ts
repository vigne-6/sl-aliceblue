import * as fastify from "fastify"
import fetch from 'node-fetch'
import fs from 'fs'

const server:fastify.FastifyInstance = fastify.default({logger:true})

server.get("/", async(req, res) => {
    const stream = fs.createReadStream('./view/index.html')
    res.type('text/html').send(stream)
})
const PORT:any = process.env.PORT || "3000"

server.listen(
    PORT,
    "0.0.0.0"
)