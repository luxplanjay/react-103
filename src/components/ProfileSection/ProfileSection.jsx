import css from "./ProfileSection.module.css";

export default function ProfileSection({ title, children }) {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}
