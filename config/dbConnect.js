const mongoose = require('mongoose');


const dbConnect =async() =>{
    try{
        const connected= await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      //  useCreateIndex: true,
        //useFindAndModify: false,
        }).then((data)=>console.log(`Connected to MongoDB: ${data.connection.host}`));;
    }
    catch(error){
        console.log(`Error occurred, ${error.message}`);
    }
}

module.exports = dbConnect;