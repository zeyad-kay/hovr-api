const router = require("express").Router()

router.get("/driver", (req, res) => {
    res.send("GET: driver")
})
router.post("/driver", (req, res) => {
    res.send("POST: driver")
})

module.exports = router;