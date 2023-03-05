import { Link } from "react-router-dom";
import { getCourses } from "../api/course.api";
function HomeTeacher() {
  return (
    <>
      <h1>Hi Teacher</h1>
      <p>Todo se cambio a arreglo y objectos debido a que no sabemos subir la api y la bd</p>
      <p>Pero la api es totalmente funcional</p>
      <Link to="/createCourse">Create course</Link>
    </>
  );
}
export default HomeTeacher
