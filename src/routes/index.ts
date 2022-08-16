import {Router} from 'express';
import productsRouter from './productsRoutes';
import cartRouter from './cartRoutes';
import UserRouter from './userRoutes'
import { isLoggedIn } from '../middlewares/auth';


const router = Router();

router.use('/products',isLoggedIn, productsRouter);
router.use('/cart', cartRouter);
router.use('/', UserRouter);


export default router;