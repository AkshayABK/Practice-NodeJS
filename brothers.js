const mangoose = require('mongoose');
const brothersSchema = mangoose.Schema({
    id:{
        type:String,
        require:true

    },
    
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    }
})
const brothers = mangoose.model('brothers',brothersSchema);
module.exports=brothers;
