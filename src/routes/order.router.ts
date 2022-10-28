import { Router } from 'express';
import Orders from '../controllers/order.controller';

const router = Router();
// constructor
const order = new Orders(); 

router.get(
  '/',  
  order.getAll,
);

export default router;