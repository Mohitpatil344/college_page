// src/pages/Courses.jsx
import FeaturedCourses from '../components/FeaturedCourses';

const Courses = ({ courses }) => (
  <>
    <h2 className="text-2xl font-bold my-4">All Courses</h2>
    <FeaturedCourses courses={courses} />
  </>
);

export default Courses;
