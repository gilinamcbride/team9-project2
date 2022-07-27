const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ apiKey: process.env.pexel_key });
});

module.exports = router;
