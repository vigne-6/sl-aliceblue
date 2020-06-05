import * as fastify from "fastify"
import fetch from 'node-fetch'
import fs from 'fs'
const server: fastify.FastifyInstance = fastify.default({ logger: true })
const servers: Array<string> = [
    "http://slimeserver.herokuapp.com",
    "http://sl-aliceblue.herokuapp.com",
    "http://sl-azure.herokuapp.com",
    "http://sl-crimson.herokuapp.com",
    "http://sl-firebrick.herokuapp.com",
    "http://sl-magenta.herokuapp.com",
    "https://sl-indigo.glitch.me",
    "https://sl-ivory.glitch.me",
    "https://sl-linen.glitch.me",
    "https://sl-navy.glitch.me",
    "https://sl-sienna.glitch.me",
    "https://sl-slateblue.glitch.me",
    "https://sl-thistle.glitch.me"
]
let latency: any = {}
let users: Object = {}

setInterval(
    () => {
        servers.forEach(async server => {
            const b4fetch: number = new Date().getTime()
            fetch(server).then(
                ()=>{
                    const l: number = new Date().getTime() - b4fetch
                    latency[server] = l / 2
                }
            )
        });
    },
    1000
)


server.get(
    "/",
    async (req, res) => {
        const stream = fs.createReadStream('./view/index.html')
        res.type('text/html').send(stream)
    }
)

server.get(
    "/route",
    async (req, res) => {

    }
)
server.get(
    "/latency",
    async (req, res) => {
        res.send(JSON.stringify(latency))
    }
)
const PORT: any = process.env.PORT || "5000"

server.listen(
    PORT,
    "0.0.0.0"
)