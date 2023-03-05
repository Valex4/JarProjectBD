import { getCourses, deleteCourse } from "../api/course.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextCourses } from "../context/CourseContext";

function CoursesStudent() {
  const navigate = useNavigate();
  const { courses, setcourses } = useContextCourses();

  const handleDelete = (course) => {
    try {
      //const response = await deleteCourse(id);
      let objectoEliminar = course.title;
      const resul = courses.find((course) => course.title === objectoEliminar);
      let coursesCreated = [...courses];
      coursesCreated.pop(objectoEliminar);
      setcourses(coursesCreated);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (course) => {
    //navigate(`/editCourse/${id}`);
    navigate(`/editCourse/${course}`);
  };

  const renderMain = () => {
    if (courses.length === 0) {
      return <h1>No courses find</h1>;
    }
    return courses.map((course) => (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>level</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr key={course.title}>
            <td>{course.title}</td>
            <td>{course.category}</td>
            <td>{course.level}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleDelete(course);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleEdit(course.id);
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    ));
  };

  useEffect(() => {
    renderMain();
  }, [courses]);

  return (
    <>
      <h1>courses: </h1>
      {renderMain()}
    </>
  );
}

export default CoursesStudent
