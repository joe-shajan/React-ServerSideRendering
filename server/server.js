import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import StaticRouter from "react-router-dom/server";
import App from "../src/App.js";

const app = express();

app.use("*", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
