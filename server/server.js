const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();
const db = require("../src/components/config/db.config");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
// });
db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:3000",
};

server.use(cors(corsOptions));

// parse requests of content-type - application/json
server.use(bodyParser.json());
require("../src/components/route/customer.route")(server);
// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// simple route
server.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
