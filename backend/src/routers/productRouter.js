import express from "express";
import {
  addNewProduct,
  getAllProducts,
  getProductByID,
} from "../model/product/productModel.js";
import slugifyName from "../helpers/slugifier/slugifyName.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    req.body.slug = slugifyName(req.body.name);

    const result = await addNewProduct(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Product created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create product",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const products = _id ? await getProductByID(_id) : await getAllProducts();
    res.json({
      status: "success",
      message: "List of products available",
      products,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
