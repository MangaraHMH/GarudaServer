if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const Controller = require("./controllers");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Controller.news);
app.get("/:id", Controller.newsById);
app.put("/edit/:id", Controller.editNews);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
