import express, { Router } from 'express';
import authController from '../controller/user.controller';

const router: Router = express.Router();

router.route('/register').post(authController.registerUser);
export default router;
