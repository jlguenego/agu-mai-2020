import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;

// log the url
app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/ws/now", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.use(express.static("public"));
app.use(serveIndex("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
