import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { useContextCourses } from "../../context/CourseContext";
/*import { courseRegisterSchema } from "../../validations/CourseValidation";*/

export default function FormCreateCourse() {
  const navigate = useNavigate();
  const { courses, setcourses } = useContextCourses();

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
            let coursesCreated=[...courses]
            coursesCreated.push(values)
            setcourses(coursesCreated);
            //const isValid= await courseRegisterSchema.isValid(values);
            console.log(values);
            actions.resetForm();
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success"
            >
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
