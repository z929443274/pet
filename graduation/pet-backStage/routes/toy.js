var express = require('express');
var router = express.Router();
const{ getToyByPage,  removeToy, addToy, updateToy } = require("../service/toyService");


/* GET users listing. */

//分页查询
router.get("/getToyByPage",async function(req, res, next){
    res.send(await getToyByPage(req.query));
});


//删除
router.post("/removeToy",async function(req, res, next){
    res.send(await removeToy(req.body));
});


//新增
router.post("/addToy",async function(req, res, next){
    res.send(await addToy(req.body));
});



//确认修改
router.post("/updateToy",async function(req, res, next){
    res.send(await updateToy(req.body));
});



module.exports = router;
