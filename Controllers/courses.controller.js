const {validationResult} = require('express-validator');
const Course = require("../Models/course.model");
const httpStatusText = require("../Utilities/httpStatusText");
const asyncWrapper = require("../Middleware/asyncWrapper");
const AppError = require("../Utilities/appError");

const getAllCourses = asyncWrapper(async (req, res, next) => {
  const query = req.query;
  const limit = query.limit || 10;
  const page = query.page || 2;
  const skip = (page - 1) * limit;
  const courses = await Course.find({}, { __v: false }).limit(limit).skip(skip);
  res.json({ status: httpStatusText.SUCCESS, data: { courses } });
});

const getCourseById = asyncWrapper(async (req, res, next) => {
  const courseID = req.params.courseId;
  const course = await Course.findById(courseID);
  if (!course) {
    const error = AppError.create("Course not found", 404, httpStatusText.FAIL);
    return next(error);
  }
  return res.json({ status: httpStatusText.SUCCESS, data: { course } });
});

const createCourse = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = appError.create(errors.array(), 400, httpStatusText.FAIL)
        return next(error);
    }
  const newCourse = new Course(req.body);
  await newCourse.save();
  res
    .status(201)
    .json({ status: httpStatusText.SUCCESS, data: { course: newCourse } });
});

const updateCourse = asyncWrapper(async (req, res, next) => {
  const courseID = req.params.courseId;
  //findByIdAndUpdate return the old value
  //updateOne returns confirmation object
  const updatedCourse = await Course.updateOne(
    { _id: courseID },
    {
      $set: { ...req.body },
    }
  );
  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: { course: updatedCourse },
  });
});

const deleteCourse = asyncWrapper(async (req, res, next) => {
  const courseID = req.params.courseId;
  await Course.deleteOne({ _id: courseID });

  res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
