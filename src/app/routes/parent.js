const router = require("express").Router();

// router.get("/parent", (req, res) => {
//     res.send("GET: parent")
// })
router.get("/parent", (req, res) => {
    console.log("parent");
    res.header("content-type", "text/event-stream");
    const {redis} = require("../config/redis");
    let subscriber = redis.createClient();
    
    subscriber.subscribe("driver1","driver2");
    // subscriber.psubscribe("driver?");
    
    subscriber.on("message", (channel, msg) => {
        console.log(channel,": ",msg);
        // console.log(msg);
        const event = "event: location\n";
        const data = `data: ${msg}\n\n`;
        
        res.write(event);
        res.write(data);
        // console.log(msg);
        // res.write(msg);
    });
});

module.exports = router;