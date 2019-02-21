var express = require('express');
var router = express.Router();

const{addStorefront,getStorefrontData,updateStorefront,removeStorefront} = require("../service/storefrontService")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addStorefront',async function(req, res, next) {
  let newStorefront = req.body;
  const data = await addStorefront(newStorefront);
  console.log(data+"111")
  res.send(data);
});

router.post('/getStorefrontData',async function(req, res, next) {
  let storefrontData = req.body;
  const data = await getStorefrontData(storefrontData);
  res.send(data);
});

router.post('/updateStorefront',async function(req, res, next) {
  let newStorefront = req.body;
  const data = await updateStorefront(newStorefront);
  res.send(data);
});

router.post('/removeStorefront',async function(req, res, next) {
  let id = req.body;
  console.log(id);
  const data = await removeStorefront(id);
  res.send(data);
});


module.exports = router;