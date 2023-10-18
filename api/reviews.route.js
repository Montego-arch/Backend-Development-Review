import express from "express"
import ReviewsCtlr from "./reviews.controller.js"

const router = express.Router()

router.route("/movie/:id").get(ReviewsCtlr.apiPostReviews)
router.route("/new").post(ReviewsCtlr.apiPostReview)
router.route("/:id")
    .get(ReviewsCtlr.apiGetReview)
    .put(ReviewsCtlr.apiUpdateReview)
    .delete(ReviewsCtlr.apiDeleteReview)

export default router