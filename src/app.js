import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended: true, 
    limit:"16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'
import commentRouter from './routes/comment.routes.js'
import dashboardRouter from './routes/dashboard.routes.js'
import likesRouter from './routes/likes.routes.js'
import playlistsRouter from './routes/playlist.routes.js'
import subscriptionRouter from './routes/subscribtion.routes.js'
import tweetsRouter from './routes/tweet.routes.js'
import videosRouter from './routes/videos.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js";


//routes declaration
app.use("/api/v1/user", userRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/dashboards", dashboardRouter)
app.use("/api/v1/likes", likesRouter)
app.use("/api/v1/playlists", playlistsRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/tweets", tweetsRouter)
app.use("/api/v1/videos", videosRouter)
app.use("./api/v1/healthcheck", healthcheckRouter)



export {app};