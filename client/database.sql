CREATE TABLE ddrscores_table (
  id SERIAL PRIMARY KEY,
  song_title varchar(255) NOT NULL,
  score integer NOT NULL
);

INSERT INTO ddrscores_table (song_title, score) VALUES ('Long Train Running', 700000);