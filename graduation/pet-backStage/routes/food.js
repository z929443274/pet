var express = require('express');
var router = express.Router();
const{ getFoodByPage,  removeFood, addFood, updateFood } = require("../service/foodService");


/* GET users listing. */

//分页查询
router.get("/getFoodByPage",async function(req, res, next){
    res.send(await getFoodByPage(req.query));
});


//删除
router.post("/removeFood",async function(req, res, next){
    res.send(await removeFood(req.body));
});


//新增
router.post("/addFood",async function(req, res, next){
    res.send(await addFood(req.body));
});



//确认修改
router.post("/updateFood",async function(req, res, next){
    res.send(await updateFood(req.body));
});



module.exports = router;
