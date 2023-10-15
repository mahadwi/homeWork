import express from "express";
import {UsersController} from "../controller";

const router = express.Router();

router.get('/getAllUsers', UsersController.getAllUsers);
router.get('/getUserById/:id', UsersController.getUserById);
router.delete('/deleteUser/:id', UsersController.deleteUser);
router.put('/updateUser/:id', UsersController.updateUser);
router.post('/register', UsersController.registerUser);


export default router;