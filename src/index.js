const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const app = express();
const apiRoutes = require("./routes/index");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Started at port ${PORT} `);
  });
};

prepareAndStartServer();
