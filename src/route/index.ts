import express, {Request, Response} from 'express';
import blogRoute from './blogsRoutes';
import comentsRoutes from "./comentRoute"
import likeRoutes from './likeRoute';
import querriesRoutes from './querriesRoutes';
import usersRoutes from './usersRoutes';
const router = express.Router();
router.use('/blogs',blogRoute);
router.use("/blogs",comentsRoutes);
router.use("/blogs",likeRoutes);
router.use("/mybrand",querriesRoutes);
router.use("/mybrand",usersRoutes);
export default router;