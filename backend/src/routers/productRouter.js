import express from "express";
import {
  addNewProduct,
  getAllProducts,
  getProductByID,
} from "../model/product/productModel.js";
// import slugifyName from "../helpers/slugifier/slugifyName.js";
import multer from "multer";
const router = express.Router();

// setup multer for validation and upload destination
const fileUploadDestination = "public/img/products";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    // validation test if needed ....
    cb(error, fileUploadDestination);
  },
  filename: (req, file, cb) => {
    const fullFilename = Date.now() + "-" + file.originalname;

    cb(null, fullFilename);
  },
});

// upload destination
const upload = multer({ storage });

router.post("/", upload.array("images", 5), async (req, res, next) => {
  try {
    // console.log(req.body);

    const files = req.files;
    // console.log(files);

    // images
    if (files.length) {
      // path images manage
      const images = files.map((image) => image.path.slice(6));
      // console.log(images);

      req.body.images = images;

      // thumnbnail
      req.body.thumbnail = images[0];
    }

    const slugifyName = (name) => {
      return name
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^\w-]+/g, "") // Remove non-word characters
        .substring(0, 50); // Limit to 50 characters
    };
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
