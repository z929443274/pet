var express = require('express');
var router = express.Router();
const {
    getTrusteeshipByPage,
    addTrusteeship,
    updateTrusteeship,
    removeTrusteeship,
    searchTrusteeship,
    newTrusteeship,
    getTrusteeship,
    getTrusteeshipOne
} = require("../service/TrusteeshipService");


// 分页
router.get('/getTrusteeshipByPage', async function (req, res, next) {
    res.send(await getTrusteeshipByPage(req.query));
});

//新增
router.post('/addTrusteeship', async function (req, res, next) {
    res.send(await addTrusteeship(req.body))
});

//修改
router.post('/updateTrusteeship', async function (req, res, next) {
    res.send(await updateTrusteeship(req.body));
});

//删除
router.post('/removeTrusteeship', async function (req, res, next) {
    res.send(await removeTrusteeship(req.body));
});

// //搜索
// router.post('/searchTrusteeship', async function (req, res, next) {
//     res.send(await searchTrusteeship(req.body));
// });

// router.get('/newTrusteeship', async function (req, res, next) {
//     let data = await newTrusteeship();
//     res.send(data);
// });
// router.get('/getTrusteeship', async function (req, res, next) {
//     let data = await getTrusteeship();
//     res.send(data);
// });

// router.post('/getTrusteeshipOne', async function (req, res, next) {
//     let data = await getTrusteeshipOne(req.body);
//     res.send(data);
// });


module.exports = router;
