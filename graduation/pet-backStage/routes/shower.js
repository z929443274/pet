var express = require('express');
var router = express.Router();
const{ getShowerByPage,  removeShower, addShower, updateShower } = require("../service/showerService");


/* GET users listing. */

//分页查询
router.get("/getShowerByPage",async function(req, res, next){
    res.send(await getShowerByPage(req.query));
});


//删除
router.post("/removeShower",async function(req, res, next){
    res.send(await removeShower(req.body));
});


//新增
router.post("/addShower",async function(req, res, next){
    res.send(await addShower(req.body));
});



//确认修改
router.post("/updateShower",async function(req, res, next){
    res.send(await updateShower(req.body));
});



module.exports = router;
