const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const FILE = "flashcards.json";

// Get all flashcards
app.get("/api/flashcards", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

// Add flashcard
app.post("/api/flashcards", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));

  const newCard = {
    id: Date.now(),
    question: req.body.question,
    answer: req.body.answer
  };

  data.push(newCard);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json(newCard);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});