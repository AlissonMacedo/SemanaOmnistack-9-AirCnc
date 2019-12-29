const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes");

const app = express();

mongoose.connect(
  "mongodb+srv://alissonmacedo:Macedo1910@clusterstest-hynps.mongodb.net/omnistack9",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// req.query = Acessar query params (para filtros)
// req.params  = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação e edição)

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

app.use(express.json());
app.use(routes);

app.listen(3333);
