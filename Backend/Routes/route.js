const express = require('express');
const router = express.Router();
router.get("/check",(req,res)=>{
    res.json({
        "msg":"Succesfully reached the check route;"
    });
});

module.exports = router;