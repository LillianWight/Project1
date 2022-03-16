const express = require("express");
const app = express();

app.get("/eye", (req, res) => {
  res.send(
    `He is gathering all evil to him. Very soon he will summon an army great enough to launch an assault upon Middle-Earth.`
  );
});
