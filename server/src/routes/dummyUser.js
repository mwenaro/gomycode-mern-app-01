const express = require('express');
const router = express.Router();

// Define routes for users
router.get('/', (req, res) => {
  res.send('User Route');
});

module.exports = router;
