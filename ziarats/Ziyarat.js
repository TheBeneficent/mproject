
var mongoose = require('mongoose');
var ZiyaratSchema = new mongoose.Schema({
    atabeId: Int8Array,
    ziaratType: Int8Array,
    zeyaratState: Int8Array,
    RequesterText: String,
    anotherFirstName: String,
    AnotherLastName: String,
    AcceptDate:Date,
    DateOfCompletion:Date,
    RequesterUserId:Int8Array,
});
mongoose.model('Ziyarat', ZiyaratSchema);

module.exports = mongoose.model('Ziyarat');
