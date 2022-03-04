const express   = require("express");
const router    = express.Router(); 

router.get("/", (req, res)=>{
    const urls = [
        {origin: "www.google.com", shortURL:"google"},
        {origin: "www.youtube.com", shortURL:"yt"},
        {origin: "www.instagram.com", shortURL:"insta"},
    ]
    res.render('home', {urls:urls})
})



module.exports = router