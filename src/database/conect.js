const mongoose = require("mongoose");

const conection = mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mydevcluster.orlyx0l.mongodb.net/portifolio?retryWrites=true&w=majority`,function (err, done) {
  if (err) return console.error(":> Falha ao Conectar-se com a base de dados, (possíveis credenciais invalidas)");
  return console.log(">>>Conectou com a base de dados"); 
})
module.exports = conection; 