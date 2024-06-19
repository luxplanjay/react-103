import { useState } from "react";
import ClickTracker from "../ClickTracker/ClickTracker";
import Timer from "../Timer/Timer";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import css from "./App.module.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container}>
      <h1>Effects in React</h1>

      <ClickTracker />

      <button onClick={toggle}>{isOpen ? "Unmount" : "Mount"}</button>
      {isOpen && <Timer />}

      <Reader items={articles} />
    </div>
  );
}
