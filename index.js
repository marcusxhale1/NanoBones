import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs");
    });

app.get("/pricing", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("pricing.ejs");
    });


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});