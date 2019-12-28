const express = require("express");

const app = express();

// req.query = Acessar query params (para filtros)
// req.params  = Acessar route params (para edição, delete)

// Dados expostos na url
// req.query = Acessar query params Ex localhost:3333/users?idade=20:
// app.get("/users", (req, res) => {
//   return res.json({ idade: req.query.idade });
// });
// app.listen(3333);

//Editar dados
//localhost:3333/users/1
// app.put("/users/:id", (req, res) => {
//   return res.json({ id: req.params.id });
// });
// app.listen(3333);

app.put("/users/:id", (req, res) => {
  return res.json({ id: req.params.id });
});

app.listen(3333);
