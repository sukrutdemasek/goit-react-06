import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import "./ContactForm.css";

const validationParams = Yup.object({
  name: Yup.string()
    .min(3, "Name should contain at least 3 characters")
    .max(50, "Name should contain no more than 50 characters")
    .required("Name is necessary"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers allowed")
    .min(3, "Phone number should contain at least 3 characters")
    .max(50, "Phone number should contain no more than 50 characters")
    .required("Phone number is necessary"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <div className="searchForm">
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationParams}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            id: nanoid(),
            ...values,
          };
          dispatch(addContact(newContact));
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="formInput">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage component="div" name="name" />
            </div>
            <div className="formInput">
              <label htmlFor="number">Phone number:</label>
              <Field type="text" name="number" />
              <ErrorMessage component="div" name="number" />
            </div>
            <button type="submit" className="addButton">
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
