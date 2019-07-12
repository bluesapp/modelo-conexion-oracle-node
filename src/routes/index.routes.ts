import { Router } from 'express';
const router = Router();

import {indexConnection} from '../controllers/index.controller'


router.route('/')
    .get(indexConnection);

export default router;