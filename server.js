const express = require("express");
const knex = require("./knex");

const app = express();

app.use(express.json());

// ROUTES

// get all scores

app.get("/api/ddrscores/", async (req, res) => {
  const data = await knex.select().table("ddrscores_table");
  res.status(200);
  res.send(data);
  console.log("Ya got me!");
});

// get a score

// create/insert a score

app.post("/api/ddrscores/addscore", async (req, res) => {
  try {
    // const { song_title, score } = req.body;
    const newScore = await knex("ddrscores_table").insert({
      song_title: req.body.song_title, 
      score: req.body.score });
    res.send(newScore);
    console.log(newScore);
  } catch (error) {
    console.error(error.message);
  }
});

// update a score


// delete a score



const port = 9999 || process.env.PORT;
app.listen(9999, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`)
});