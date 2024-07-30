# Express Courses API

This project is a simple API built with Express.js for managing courses. It supports CRUD operations on courses stored in a JSON file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/express-courses-api.git
    ```

2. Navigate to the project directory:
    ```sh
    cd nodejsCourse
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

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
        "id": 1,
        "name": "ammar",
        "price": 1000000
      },
      {
        "id": 2,
        "name": "node",
        "price": 5000
      }
    ]
    ```

### Get Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
      "id": 1,
      "name": "ammar",
      "price": 1000000
    }
    ```

### Create a New Course

- **URL:** `/api/courses`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
      "name": "React",
      "price": 2000
    }
    ```
- **Response:**
    ```json
    {
      "id": 3,
      "name": "React",
      "price": 2000
    }
    ```

### Update a Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `PUT`
- **Request Body:**
    ```json
    {
      "name": "React",
      "price": 2500
    }
    ```
- **Response:**
    ```json
    {
      "id": 3,
      "name": "React",
      "price": 2500
    }
    ```

### Delete a Course by ID

- **URL:** `/api/courses/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
      "id": 3,
      "name": "React",
      "price": 2500
    }
    ```

## Project Structure

```
express-courses-api
│
├── controllers
│   └── courses.controller.js
├── data
│   └── courses.json
├── middleware
│   └── validationSchema.js
├── routes
│   └── courses.js
├── .gitignore
├── package.json
└── index.js
```

## Dependencies

- **express**: ^4.19.2
- **joi**: ^17.13.3
- **nodemon**: ^3.1.4 (dev dependency)

### File Descriptions

- **index.js**: The entry point of the application. Sets up the Express server and routes.
- **controllers/courses.controller.js**: Contains the logic for handling course-related operations.
- **data/courses.json**: A JSON file that serves as the database for storing course information.
- **middleware/validationSchema.js**: Contains the Joi schema for validating course data.
- **routes/courses.js**: Defines the routes for handling course-related API requests.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Contains the project metadata and dependencies.
