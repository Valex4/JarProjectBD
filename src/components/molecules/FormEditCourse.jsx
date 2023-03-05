import { Formik, Form } from "formik";
import { updateCourse } from "../../api/course.api";
import { useParams } from "react-router-dom";
import { useContextCourses } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

function FormEditCourse() {
  //let {id} = useParams();
  //console.log(id);
  let { course } = useParams();
  const { courses, setcourses } = useContextCourses();
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          category: "",
          image: "",
          level: "",
          description: "",
          video: "",
        }}
        onSubmit={(values, actions) => {
          try {
            /*const response = await updateCourse(id,values);
            console.log(id);
            console.log(values);
            actions.resetForm();*/
            let coursesCreated = [...courses];
            coursesCreated.push(values);
            setcourses(coursesCreated);
            navigate("/coursesStudent");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label msn={"Title"} />
            <Input
              type={"text"}
              name={"title"}
              placeholder={"Write a title"}
              value={values.title}
              handleChange={handleChange}
            />

            <Label msn={"Category"} />
            <Input
              type={"text"}
              name={"category"}
              placeholder={"Write a category"}
              value={values.category}
              handleChange={handleChange}
            />

            <Label msn={"Image"} />
            <Input
              type={"file"}
              name={"image"}
              placeholder={"Insert a image"}
              value={values.image}
              handleChange={handleChange}
            />

            <Label msn={"Level"} />
            <Input
              type={"text"}
              name={"level"}
              placeholder={"Write a level"}
              value={values.level}
              handleChange={handleChange}
            />

            <Label msn={"Description"} />
            <Input
              type={"text"}
              name={"description"}
              placeholder={"Write a description"}
              value={values.description}
              handleChange={handleChange}
            />

            <Label msn={"Video"} />
            <Input
              type={"file"}
              name={"video"}
              placeholder={"Insert a video"}
              value={values.video}
              handleChange={handleChange}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormEditCourse
