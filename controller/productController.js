const productModel = require("../model/productSchema");

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await productModel.create(req.body);
    res.status(201).json({
      success: true,
      result: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const allProduct = await productModel.find();
    res.status(200).json({
      success: true,
      result: allProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const productById = await productModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      result: productById,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({
      success: true,
      result: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true, result: null });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
