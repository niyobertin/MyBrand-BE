import express, {Request, Response} from 'express';
import blogRoute from './blogs.routes';
import comentsRoutes from "./coment.route"
import likeRoutes from './like.route';
import querriesRoutes from './querries.routes';
const router = express.Router();
router.use('/blogs',blogRoute);
router.use("/blogs",comentsRoutes);
router.use("/blogs",likeRoutes);
router.use("/mybrand",querriesRoutes)
export default router;