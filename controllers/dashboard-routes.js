const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Blog, User, Comment } = require('../models');

router.get('/', withAuth, (req, res) => {
    Blog.findAll({
        where: {
            user_id: req.session.user_id
        },

        attributes: [
            'id',
            'title',
            'content',
            'city_location'
        ],

        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'blog_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },

            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBlogData => {
        // serialize data before passing to template
        const blogPosts = dbBlogData.map(blog => blog.get({ plain: true }));
        // need to go back and add loggedIn tru to the render
        res.render('dashboard', { blogPosts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;