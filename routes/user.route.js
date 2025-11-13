const express = require('express');
const router = express.Router();
const { 
    getAllUsers,
    createUser,
    getOneUser,
    deleteUser
     } = require('../controllers/user.controller');


router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);


module.exports = router;