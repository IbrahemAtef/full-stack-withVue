const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose
      .connect("mongodb+srv://Falcons:Falcons@greenfield.64vuq.mongodb.net/vue?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(response => {
        console.log('MongoDB Connected');
      })
      .catch(err => {
        // Exit process with failure
        process.exit(1);
      });
  };
  
  module.exports = connectDB;