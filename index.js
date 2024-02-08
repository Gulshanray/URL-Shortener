const express = require('express');
const app = express();
const urlRoute = require("./routes/router");



const port = 3000;
app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use("", urlRoute)
const path = require("path")

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.use("/url/analytics",urlRoute)


 app.listen(port,()=>{
    console.log(`server running  on port ${port}`)
 })
