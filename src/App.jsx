import 'bootstrap/dist/css/bootstrap.min.css';
import FormRegisterStudent from "./components/molecules/FormRegisterStudent"
import FormCreateCourse from "./components/molecules/FormCreateCourse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CourseContextProvider } from "./context/CourseContext";
import CoursesStudent from "./pages/CoursesStudent";
import HomeTeacher from "./pages/HomeTeacher";
import FormRegisterTeacher from "./components/molecules/FormRegisterTeacher";
import FormEditCourse from './components/molecules/FormEditCourse';



function App() {
  return (
    <CourseContextProvider>
       <Routes>
        <Route path="/" element={<HomeTeacher/>} />
        <Route path="/registerStudent" element={<FormRegisterStudent/>} />
        <Route path="/registerTeacher" element={<FormRegisterTeacher/>} />
        <Route path="/createCourse" element={<FormCreateCourse />} />
        <Route path="/coursesStudent" element={<CoursesStudent/>} />
        <Route path="/registerStudent" element={<FormRegisterStudent />} />
        <Route path="/editCourse/:id" element={<FormEditCourse />} />
      </Routes>
    </CourseContextProvider>
  )
}

export default App
