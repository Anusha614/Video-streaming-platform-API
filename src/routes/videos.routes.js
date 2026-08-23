import { Router } from "express";
import {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
} from "../controllers/videos.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.use(verifyJWT)

router.route("/").post(publishAVideo).get(getAllVideos)
router.route("/:videoId").get(getVideoById).patch(updateVideo).delete(deleteVideo)
router.route("/toggle/publish/:videoId").patch(togglePublishStatus)

export default router