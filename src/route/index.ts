import express, {Request, Response} from 'express';
import blogRoute from './blogsRoutes';
import commentsRoutes from "./commentsRoute"
import likeRoutes from './likeRoute';
import querriesRoutes from './querriesRoutes';
import usersRoutes from './usersRoutes';
const router = express.Router();
router.use('/blogs',blogRoute);
router.use("/blogs",commentsRoutes);
router.use("/blogs",likeRoutes);
router.use("/",querriesRoutes);
router.use("/",usersRoutes);
export default router;