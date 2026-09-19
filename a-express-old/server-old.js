// const http = require("http")
import http from "http"
import fs from "fs"

let alunos = [
    {
        "id": 1,
        "nome": "jose",
        "idade": 55,
        "sexo": "masculino"
    }
]

const server = http.createServer((req, res) => {

    let nome = req.url.replace("/", "")
    let html = fs.readFileSync("./index.html", "utf-8")

    let page = html.replace("{nome}", nome)
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
    res.end(page)
})

server.listen(3000, () => {
    console.log("Servidor no ar na porta 3000")
})