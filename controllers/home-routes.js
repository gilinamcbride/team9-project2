const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, Comment, User } = require('../models');

router.get('/', (req, res) => {
    Blog.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'city_location',
            'created_at'
        ],

        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
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
        // loop over and map sequelize object into a serialized version
        const blogPosts = dbBlogData.map(blog => blog.get({ plain: true }));
        // pass a single blog object into homepage template
        res.render('homepage', { blogPosts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;