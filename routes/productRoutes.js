const express = require("express");
// const productModel = require("../model/productSchema");

const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const router = express.Router();

// router.get("/", async (req, res, next) => {
//   const allProduct = await productModel.find();
//   res.status(200).json({
//     success: true,
//     result: allProduct,
//   });
// });

// router.post("/", async (req, res, next) => {
//   const newProduct = await productModel.create(req.body);
//   res.status(201).json({
//     success: true,
//     result: newProduct,
//   });
// });

// router.get("/:id", async (req, res, next) => {
//   const productById = await productModel.findById(req.params.id);
//   res.status(200).json({
//     success: true,
//     result: productById,
//   });
// });

// router.put("/:id", async (req, res, next) => {
//   const updateProduct = await productModel.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.status(201).json({
//     success: true,
//     result: updateProduct,
//   });
// });

// router.delete("/:id", async (req, res, next) => {
//   await productModel.findByIdAndDelete(req.params.id);
//   res.status(204).json({success:true,result:null});
// });

// day 2 refracing code

router.post("/",createProduct);
router.get("/",getAllProduct)
router.get("/:id",getSingleProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)

module.exports = router;
