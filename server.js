const express = require("express");
const knex = require("./knex");

const app = express();

app.use(express.json());

// ROUTES

// get all scores

app.get("/api/ddrscores", async (req, res) => {
  try {
    const allScores = await knex.select().table("ddrscores_table");
    res.status(200);
    res.send(allScores); // why res.json()? what does this mean/do?
    console.log("Ya got me!");
  } catch (err) {
    console.error(err.message);
  }
});

// get a score
app.get("/api/ddrscores/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const score = await knex.select().table("ddrscores_table").where("id", id);
    res.send(score);
  } catch (err) {
    console.error(err.message);
  }   
});

// create/insert a score

app.post("/api/ddrscores", async (req, res) => {
  try {
    // const { song_title, score } = req.body;
    const newScore = await knex("ddrscores_table").insert({
      song_title: req.body.song_title, 
      score: req.body.score });
    res.send(newScore);
  } catch (err) {
    console.error(err.message);
  }
});

// update a score
app.put("/api/ddrscores/:id", async (req, res) => {
  const { id } = req.params; // WHERE
  const { score } = req.body; // SET
  try {
    const updateScore = await knex("ddrscores_table").where("id", id).update({ score: `${score}` });
    res.send(`Score was successfully updated`);
  } catch (err) {
    console.log(err.message);
  }
});

// delete a score
app.delete("/api/ddrscores/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const scoreToDelete = await knex("ddrscores_table").where("id", id).del();
    res.send("Score was successfully deleted");
  } catch (err) {
    console.error(err.message);    
  }
});


const port = 9999 || process.env.PORT;
app.listen(9999, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`)
});