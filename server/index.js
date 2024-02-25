const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
const userRoutes = require("./routes/api/userRoutes");
const menuRoutes = require("./routes/api/menuRoutes");
const imageRoutes = require("./routes/api/imageRoutes");
app.use("/api", userRoutes);
app.use("/api", menuRoutes);
app.use("/api", imageRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

/*
1. ruta za login koja je post, ?usera saljem u body?
2. ruta za register koja je post
3. ruta koja kreira menu
4. ruta koja se poziva za povlačenje menu iz baze
Pitanje je kakvi će modeli biti?



*/
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
