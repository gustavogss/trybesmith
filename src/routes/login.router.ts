import { Router } from 'express';
import Login from '../controllers/login.controller';
import { validateUsername, validatePassword } from '../middlewares/userValidated';

const router = Router();

const login = new Login(); 

router.post( 
  '/',      
  validateUsername,
  validatePassword,  
  login.getLogin,
);

export default router;