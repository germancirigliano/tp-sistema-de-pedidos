import express from 'express';

const router = express.Router();

router.get('/');
router.get('/archived');
router.get('/:id');
router.post('/');
router.put('/:id');
router.delete('/:id');

export default router;
