const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// Every route inside of this index.js
// already has /api prepended to every route we declare

// this will prepend/pi/books to every route below this comment
router.use('/books', bookRoutes);

module.exports = router;