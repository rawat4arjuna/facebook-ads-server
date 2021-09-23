var express = require("express");
var router = express.Router();
const constants = require("../Constants");
//const sendMail = require("../controllers/sendemail");
router.get("/", function (req, res, next) {
  res.send({ data: "Api Working" });
});

// router.post("/send_email", function (req, res, next) {
//   console.log("req", req.body);
//   if (req.body?.email) {
//     try {
//       sendMail.main(req.body?.email);
//       res.send({ send: "data", run: "data" });
//     } catch (e) {
//       res.status(404).send({ message: e.message });
//     }
//   } else {
//     res.status(400).send({ message: "Email Not Found" });
//   }
// });

router.get("/categories", function (req, res, next) {
  res.send({ categories: constants.categories });
});

module.exports = router;
