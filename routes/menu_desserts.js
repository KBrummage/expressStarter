import express from 'express';
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a desserts resource');
  });

export default router;