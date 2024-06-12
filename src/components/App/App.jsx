import { FaBeer } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import AppBar from "../AppBar/AppBar";
import OfficerList from "../OfficerList/OfficerList";
import ProfileSection from "../ProfileSection/ProfileSection";
import officers from "../../officers.json";
import css from "./App.module.css";

// UserInfo.jsx
// UserInfo.module.css
const UserInfo = () => {
  return <p>Олександр Репета</p>;
};

// Points.jsx
// Points.module.css
const Points = () => {
  return (
    <div>
      У GoIT ми дбаємо про освітній досвід наших студентів, і хочемо, щоб вам
      було цікаво та весело вчитися.
    </div>
  );
};

// Levels.jsx
// Levels.module.css
const Levels = () => {
  return (
    <ul>
      <li>Виконуй домашні завдання та автоперевірки</li>
    </ul>
  );
};

export default function App() {
  return (
    <div className={css.container}>
      {/* <ProfileSection title="Рейтинг">
        <UserInfo />
      </ProfileSection>
      <ProfileSection title="Що це за очки досвіду та рівні?">
        <Points />
      </ProfileSection>
      <ProfileSection title="Як отримати більше очків досвіду?">
        <Levels />
      </ProfileSection> */}
      <AppBar />
      <h1 className={css.pageTitle}>
        React is amazing! <FaBeer size={24} />
      </h1>
      <AiOutlineWechat className={css.mySuperIcon} />
      <OfficerList items={officers} />
    </div>
  );
}
