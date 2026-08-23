# VideoTube Backend

A RESTful backend API for a video-sharing platform inspired by YouTube. The project provides APIs for user authentication, video management, comments, likes, playlists, subscriptions, tweets, and media uploads.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Multer
- Cloudinary
- mongoose-aggregate-paginate-v2

## Features

### User Authentication

- User registration and login
- JWT-based authentication using access and refresh tokens
- Password hashing with bcrypt
- Cookie-based authentication
- Protected routes
- Authorization and ownership checks
- User logout

### Video Management

- Publish videos with thumbnails
- Retrieve all videos
- Retrieve individual videos
- Update video details
- Delete videos
- Toggle video publish status
- Pagination and sorting
- Keyword-based video search

### Comments

- Add comments to videos
- Retrieve comments for a video
- Update comments
- Delete comments
- Paginated comment retrieval

### Likes

- Like or unlike videos
- Like or unlike tweets
- Like or unlike comments
- Retrieve videos liked by a user

### Playlists

- Create playlists
- Update playlists
- Delete playlists
- Retrieve playlists by ID
- Add videos to playlists
- Remove videos from playlists
- Retrieve a user's playlists

### Subscriptions

- Subscribe and unsubscribe from channels
- Retrieve channels a user is subscribed to
- Retrieve subscribers of a channel

### Tweets

- Create tweets
- Retrieve a user's tweets
- Update tweets
- Delete tweets

### Health Check

- Health-check endpoint for verifying API availability

## Database and Aggregation

The application uses MongoDB with Mongoose for data modeling and relationships between users, videos, comments, likes, playlists, subscriptions, and tweets.

MongoDB aggregation pipelines are used for queries that require data from multiple collections.

The application uses aggregation stages such as:

- `$match`
- `$lookup`
- `$addFields`
- `$project`
- `$sort`

Aggregation-based pagination is also used for endpoints that return collections of related data.

## Media Uploads

Multer is used to handle multipart form-data before media files are uploaded to Cloudinary.

The upload flow supports:

- Video uploads
- User avatars
- Cover images
- Video thumbnails
- Multiple file fields
- Temporary local file cleanup

## Project Structure

The backend follows a modular structure separating routes, controllers, models, middleware, database configuration, and utility functions.

```text
src/
├── controllers/
├── db/
├── middlewares/
├── models/
├── routes/
├── utils/
├── app.js
└── index.js
```

## API Endpoints

A complete Postman collection containing the API requests is included in the `docs` directory.

### Users

**POST** `/user/register`

Register a new user.

**POST** `/user/login`

Authenticate a user.

**POST** `/user/logout`

Log out the current user.

### Videos

**POST** `/videos`

Publish a video.

**GET** `/videos`

Retrieve videos.

**GET** `/videos/:videoId`

Retrieve a video by ID.

**PATCH** `/videos/:videoId`

Update video details.

**DELETE** `/videos/:videoId`

Delete a video.

**PATCH** `/videos/toggle/publish/:videoId`

Toggle video publish status.

### Comments

**GET** `/comments/:videoId`

Retrieve comments for a video.

**POST** `/comments/:videoId`

Add a comment.

**PATCH** `/comments/c/:commentId`

Update a comment.

**DELETE** `/comments/c/:commentId`

Delete a comment.

### Likes

**POST** `/likes/toggle/v/:videoId`

Like or unlike a video.

**POST** `/likes/toggle/t/:tweetId`

Like or unlike a tweet.

**POST** `/likes/toggle/c/:commentId`

Like or unlike a comment.

**GET** `/likes/liked-videos`

Retrieve liked videos.

### Playlists

**POST** `/playlists`

Create a playlist.

**PATCH** `/playlists/:playlistId`

Update a playlist.

**GET** `/playlists/:playlistId`

Retrieve a playlist.

**DELETE** `/playlists/:playlistId`

Delete a playlist.

**PATCH** `/playlists/:playlistId/:videoId`

Add a video to a playlist.

**DELETE** `/playlists/:playlistId/:videoId`

Remove a video from a playlist.

**GET** `/playlists/user/:userId`

Retrieve a user's playlists.

### Subscriptions

**GET** `/subscriptions/u/:subscriberId`

Retrieve channels subscribed to by a user.

**GET** `/subscriptions/c/:userId`

Retrieve subscribers of a channel.

**PATCH** `/subscriptions/c/:userId`

Toggle a channel subscription.

### Tweets

**POST** `/tweets`

Create a tweet.

**GET** `/tweets/:userId`

Retrieve a user's tweets.

**PATCH** `/tweets/:tweetId`

Update a tweet.

**DELETE** `/tweets/:tweetId`

Delete a tweet.

### Health Check

**GET** `/healthcheck`

Check API availability.

## Getting Started

### Prerequisites

Make sure you have:

- Node.js
- npm
- MongoDB
- A Cloudinary account

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/videotube-backend.git
cd videotube-backend
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

CORS_ORIGIN=your_frontend_origin

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Never commit your `.env` file or real credentials to the repository.

For other developers, you can provide a `.env.example` file containing only placeholder values.

### Run Locally

Start the development server:

```bash
npm run dev
```

For production:

```bash
npm start
```

## Postman Collection

A Postman collection containing the API requests is included in the repository.

```text
docs/
└── videotube.postman_collection.json
```

The collection is organized into the following sections:

- Users
- Videos
- Comments
- Likes
- Playlists
- Subscriptions
- Tweets
- Health Check

Import the collection into Postman and configure the required environment variables before testing the API.

## Engineering Highlights

### Authentication and Authorization

Implemented JWT-based authentication with access and refresh tokens, password hashing using bcrypt, protected routes, and authorization checks for user-owned resources.

### MongoDB Aggregation

Used MongoDB aggregation pipelines for queries involving multiple collections and related data.

Aggregation stages such as `$match`, `$lookup`, `$addFields`, `$project`, and `$sort` are used to retrieve and shape API responses.

### Pagination and Querying

Implemented pagination, sorting, and keyword-based querying for API endpoints that return collections of data.

### Media Processing

Built a media upload pipeline using Multer and Cloudinary for handling user images, video thumbnails, and video files.

### Modular API Design

Separated application logic into controllers, routes, models, middleware, database configuration, and utility modules to keep the backend organized and maintainable.

## Future Improvements

- Automated API testing
- Rate limiting
- Redis caching
- Improved search
- Performance monitoring
- Docker containerization
- CI/CD pipeline
- Frontend client
- OpenAPI/Swagger API documentation

## License

This project is intended for learning and portfolio purposes.
