const express = require('express');
const router = express.Router();

router.get('/api/heroes', (req, res) => {
 res.send(200, [
    {"id": 10, "name": "Starlord", "saying": "oh yeah"}
 ])
});

router.put('/hero/:uid', (req, res) => {
    heroService.putHero(req, res);
  });
  
  router.delete('/hero/:uid', (req, res) => {
    heroService.deleteHero(req, res);
  });

module.exports=router;