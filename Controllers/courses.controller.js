const Course = require("../Models/course.model");

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.getCourseById = async (req, res) => {
  const courseID = req.params.id;
  const course = await Course.findById(courseID);
  try {
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    return res.json(course);
  } catch (error) {
    return res.status(400).json({ error: "Invalid object ID" });
  }
};

exports.createCourse = async (req, res) => {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.status(201).json(newCourse);
};

exports.updateCourse = async (req, res) => {
  try {
    const courseID = req.params.id;
    //findByIdAndUpdate return the old value
    //updateOne returns confirmation object
    const updatedCourse = await Course.updateOne(
      { _id: courseID },
      {
        $set: { ...req.body },
      }
    );
    return res.status(200).json(updatedCourse);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

exports.deleteCourse = async (req, res) => {
  const courseID = req.body.id;
  const deletedData = await Course.deleteOne({ _id: courseID });

  res.status(200).json({ success: true, msg: deletedData });
};
