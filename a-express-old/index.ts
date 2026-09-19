import express, { type Express, type Response, type Request } from "express"
import fs from "fs"

const app: Express = express()
app.use(express.json())

let name = "Jose"

// BANCO DE DADOS
let alunos = [
    { "id": 1, "name": "Luis", "age": 20, "gender": "m" },
    { "id": 2, "name": "Pedro", "age": 20, "gender": "m" },
    { "id": 3, "name": "Marcos", "age": 20, "gender": "m" }
]

app.get("/", (req: Request, res: Response) => {
    let html = fs.readFileSync("./index.html", "utf-8")
    let page = html.replace("{nome}", name)
    res.send(page)
})

app.get("/alunos", (req: Request, res: Response) => {
    res.send(alunos)
})

app.get("/alunos/:id", (req: Request, res: Response) => {
    let alunoId: any =  req.params.id
    let aluno = alunos[alunoId]
    res.send(aluno)
})

app.post("/alunos", (req: Request, res: Response) => {
    let aluno = req.body
    console.log("aluno veio", aluno)
    alunos.push(aluno)
    res.send("aluno savo")
})


app.patch("/alunos/:id", (req: Request, res: Response) => {
    let aluno = req.body
    let alunoId: any = req.params.id
    console.log("aluno veio", aluno)
    console.log("alunoid veio", alunoId)
    alunos[alunoId].name = aluno.name
    res.send("aluno editado")
})

app.delete("/alunos/:id", (req: Request, res: Response) => {
    let alunoId: any = req.params.id
    alunos.splice(alunoId, 1)
    res.send("aluno removido")
})




app.listen(3000, () => { console.log("servidor on na porta 3000") })