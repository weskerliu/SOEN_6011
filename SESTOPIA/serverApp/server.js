
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 6011;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
app.use(cors());
app.use("/api/v1/skills", require("./src/routes/skill.routes"));
app.use("/api/v1/scenarios", require('./src/routes/scenario.routes'));
app.use("/api/v1/tools", require('./src/routes/tool.routes'));
app.use("/api/v1/references", require('./src/routes/reference.routes'));
app.use("/api/v1/skillTools", require('./src/routes/skillTool.routes'));
app.use("/api/v1/seareas", require('./src/routes/searea.routes'));
app.use("api/v1/seSkills", require('./src/routes/seSkill.routes'));

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port 6011`);
});
