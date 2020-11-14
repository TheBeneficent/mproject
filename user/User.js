var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mproject', { useMongoClient: true });
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  fullName: String,
  phoneNumber:String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');