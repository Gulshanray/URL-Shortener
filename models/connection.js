
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://raygulshan960:gulshan@url.alevmne.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("MongoDb Connected")
}).catch((err)=>{
    console.log("error a gya ", err)
})
