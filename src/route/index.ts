import express, {Request, Response} from 'express';
import blogRoute from './blogs.routes';
import comentsRoutes from "./coment.route"
import likeRoutes from './like.route';
import querriesRoutes from './querries.routes';
import usersRoutes from './users.routes';
const router = express.Router();
router.use('/blogs',blogRoute);
router.use("/blogs",comentsRoutes);
router.use("/blogs",likeRoutes);
router.use("/mybrand",querriesRoutes);
router.use("/mybrand",usersRoutes);
export default router;