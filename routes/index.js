const router = require("express").Router();
const apiKeyMiddleware = require("../middlewares/apiKey");
router.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname) + "/home.html");
  res.render("index", {
    title: "index page",
  });
});

router.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname) + "/index.html");
  res.render("about", {
    title: "about page",
  });
});
router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/home.html");
  //   res.render("home");
});
// router.get("/api/products", (req, res) => {
//   res.json([
//     {
//       id: "1",
//       name: "chrome",
//     },
//     {
//       id: "2",
//       name: "brave",
//     },
//   ]);
// });

module.exports = router;
