import express from "express";
const router = express.Router();
import {
  createRentDetail,
  getAllRentDetailsOwnerView,
  getSingleRentDetailsOwnerView,
  createPaymentHistory,
  getAllPaymentHistory,
} from "../controllers/rentDetailOwnerControllers.js";

/**
 * @description Create rent payment detail
 * @route POST /api/rentDetailOwner/createDetail
 */
router.post("/createDetail", createRentDetail);

/**
 * @description Get all the Rent Details for owner user
 * @route GET /api/rentDetailOwner/allRentDetails
 */
router.get("/allRentDetails", getAllRentDetailsOwnerView);

/**
 * @description Get Single Rent Detail for owner user
 * @route GET /api/rentDetailOwner/:rentDetailId
 */
router.get("/:rentDetailId", getSingleRentDetailsOwnerView);

/**
 * @description Create rent payment detail history
 * @route POST /api/rentDetailOwner/createPaymentHistory
 */
router.post("/createPaymentHistory", createPaymentHistory);

/**
 * @description Get All Payment History for owner user
 * @route GET /api/rentDetailOwner/allPaymentHistory/:rentDetailId
 */
router.get("/allPaymentHistory/:rentDetailId", getAllPaymentHistory);

export default router;
