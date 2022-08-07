const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5500;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const index = require("./routes/Index");

app.use("/", index);

app.listen(PORT, async () => {
  console.log(`App running on http://localhost:${PORT}`);
});
