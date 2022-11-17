const express = require("express");
const cors = require('cors')
require('dotenv').config()
require("./src/database/conect") 

const v1_email = require("./src/routes/v1/email/email")
const v1_managePortifolio = require("./src/routes/v1/portifolio")

const app = express();
const port = 3000 | process.env.PORT; 
 
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/v1/email", v1_email)
app.use("/v1/soudev", v1_managePortifolio)

app.listen(port, () => console.log(`App Runing at ${port}!`));  