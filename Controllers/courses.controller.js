const Course = require("../Models/course.model");
const httpStatusText = require("../Utilities/httpStatusText");
const asyncWrapper = require("../Middleware/asyncWrapper");
const AppError =require("../Utilities/appError");
exports.getAllCourses = async (req, res) => {
  const query = req.query;
  const limit = query.limit || 10;
  const page = query.page || 2;
  const skip = (page - 1) * limit;
  const courses = await Course.find({}, { __v: false }).limit(limit).skip(skip);
  res.json({ status: httpStatusText.SUCCESS, data: { courses } });
};

exports.getCourseById = asyncWrapper(async (req, res, next) => {
  const courseID = req.params.id;
  const course = await Course.findById(courseID);
  if (!course) {
    const error=AppError.create("Course not found",404,httpStatusText.FAIL);
    return next(error);
  }
  return res.json({ status: httpStatusText.SUCCESS, data: { course } });
});

exports.createCourse = asyncWrapper(async (req, res,next) => {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res
    .status(201)
    .json({ status: httpStatusText.SUCCESS, data: { course: newCourse } });
});

exports.updateCourse = asyncWrapper(async (req, res,next) => {

    const courseID = req.params.id;
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

exports.deleteCourse = asyncWrapper(async (req, res,next) => {
  const courseID = req.body.id;
  await Course.deleteOne({ _id: courseID });

  res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});
