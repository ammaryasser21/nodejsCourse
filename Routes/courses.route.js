const express = require('express');
const router = express.Router();

const courseController = require('../Controllers/courses.controller');
const { validationSchema } = require('../Middleware/validationSchema');
const verifyToken = require('../Middleware/verifyToken');
const userRoles = require('../Utilities/userRole');
const allowedTo = require('../Middleware/allowedTo');


router
  .route('/')
  .get(courseController.getAllCourses)
  .post(verifyToken, allowedTo(userRoles.MANGER), validationSchema(), courseController.createCourse);


router
  .route('/:courseId')
  .get(courseController.getCourseById)
  .patch(courseController.updateCourse)
  .delete(verifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), courseController.deleteCourse);


module.exports = router;