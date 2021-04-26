const express = require("express");
// const bodyParser = require("body-parser");
const knex = require("./knex");

const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.get("/index.html", (req, res) => {
//   res.sendFile(__dirname + "/" + "index.html");
// });

app.get("/api/ddrscores", async (req, res) => {
  const data = await knex.select().table("ddrscores");
  res.status(200);
  res.send(data);
  console.log("Ya got me!");
});

app.post("/api/ddrscores/addscore", urlencodedParser, async (req, res) => {
  // const response = await { songTitle: req.body.songTitle };

  const data = await knex.select().table("ddrscores");
  res.status(200);
  res.send("POST request called");
  // console.log(response);
});

const port = 9999 || process.env.PORT;
app.listen(9999, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`)
});