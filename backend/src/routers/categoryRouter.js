import express from "express";
import {
  addCategory,
  deleteCategoryById,
  getCategories,
} from "../model/category/categoryModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const slugifyName = (name) => {
      return name
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^\w-]+/g, "") // Remove non-word characters
        .substring(0, 50); // Limit to 50 characters
    };

    req.body.slug = slugifyName(req.body.name);

    const result = await addCategory(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Category added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add category, please try again later",
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

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const deleteCategory = await deleteCategoryById(_id);

    deleteCategory?._id
      ? res.json({
          status: "success",
          message: "Category deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete category",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
