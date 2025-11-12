const User = require("../models/user.model");
const {v4: uuid} = require("uuid");

const getAllUsers = (req,res)=>{
    res.status(200).json({
        message: 'all users',
    });
};

const getOneUser = (req,res)=>{
    res.status(200).json({
        message: "get one user"
    });
};
const createUser = async (req,res)=>{
    try{
     const newUser = new User({
        id: uuid(),   
        name: req.body.name,
        age: Number(req.body.age)
    })
    await newUser.save();
    res.status(201).json(newUser);
    } catch(error){
     res.status(500).send(error.message)
    }
};

const updateUser = (req,res)=>{
    res.status(200).json({
        message: "user is updated"
    });
};

const deleteUser = (req,res)=>{
    res.status(200).json({
        message: "user is deleted"
    });
};


module.exports = {getAllUsers,getOneUser,createUser,updateUser,deleteUser};