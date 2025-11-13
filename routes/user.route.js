const express = require('express');
const router = express.Router();
const { getAllUsers,createUser, getOneUser } = require('../controllers/user.controller');


router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);


module.exports = router;