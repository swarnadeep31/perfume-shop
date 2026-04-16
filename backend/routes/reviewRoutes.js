import express from "express";
import {
  getReviewsByProduct,
  getReviewById,
  addReview,
} from "../controllers/reviewController.js";

const router = express.Router();

// ✅ GET reviews by product
router.get("/product/:productId", getReviewsByProduct);

// ✅ GET single review
router.get("/:reviewId", getReviewById);

// ✅ POST review
router.post("/", addReview);

export default router;