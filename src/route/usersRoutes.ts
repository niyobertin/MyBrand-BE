import express from 'express';
import { authoticateAdmin } from '../middleware/authMiddleware';
import usersController from '../controller/usersController';

const usersRoutes = express.Router();
usersRoutes.post("/users",usersController.register);
usersRoutes.post("/users/login",usersController.login);
usersRoutes.post("/users/admin/login",usersController.adminLogin);
usersRoutes.get("/users",authoticateAdmin,usersController.allusers);

export default usersRoutes;