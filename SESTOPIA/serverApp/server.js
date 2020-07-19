const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 6011;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/skills", require("./src/routes/skill.routes"));
app.use("/api/v1/scenarios", require('./src/routes/scenario.routes'));

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
