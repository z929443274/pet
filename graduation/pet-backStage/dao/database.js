const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/pet';  // 其中 pet 为连接的数据库名称
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {  
	console.log('Mongoose connected to ' + dbURI);
});