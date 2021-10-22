const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router'); 
const db = 'mongodb+srv://akshaykore:Akshay1168@cluster0.kwkaf.mongodb.net/mernstack?retryWrites=true&w=majority'
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
    console.log("Successfully!");
}).catch(()=>{
    console.log("Erro");
})

app.listen(3000, ()=> {
    console.log("server connected successfully!");
});
app.use =('/api', router)
