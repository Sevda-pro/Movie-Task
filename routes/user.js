const path=require("path")
const { alloutput,save ,all} = require(path.join(__dirname, "../", "controller", "user.js"));
const express = require("express");
const router = express.Router();


router.route("/").get(alloutput);
router.route("/submit").post(save);
router.route("/all").get(all);


module.exports = router;