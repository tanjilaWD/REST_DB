const User = require("../models/user.model");
const {v4: uuid} = require("uuid");

const getAllUsers =async (req,res)=>{
  try{
     const users = await User.find();
   res.status(200).json(users)
  }catch(error){
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req,res)=>{
   try{
     const user = await User.findOne({id: req.params.id})
    res.status(200).json(user);
   }catch(error){
     res.status(500).send(error.message);
   }
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