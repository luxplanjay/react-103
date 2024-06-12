import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  officer: { name, rank, age, spec, active, skills },
}) {
  const containerClsx = clsx(
    css.container,
    active ? css.isActive : css.isRetired
  );

  return (
    <div className={containerClsx}>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>Spec: {spec}</p>
      <p className={css.text}>Status: {active ? "Active" : "Retired"}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
