const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

module.exports = mongoose;