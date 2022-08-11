// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");

// const adapter = new FileSync("./database/db.json");
// const db = low(adapter);

// module.exports = { db };

const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://3xbun-user:top2541top@test0.hqdnz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error: ")
);

const AnswersSchema = new mongoose.Schema({
  q1: { type: String, required: true },
  q2: { type: String, required: true },
  q3: { type: String, required: true },
  q4: { type: String, required: true },
  q5: { type: String, required: true },
  q6: { type: String, required: true },
  q7: { type: String, required: true },
  q8: { type: String, required: true },
  q9: { type: String, required: true },
  q10: { type: String, required: true },
  q11: { type: String, required: true },
  q12: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
});

const Answers = mongoose.model("Answers", AnswersSchema);

module.exports = { Answers };
