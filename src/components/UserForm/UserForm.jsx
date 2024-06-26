import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { trimValues } from "../../helpers/trimValues";
import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Minimun 3 letters")
    .max(30, "Maximum 30 letters")
    .required("This field is required"),
  email: Yup.string()
    .email("Must be an email format")
    .required("This field is required"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("This field is required"),
  comment: Yup.string()
    .max(256, "Maximum 256 letters")
    .required("This field is required"),
  opts: Yup.array()
    .of(Yup.string())
    .min(1, "Selected at least 1 option")
    .required("This field is required"),
});

export default function UserForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd(trimValues(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "user",
        comment: "",
        opts: [],
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>Username:</label>
          <Field className={css.input} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.formGroup}>
          <label>Email:</label>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.formGroup}>
          <label>Role:</label>
          <Field as="select" className={css.input} name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} name="role" component="span" />
        </div>

        <div className={css.formGroup}>
          <span>Options:</span>
          <div>
            <label>
              <Field type="checkbox" name="opts" value="one" />
              One
            </label>
            <label>
              <Field type="checkbox" name="opts" value="two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="opts" value="three" />
              Three
            </label>
          </div>
          <ErrorMessage className={css.error} name="opts" component="span" />
        </div>

        <div className={css.formGroup}>
          <label>Comment:</label>
          <Field as="textarea" className={css.input} name="comment"></Field>
          <ErrorMessage className={css.error} name="comment" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
