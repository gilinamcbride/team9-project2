const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Blog.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get the city for search
router.get('/location/:city_location', (req, res) => {
  Blog.findAll({
      where: {
          city_location: req.params.city_location
      },
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
  .then((dbBlogData) => res.json(dbBlogData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post("/", withAuth, (req, res) => {
  Blog.create({
    title: req.body.title,
    content: req.body.content,
    city_location: req.body.city_location,
    user_id: req.session.user_id,
  })
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Blog.update(
    {
      title: req.body.title,
      content: req.body.content,
      city_location: req.body.city_location,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
