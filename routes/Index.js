const express = require("express");

const { db } = require("../database/db");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/answers", (req, res) => {
  const answers = db.get("answers").value();
  res.json(answers);
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

// Add answer
router.post("/", (req, res) => {
  const answer = req.body;

  db.get("answers").push(answer).last().write();

  res.json(answer);
});

module.exports = router;
