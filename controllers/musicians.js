const express = require('express');
//router is what we use in the controllers instead of app.
//instead of just express(), it is express.Router(). This makes it easier to export
//all of the routes in the entire file easily.
const router = express.Router();

router.get('/musicians', (req, res) => {
    res.render(`musicians/index.ejs`)
})

module.exports = router;