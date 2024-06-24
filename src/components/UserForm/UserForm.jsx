import { useId } from "react";
import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    onAdd({
      username: form.elements.username.value,
      role: form.elements.role.value,
    });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={`username-${id}`}>Username:</label>
        <input type="text" name="username" id={`username-${id}`} />
      </div>

      <div className={css.group}>
        <label htmlFor={`role-${id}`}>Role:</label>
        <select name="role" id={`role-${id}`}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
