import * as fastify from "fastify"
import fetch from 'node-fetch'

const server:fastify.FastifyInstance = fastify.default({logger:true})

server.get("/", async(req, res) => {
    res.send("helo");
})
const PORT:String = process.env.PORT || "3000"

server.listen(
    PORT.toString(),
    () => {
        console.log(`Listening on port ${PORT}`)
    }
)