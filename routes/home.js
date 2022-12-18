const { Router } = require('express');

const router = new Router();

//// Routes

// Home Page
router.get('/', (req, res) => {
    res.render('home/index', {
        pageTitle: 'وبلاگ',
        path: '/'
    });
});

// NotFound Page
router.use((req, res) => {
    res.status(404).render('home/notFound', {
        pageTitle: "خطای 404",
        path : '',
        layout: false
    });
});

module.exports = router;