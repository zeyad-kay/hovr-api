// const bodyParser = require("body-parser");
// const cors = require("cors");

// let print1 = (req, res, next) => {
//     console.log("print1");
//     next();
// };
// let print2 = (req, res, next) => {
//     console.log("print2");
//     next();
// };
// let err1 = (req, res, next) => {
//     console.log("err1");
//     let err = {
//         status: "403",
//         msg:"something"
//     };
//     next(err);
// };
// let errorHandler = (err,req, res, next) => {
//     console.log("errhandler");
//     if (err) {
//         res.send(err);
//     }
// };

// let middlewares = [
//     // print1,
//     // err1,
//     // print2,
//     cors(), //should add options in production
//     bodyParser.json(),
//     require("../routes"),
//     errorHandler,
// ];

// module.exports = middlewares;
// // ab -b 237 -c 100 -m POST -T application/json -n 180000 http://localhost:5000/driver