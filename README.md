# Express Courses API

This project is an Express.js-based API designed to manage courses effectively. It provides endpoints to create, read, update, and delete course information stored in a MongoDB database, utilizing Mongoose for data modeling and validation. The API includes robust error handling and supports paginated retrieval of courses to enhance performance and usability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [FileDescription](#FileDescriptions)

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
    git checkout asyncWrapper-v7
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
    {
      "status": "success",
      "data": {
        "courses": [
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
      }
    }
    ```

### Get Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
      "status": "success",
      "data": {
        "course": {
          "_id": "60f7d3f79b2b3a1a9c4d1b7a",
          "title": "Course Title",
          "price": 1000
        }
      }
    }
    ```

- **Error Response:**
    ```json
    {
      "status": "fail",
      "message": "Course not found",
      "code": 404
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
      "status": "success",
      "data": {
        "course": {
          "_id": "60f7d3f79b2b3a1a9c4d1b8c",
          "title": "New Course",
          "price": 1500
        }
      }
    }
    ```

- **Error Response (Validation Error):**
    ```json
    {
      "status": "fail",
      "message": "Validation error",
      "code": 400
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
      "status": "success",
      "data": {
        "course": {
          "_id": "60f7d3f79b2b3a1a9c4d1b7a",
          "title": "Updated Course Title",
          "price": 1700
        }
      }
    }
    ```

- **Error Response (Course Not Found):**
    ```json
    {
      "status": "fail",
      "message": "Course not found",
      "code": 404
    }
    ```

### Delete a Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
      "status": "success",
      "data": null
    }
    ```

- **Error Response (Course Not Found):**
    ```json
    {
      "status": "fail",
      "message": "Course not found",
      "code": 404
    }
    ```

## Project Structure

```
nodejsCourse
│
├── controllers
│   └── courses.controller.js
├── middleware
│   └── asyncWrapper.js
├── models
│   └── course.model.js
├── routes
│   └── courses.js
├── utilities
│   ├── appError.js
│   └── httpStatusText.js
├── .env
├── .gitignore
├── package.json
└── index.js
```

## Dependencies

- **express**: ^4.19.2
- **mongoose**: ^8.5.2
- **dotenv**: ^16.4.5
- **cors**: ^2.8.5
- **nodemon**: ^3.1.4

## FileDescriptions

- **index.js**: The entry point of the application. Sets up the Express server and routes.
- **controllers/courses.controller.js**: Contains the logic for handling course-related operations.
- **middleware/asyncWrapper.js**: Middleware to handle asynchronous errors.
- **models/course.model.js**: Mongoose model for the Course schema.
- **routes/courses.js**: Defines the routes for handling course-related API requests.
- **utilities/appError.js**: Defines custom error handling.
- **utilities/httpStatusText.js**: Contains standard HTTP status text messages.
- **.env**: Contains environment variables such as the MongoDB URI.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Contains the project metadata and dependencies.
