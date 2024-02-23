const express =require("express")
const {createUser,getUser,getSingleUser, updateUser, deletUser} = require("../controller/userControll")
const router =express.Router()



router.post("/user",createUser);
router.get("/user",getUser);
router.get("/user/:id",getSingleUser);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deletUser);




module.exports = router