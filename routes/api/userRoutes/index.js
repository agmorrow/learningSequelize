const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../../../models/User');

// Create user /api/users
router.post('/', async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;
if (!username || !email || !password) {
  return res.status(400).json({ error: 'You must provide username, password, and email.'});
}

try {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  res.json(newUser);
} catch (e) {
  console.log(e);
  res.json(e);
}

});

// Get all users

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res,json(user);
  } catch (e) {
    res.json(e);
  }
});

router.patch('/:userId', async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  try {
    await User.update(
      {
    username,
    email,
    password,
      },
      {
        where: {
          id: req.params.userId,
        }
      }
    );
    const user = await User.findByPk(req.params.userId);
    res.json(user);
  } catch (e) {
    res.json(e);
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const deleteUser = await User.findByPk(req.params.userId);
    await User.destroy({
      where: {
        id: req.params.userId,
      }
    });
    res.json(deleteUser);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;