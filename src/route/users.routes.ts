import express from 'express';
import Jwt from "../helper/jwt";
import usersController from '../controller/users.controller';

const usersRoutes = express.Router();
usersRoutes.post("/users",usersController.register);
usersRoutes.post("/users/login",usersController.login);
usersRoutes.get("/users",Jwt.tokenValidation,usersController.allusers);

export default usersRoutes;