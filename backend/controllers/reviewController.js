import Review from "../models/Review.js";
import mongoose from "mongoose";

// GET reviews for a product
export const getReviewsByProduct = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.productId)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const reviews = await Review.find({
      productId: req.params.productId,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single review by review id
export const getReviewById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.reviewId)) {
      return res.status(400).json({ message: "Invalid review id" });
    }

    const review = await Review.findById(req.params.reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD a review
export const addReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const productId = req.body.productId || req.params.productId;

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    if (!mongoose.isValidObjectId(productId)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const review = new Review({
      productId,
      name,
      rating,
      comment,
    });

    const savedReview = await review.save();

    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};