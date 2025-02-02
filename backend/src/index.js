const express = require("express");
const { PORT } = require("./config");
const apiRoutes = require('./routes');

const app = express();

//registring api routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Port running successfully at ${PORT}`);
});
