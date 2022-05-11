import express from 'express';

import TokenControler from '../controllers/token.controller';

const router = express.Router();

router.get('/:id', TokenControler.findOne);

router.post('/', TokenControler.create);

router.put('/:id', TokenControler.update);

router.delete('/:id', TokenControler.remove);

export default router;
