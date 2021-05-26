// const app = require("../../app");

// app.post("/auth/verify", (req, res) => {
//     console.log("send");
//     require("../services/VerificationService").sendVerificationCode(req.body.recipient, req.body.channel);

// });
// app.post("/auth/verify/check", async (req, res) => {
//     console.log("check");
//     console.log(await require("../services/VerificationService").verifyCode(req.body.recipient, req.body.code));
    
// });