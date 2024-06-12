import OfficerProfile from "../OfficerProfile/OfficerProfile";
import css from "./OfficerList.module.css";

export default function OfficerList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <OfficerProfile officer={item} />
        </li>
      ))}
    </ul>
  );
}
