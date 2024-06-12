import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div className={css.container}>
      <span className={css.username}>Hello username</span>
      <button>Log out</button>
    </div>
  );
}
