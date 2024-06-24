import { useId, useState } from "react";
import { FaTshirt } from "react-icons/fa";
import css from "./OrderForm.module.css";

const initialValues = {
  size: "sm",
  color: "red",
  message: "",
};

export default function OrderForm({ onOrder }) {
  const fieldId = useId();
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumit = (event) => {
    event.preventDefault();
    onOrder(values);
    setValues(initialValues);
  };

  // const handleChangeSize = (event) => {
  //   console.log(event.target.name);
  //   setValues({
  //     ...values,
  //     size: event.target.value,
  //   });
  // };

  // const handleChangeColor = (event) => {
  //   console.log(event.target.name);
  //   setValues({
  //     ...values,
  //     color: event.target.value,
  //   });
  // };

  return (
    <form
      autoComplete="off"
      noValidate
      className={css.form}
      onSubmit={handleSumit}
    >
      <FaTshirt size="160" color={values.color} />

      <div className={css.group}>
        <label htmlFor={`size-${fieldId}`}>Size</label>
        <select
          name="size"
          id={`size-${fieldId}`}
          value={values.size}
          onChange={handleChange}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.group}>
        <label htmlFor={`color-${fieldId}`}>Color</label>
        <select
          name="color"
          id={`color-${fieldId}`}
          value={values.color}
          onChange={handleChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div className={css.group}>
        <label htmlFor={`message-${fieldId}`}>Message</label>
        <textarea
          name="message"
          id={`message-${fieldId}`}
          value={values.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
