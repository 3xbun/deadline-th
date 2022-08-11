const express = require("express");

const { Answers } = require("../database/db");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

// API //

// Get all answers
router.get("/api/answers", async (req, res) => {
  const ans = await Answers.find();
  return res.status(200).json(ans);
});

// Add answer
router.post("/api/answers", async (req, res) => {
  Object.values(req.body).every((item) => {
    if (item === "") {
      return res.status(400).json({ msg: "Answer can't be empty" });
    }
  });

  const answer = new Answers({
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    q6: req.body.q6,
    q7: req.body.q7,
    q8: req.body.q8,
    q9: req.body.q9,
    q10: req.body.q10,
    q11: req.body.q11,
    q12: req.body.q12,
  });

  await answer.save();
  return res.status(201);
});

router.delete("/api/answers/:id", async (req, res) => {
  const { id } = req.params;
  await Answers.findByIdAndDelete(id);
  return res.status(200).json({ msg: "Delete successfully" });
});

module.exports = router;
