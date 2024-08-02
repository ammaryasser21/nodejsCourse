# Express Courses API

This project is a simple API built with Express.js for managing courses. It supports CRUD operations on courses stored in MongoDB using Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ammaryasser21/nodejsCourse.git
    ```

2. Navigate to the project directory:
    ```sh
    cd nodejsCourse
    ```
3. Navigate to the project branch:
    ```sh
    git checkout mongoose
    ```

4. Install the dependencies:
    ```sh
    npm install
    ```

5. Create a `.env` file in the root directory with the following content:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

6. Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```

2. The server will be running on `http://localhost:4000`.

## API Endpoints

### Get All Courses

- **URL:** `/api/courses`
- **Method:** `GET`
- **Response:**
    ```json
    [
      {
        "_id": "60f7d3f79b2b3a1a9c4d1b7a",
        "title": "Course Title",
        "price": 1000
      },
      {
        "_id": "60f7d3f79b2b3a1a9c4d1b7b",
        "title": "Another Course",
        "price": 2000
      }
    ]
    ```

### Get Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
      "_id": "60f7d3f79b2b3a1a9c4d1b7a",
      "title": "Course Title",
      "price": 1000
    }
    ```

### Create a New Course

- **URL:** `/api/courses`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
      "title": "New Course",
      "price": 1500
    }
    ```
- **Response:**
    ```json
    {
      "_id": "60f7d3f79b2b3a1a9c4d1b8c",
      "title": "New Course",
      "price": 1500
    }
    ```

### Update a Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `PUT`
- **Request Body:**
    ```json
    {
      "title": "Updated Course Title",
      "price": 1700
    }
    ```
- **Response:**
    ```json
    {
      "_id": "60f7d3f79b2b3a1a9c4d1b7a",
      "title": "Updated Course Title",
      "price": 1700
    }
    ```

### Delete a Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
      "success": true,
      "msg": "Course deleted successfully"
    }
    ```

## Project Structure

```
nodejsCourse
│
├── controllers
│   └── courses.controller.js
├── models
│   └── course.model.js
├── routes
│   └── courses.js
├── .env
├── .gitignore
├── package.json
└── index.js
```

## Dependencies

- **express**: ^4.19.2
- **mongoose**: ^8.5.2
- **dotenv**: ^16.4.5

### File Descriptions

- **index.js**: The entry point of the application. Sets up the Express server and routes.
- **controllers/courses.controller.js**: Contains the logic for handling course-related operations.
- **models/course.model.js**: Mongoose model for the Course schema.
- **routes/courses.js**: Defines the routes for handling course-related API requests.
- **.env**: Contains environment variables such as the MongoDB URI.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Contains the project metadata and dependencies.
