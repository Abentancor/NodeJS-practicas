const express = require("express");
const {create} = require("express-handlebars");
const req = require("express/lib/request");

const app = express();

const hbs = create({
    extname:".hbs",
    partialsDir:["views/components"]
});

app.engine(".hbs", hbs.engine)
app.set("view engine", ".hbs")
app.set("views", "./views")

app.use(express.static(__dirname + "/public"))

app.use("/", require('./routes/home'))
app.use("/auth", require('./routes/auth'))

app.listen(5000,() =>console.log("server andando ⚙"))