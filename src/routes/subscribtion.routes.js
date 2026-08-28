import { Router } from "express";
import {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
} from "../controllers/subscriptions.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.use(verifyJWT)

router.route("/u/:subscriberId").get(getSubscribedChannels)
router.route("/c/:channelId").get(getUserChannelSubscribers).patch(toggleSubscription)

export default router
