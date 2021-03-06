const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ router: "clients" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ router: `results for id ${req.params.id}` });
});

module.exports = router;
