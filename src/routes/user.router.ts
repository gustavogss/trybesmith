import { Router } from 'express';
import Users from '../controllers/user.controller';
import { 
  validateUsername, 
  validatePassword, 
  validateClass, 
  validateLevel } from '../middlewares/userValidated';

const router = Router();
const users = new Users(); 

router.post(
  '/', 
  validateUsername, 
  validatePassword,  
  validateClass, 
  validateLevel,  
  users.createUser,
);

export default router;