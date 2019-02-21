var express = require('express');
var router = express.Router();

const {
  Register,
  login,
  repeat,
  remove
} = require("../service/usersService")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录
router.post('/login',async function (req,res,next){
  // let {
  //   userName,
  //   password
  // } = req.body;
  // let result = await login(req.body);
  // console.log(result)
  // if(result){
  //   req.session.user = {
  //     userName,
  //     password
  //   }
  // }
  // res.send(result)
  let { userName, password, type} = req.body; 
	res.send(await login(userName, password,type));
})

//注册
router.post('/Register',async function (req,res,next){
  let {userName,password,type} = req.body;
  // console.log(userName,password)
  // await register(userName,password);
  res.send(await Register(req.body))
})

//验重
router.post('/repeat', async function (req, res, next) {
  res.send(await repeat(req.body));
});

module.exports = router;
