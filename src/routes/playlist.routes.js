import {Router} from "express"
import {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
} from "../controllers/playlist.controller.js"
import  {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router()

router.use(verifyJWT)

router.route("/").post(createPlaylist)
router.route("/:playlistId").patch(updatePlaylist).get(getPlaylistById).delete(deletePlaylist)
router.route("/:playlistId/:videoId").patch(addVideoToPlaylist).delete(removeVideoFromPlaylist)
router.route("/user/:userId").get(getUserPlaylists)

export default router