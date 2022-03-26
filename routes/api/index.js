const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

// Every route inside of this index.js
// already has /api prepended to every route we declare

// this will prepend/pi/books to every route below this comment
router.use('/books', bookRoutes);
// this will prepend /api/users to every route declared below this comment
router.use('/users', userRoutes);
module.exports = router;