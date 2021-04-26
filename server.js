const express = require("express");
const knex = require("./knex");

const app = express();

app.use(express.json());

app.get("/api/ddrscores", async (req, res) => {
  const data = await knex.select().table("ddrscores");
  res.status(200);
  res.send(data);
  console.log("Ya got me!");
});

const port = 9999 || process.env.PORT;
app.listen(9999, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`)
});