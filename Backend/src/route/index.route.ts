import express, { Router } from 'express';

const router: Router = express.Router();

import userRoute from './user.route';

router.use(userRoute);
