import { Router } from 'express';

import { SujectController } from './controllers/SubjectController';

const router = Router();

router.post('/subject', new SujectController().create);

export default router;
