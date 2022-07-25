const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, Comment, User } = require("../models");

router.get("/", (req, res) => {
  Blog.findAll({
    attributes: ["id", "title", "content", "city_location", "created_at"],

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
      // loop over and map sequelize object into a serialized version
      const blogPosts = dbBlogData.map((blog) => blog.get({ plain: true }));
      // pass a single blog object into homepage template
      res.render("homepage", {
        blogPosts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/blog/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "city_location", "created_at"],

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
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbBlogData.get({ plain: true });

      // passing data to the template
      res.render("single-blog", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/blogs/location/:city_location", (req, res) => {
  Blog.findAll({
    where: {
      city_location: req.params.city_location,
    },
    attributes: ["id", "title", "content", "city_location", "created_at"],

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
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbBlogData.map((blog) => blog.get({ plain: true }));

      // passing data to the template
      res.render("displaysearch", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    res.render("sign-up");
  }
});

module.exports = router;
