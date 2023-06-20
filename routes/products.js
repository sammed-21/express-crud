const router = require("express").Router();
let products = require("../productData");
const ErrorHandler = require("../errors/ErrorHandler");

router.get("/products", (req, res) => {
  // res.sendFile(path.resolve(__dirname) + "/index.html");
  res.render("products", {
    title: "produtcts page",
  });
});

router.get("/api/products", (req, res) => {
  res.json(products);
});
router.post("/api/products", (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    // throw new Error("all fields are required");
    next(ErrorHandler.validationError());
  }
  const product = {
    id: new Date().getTime().toString(),
    name: name,
    price: price,
  };
  products.push(product);

  res.json(product);
});
router.delete("/api/products/:productId", (req, res) => {
  console.log("hello");
  products = products.filter((product) => req.params.productId !== product.id);
  res.json({ status: 200 });
});

module.exports = router;
