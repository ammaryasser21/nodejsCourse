const fs = require("fs");
const path = require("path");
const courseSchema = require("../Middlewares/validationSchema");

const coursesFilePath = path.join(__dirname, "..", "/data/courses.json");

const readCourses = () => {
  const data = fs.readFileSync(coursesFilePath, "utf8");
  return JSON.parse(data);
};

const writeCourses = (courses) => {
  fs.writeFileSync(coursesFilePath, JSON.stringify(courses, null, 2));
};

exports.getAllCourses = (req, res) => {
  const courses = readCourses();
  res.json(courses);
};

exports.getCourseById = (req, res) => {
  const courses = readCourses();
  const course = courses.find((course) => course.id === +req.params.id);
  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }
  res.json(course);
};

exports.createCourse = (req, res) => {
  const { error } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const courses = readCourses();
  const { name, price } = req.body;
  const newCourse = {
    id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1,
    name,
    price,
  };
  courses.push(newCourse);
  writeCourses(courses);
  res.status(201).json(newCourse);
};

exports.updateCourse = (req, res) => {
  const courses = readCourses();
  const course = courses.find((course) => course.id === +req.params.id);
  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  const { error } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, price } = req.body;
  course.name = name;
  course.price = price;
  writeCourses(courses);
  res.json(course);
};

exports.deleteCourse = (req, res) => {
  let courses = readCourses();
  const courseIndex = courses.findIndex(
    (course) => course.id === +req.params.id
  );
  if (courseIndex === -1) {
    return res.status(404).json({ error: "Course not found" });
  }
  const deletedCourse = courses.splice(courseIndex, 1);
  writeCourses(courses);
  res.json(deletedCourse);
};
