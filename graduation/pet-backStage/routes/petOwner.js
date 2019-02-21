var express = require('express');
var router = express.Router();
const {addOwner,getData} = require("../service/petOwnerService");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//获取
router.get('/getData', async function(req, res, next) {
    res.send(await  getData(req.query)) 
  });
//新增
router.post('/addOwner',async function (req,res,next){
    res.send(await addOwner(req.body))
  })

module.exports = router;