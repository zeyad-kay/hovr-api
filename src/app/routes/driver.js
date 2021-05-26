const router = require("express").Router();

// router.get("/driver", (req, res, next) => {
//     // res.send("GET: driver")
//     let err = {
//         status: "403",
//         msg:"something"
//     }
//     next(err)
// })
router.post("/driver", (req, res) => {
    const {publisher} = require("../config/redis");
    // console.log(req.body.location);
    // let publisher = redis.createClient();
    publisher.publish(req.body.uuid, JSON.stringify(req.body.location));
    res.send("ok");
});
// router.post("/driver", (req, res) => {
//     const {publisher} = require('../config/redis');
//     // console.log(req.body.location);
//     // let publisher = redis.createClient();
//     publisher.publish(req.body.uuid, JSON.stringify(req.body.location));
//     res.send("ok");
// })

module.exports = router;