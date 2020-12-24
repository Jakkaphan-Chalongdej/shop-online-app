// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const server = express();
// const db = require("../src/components/config/db.config");
// // db.sequelize.sync({ force: true }).then(() => {
// //   console.log("Drop and Resync with { force: true }");
// // });

// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200
// };
// db.sequelize.sync();
// server.use(cors(corsOptions));
// server.use(bodyParser.json());
// require("../src/components/route/customer.route")(server);
// require("./src/components/route/book.route")(server);
// server.use(bodyParser.urlencoded({ extended: true }));


// server.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
// // .catch((ex) => {
// //   console.error(ex.stack);
// //   process.exit(1);
// // });
