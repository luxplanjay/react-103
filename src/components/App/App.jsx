import { useState } from "react";
// import Toggler from "../Toggler";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import css from "./App.module.css";

const ClicksTracker = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Clicks {value}</button>;
};

export default function App() {
  const [clicks, setClicks] = useState(0);

  const [values, setValues] = useState({
    a: 1,
    b: 2,
    c: 3,
  });

  const updateValues = () => {
    setValues({
      ...values,
      b: 5,
      c: 5,
    });
  };

  const updateClicks = () => {
    setClicks(clicks + 1);
  };

  const resetClicks = () => {
    setClicks(0);
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>

      {/* <button onClick={updateValues}>Update values</button>

      <ClicksTracker value={clicks} onUpdate={updateClicks} />
      <ClicksTracker value={clicks} onUpdate={updateClicks} />
      <ClicksTracker value={clicks} onUpdate={updateClicks} />
      <button onClick={resetClicks}>Reset clicks</button> */}

      <Reader items={articles} />

      {/* <Toggler>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          cupiditate quos consequatur minima ut dolores, recusandae facilis
          voluptatibus atque doloremque temporibus necessitatibus dignissimos
          autem nam, dicta molestiae? Aliquid, itaque voluptate.
        </p>
      </Toggler>
      <Toggler>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Toggler> */}
    </div>
  );
}
