const mongoose = require('mongoose');

module.exports = async() =>{
    const mongoUrl =
      "mongodb+srv://disha:p0cGnHtD6axdr3HR@cluster0.juj8psu.mongodb.net/?retryWrites=true&w=majority";

      try {
        const connect = await mongoose.connect(mongoUrl,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
      });

      console.log(`MongoDB connected: ${connect.connection.host}`);

      } catch(error){
        console.log(error);
        process.exit(1);
      }
      
};
