import OfficerProfile from "../OfficerProfile/OfficerProfile";

export default function OfficerList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <OfficerProfile officer={item} />
        </li>
      ))}
    </ul>
  );
}
