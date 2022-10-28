import { Router } from 'express';
import Products from '../controllers/product.controller';
import { validateAmount, validateName } from '../middlewares/productValidated';

const router = Router();
const products = new Products(); 

router.get(
  '/', 
  products.getAll,
);

router.post(   
  '/',  
  validateName,
  validateAmount,  
  products.create,
);

export default router;