const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

//DB Connection
const conn = require("./db/conn");

conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(5000, () => console.log("Rodando na porta 5000"));

//geovane03 38.250.216.198/32
