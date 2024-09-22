import './FeaturedCourses.css'; // Import the CSS file

const FeaturedCourses = ({ courses }) => (
  <section className="featured-courses">
    <h2 className="title">Featured Courses</h2>
    <br />
    <h3 className="subtitle">Learn with the best and get the best inside you</h3>
    <br />
    <div className="courses-grid">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedCourses;
