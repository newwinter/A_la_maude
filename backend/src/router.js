const express = require("express");

const router = express.Router();

const categoriesControllers = require("./controllers/categoriesControllers");

router.get("/categories", categoriesControllers.browse);
router.get("/categories/:id", categoriesControllers.read);
// router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
// router.put("/products/:id", productControllers.edit);
// router.post("/products", productControllers.add);
// router.delete("/products/:id", productControllers.destroy);

module.exports = router;
