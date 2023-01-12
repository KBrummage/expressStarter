import express from 'express';
var router = express.Router();

import menuDessertsRouter from './menu_desserts.js';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a menu resource');
});

/* GET users listing. */
router.get('/menuA', function(req, res, next) {
  res.send('Info about menu A');
});

router.use('/desserts', menuDessertsRouter);

export default router;
