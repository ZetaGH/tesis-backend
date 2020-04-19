require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");

// const { connect } = require("./db.js");
// const { userRouter } = require("./controllers");
const { notFound, handleError } = require("./middlewares");
const sockets = require("./sockets");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
// const DB_URL = process.env.DB_URL;

(async function init() {
  try {
    // await connect(DB_URL);

    const app = express();
    const server = http.Server(app);
    sockets.init();
    app.use(cors());
    app.use(express.json());

    // app.use("/api/users", userRouter);

    app.use(notFound);
    app.use(handleError);

    server.listen(
      PORT,
      HOST,
      console.log(`Listening on http://${HOST}:${PORT} ...`)
    );
  } catch (err) {
    console.log(err);
  }
})();
