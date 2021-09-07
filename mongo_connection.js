const mongoose = require('mongoose');
require('dotenv').config();

if(process.env.MONGO_URI){
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(console.log("connected"))
  .catch(console.log);
};

