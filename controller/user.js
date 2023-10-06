const db = require('../connect.js')
const User = db.customers
const path = require("path")

const alloutput = async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, "../", "public", "home.html"));
    } catch (error) {
        console.log(error);
    }
};
const save = async (req, res, next) => {
    const list = {
       Movie: req.body.Movie,
    }
    let result = await User.create(list);
    res.status(200).json({ success: true, msg: "list created", user: result });
};

const all = async (req, res, next) => {
    
    let result = await User.findAll();
    res.status(200).json({ success: true, msg: "list view", result: result });
};



module.exports = { alloutput, save,all };