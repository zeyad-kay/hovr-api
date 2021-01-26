const router = require("express").Router()

router.get("/parent", (req, res) => {
    res.send("GET: parent")
})
router.post("/parent", (req, res) => {
    res.send("POST: parent")
})

module.exports = router;