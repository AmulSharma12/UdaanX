const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

//registring api routes
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Port running successfully at ${ServerConfig.PORT}`);
});
