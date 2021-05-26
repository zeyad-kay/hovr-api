const Prouter = require("./driver"); 
const Drouter = require("./parent"); 
const { Router } = require("express");
let r = Router().use([Prouter, Drouter]);
module.exports = r;