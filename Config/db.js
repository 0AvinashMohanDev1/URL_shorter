const mongoose=require("mongoose");
require("dotenv").config();
// Connect to MongoDB
const connection=mongoose.connect(process.env.mongoURL)

module.exports={
    connection
}
