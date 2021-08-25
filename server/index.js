import path from "path";
import fs from "fs";

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const appComp = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error occured: ", err);
      return res.status(500).send("Oops, Something went wrong");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appComp}</div>`)
    );
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => `Server is listening on port ${PORT}`);
