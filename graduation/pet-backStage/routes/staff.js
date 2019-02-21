var express = require('express');
var router = express.Router();

const{addStaff,getStaffData,updateStaff,removeStaff,getAllStaffData} = require("../service/staffService");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addStaff',async function(req, res, next) {
    let newStaff = req.body;
    const data = await addStaff(newStaff);
    res.send(data);
  });

  router.post('/getStaffData',async function(req, res, next) {
    let staffData = req.body;
    const data = await getStaffData(staffData);
    res.send(data);
  });
  
  router.post('/getAllStaffData',async function(req, res, next) {
    let usersId = req.body;
    const data = await getAllStaffData(usersId);
    res.send(data);
  });

  router.post('/updateStaff',async function(req, res, next) {
    let newStaff = req.body;
    const data = await updateStaff(newStaff);
    res.send(data);
  });
  
  router.post('/removeStaff',async function(req, res, next) {
    let id = req.body;
    console.log(id);
    const data = await removeStaff(id);
    res.send(data);
  });

module.exports = router;
