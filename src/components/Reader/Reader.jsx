import { useState } from "react";
import css from "./Reader.module.css";
import Progress from "../Progress";

export default function Reader({ items }) {
  const [idx, setIdx] = useState(0);

  const handlePrev = () => {
    setIdx(idx - 1);
  };

  const handleNext = () => {
    setIdx(idx + 1);
  };

  const isFirst = idx === 0;
  const isLast = idx === items.length - 1;
  const currentArticle = items[idx];

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>
          <button onClick={handlePrev} disabled={isFirst}>
            Prev
          </button>
          <button onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div>

        <Progress current={idx + 1} total={items.length} />
      </header>

      <article>
        <h2>{currentArticle.topic}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
