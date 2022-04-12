const router = require('express').Router();
// const path = require('path');
// const apiRoutes = require('./api');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);

// serve up react front-end in production
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

router.use('/users', userRoutes)

module.exports = router;
