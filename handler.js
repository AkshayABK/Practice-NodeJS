const { request, response, json } = require('express');
const express =require('express');
const brothers = require('./brothers');

console.log("servercreation");

//read
const show = (request,response)=>{
    let brothersID = request.params.id
    brothers.findById(brothersID,(request,response)
    .then((response)=>{
        response.json({
            message:"Requested ID brother"
        })
    })
    .catch((error)=>{
        response.json({
            message: 'an error'
        })
    })
)
};

//create
const store =(request,response, next)=>{
    console.log('run');
    let brother = new brothers({
        id:request.body.id,
        name: request.body.name,
        age:request.body.age
    })
    brother.save()
    .then((response)=>{
        response.json({
            message:"brother added in a list successfully"
        })
    })
    .catch((error)=>{
        response.json({
            message: 'an error'
        })
    })
}

//update
const update=(request,response)=>{
    let brothersID = request.params.id;

    let updateData = {
        id :request.body,id,
        name :request.body.name,
        age:request.body.age
    }
    brothers.findByIdAndUpdate(brothersID,updateData)
    .then((response)=>{
        response.json({
            message:"update successfully"
        })
    })
    .catch((error)=>{
        response.json({
            message: 'an error'
        })
    })
}

//delete
const destroy = (request,response)=>{
    let brothersID = request.params.id;
    let destroyDATA = brothers.findOneAndRemove(brothersID)
    .then((response)=>{
        response.json({
            message:"deleted successfully"
        })
    })
    .catch((error)=>{
        response.json({
            message: 'an error'
        })
    })
}

module.exports={
    show, store, update, destroy
}
