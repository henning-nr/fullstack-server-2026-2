var express = require('express');
var router = express.Router();

// BANCO DE DADOS
let alunos = [
    { "id": 1, "name": "Luis", "age": 20, "gender": "m" },
    { "id": 2, "name": "Pedro", "age": 20, "gender": "m" },
    { "id": 3, "name": "Marcos", "age": 20, "gender": "m" }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ alunos });
});

module.exports = router;
