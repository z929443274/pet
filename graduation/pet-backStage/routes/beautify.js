var express = require('express');
var router = express.Router();
const {
    getBeautifyByPage,
    addBeautify,
    updateBeautify,
    removeBeautify,
    searchBeautify,
    newBeautify,
    getBeautify,
    getBeautifyOne
} = require("../service/beautifyService");


// 分页
router.get('/getBeautifyByPage', async function (req, res, next) {

    
    res.send(await getBeautifyByPage(req.query));
});

// //新增
router.post('/addBeautify', async function (req, res, next) {
    console.log(req.body);
    res.send(await addBeautify(req.body))
});


//修改
router.post('/updateBeautify', async function (req, res, next) {
    res.send(await updateBeautify(req.body));
});


//删除
router.post('/removeBeautify', async function (req, res, next) {
    res.send(await removeBeautify(req.body));
});

// //搜索
// router.post('/searchBeautify', async function (req, res, next) {
//     res.send(await searchBeautify(req.body));
// });

// router.get('/newBeautify', async function (req, res, next) {
//     let data = await newBeautify();
//     res.send(data);
// });
// router.get('/getBeautify', async function (req, res, next) {
//     let data = await getBeautify();
//     res.send(data);
// });

// router.post('/getBeautifyOne', async function (req, res, next) {
//     let data = await getBeautifyOne(req.body);
//     res.send(data);
// });

module.exports = router;