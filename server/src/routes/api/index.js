import express from 'express';
import ping from './ping.js';
import usersService from '#src/services/usersService'
import articleService from '#src/services/usersService'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});


// api/v1/users
//GET
router.get('/users', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});


//POST
router.post('/users', async (req, res) => {
  try {
      const newUser = await usersService.createUser(req.body);
      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// api/v1/articles
router.get('/articles', async (req, res) => {
  const allA = await articleService.findAllArticles()
  res.json(allA);
});

router.use('/ping', ping);

export default router;
