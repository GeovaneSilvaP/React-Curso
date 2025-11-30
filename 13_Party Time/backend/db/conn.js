const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://geovane:geovane03@cluster0.5kpmmny.mongodb.net/meuBanco"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log("Erro na conexão:", error);
  }
}

module.exports = main;
