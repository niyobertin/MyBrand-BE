import express from 'express';
import { authotication } from '../middleware/authMiddleware';
import usersController from '../controller/usersController';

const usersRoutes = express.Router();
usersRoutes.post("/users",usersController.register);
usersRoutes.post("/users/login",usersController.login);
usersRoutes.get("/users",authotication,usersController.allusers);

export default usersRoutes;