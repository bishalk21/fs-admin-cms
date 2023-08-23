import express from "express";
import { addCategory, getCategories } from "../model/category/categoryModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addCategory(req.body);

    res.json({
      status: "success",
      message: "New category added successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const categories = await getCategories();
    res.json({
      status: "success",
      message: "Categories available",
      categories,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
