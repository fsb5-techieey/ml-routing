const router = require("express").Router();
const userRoute = require("./users");
const todosRoute = require("./todos");
const postsRoute = require("./posts");
const commentsRoute = require("./comments");

router.use("/users", userRoute);
router.use("/todos", todosRoute);
router.use("/posts", postsRoute);
router.use("/comments", commentsRoute);

module.exports = router;
