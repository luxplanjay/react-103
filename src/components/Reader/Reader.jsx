import { useEffect, useState } from "react";
import css from "./Reader.module.css";

const getInitialIdx = () => {
  const savedIdx = localStorage.getItem("artcl-idx");
  if (savedIdx !== null) {
    return JSON.parse(savedIdx);
  }
  return 0;
};

export default function Reader({ items }) {
  const [idx, setIdx] = useState(getInitialIdx);

  const handlePrev = () => {
    setIdx(idx - 1);
  };

  const handleNext = () => {
    setIdx(idx + 1);
  };

  useEffect(() => {
    localStorage.setItem("artcl-idx", idx);
  }, [idx]);

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

        <p>
          {idx + 1}/{items.length}
        </p>
      </header>

      <article>
        <h2>{currentArticle.topic}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
