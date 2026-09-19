var express = require('express');
var router = express.Router();

// DB
let nome = "Henning"
let sobre = "Summer"

// BANCO DE DADOS

let cols = ["ID", "NOME", "SEXO", "IDADE"]

/* GET home page. */
router.get('/', function(req, res) {

  fetch('https://organic-succotash-p4v44r9jj5q36wxp-3000.app.github.dev/alunos')
    .then(dados => dados.json())
    .then(alunos => {
      console.log(alunos)
      res.render('index', { nome, sobre, cols, alunos: alunos.alunos });
    })
});

module.exports = router;
