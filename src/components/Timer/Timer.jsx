/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні
 */

import { useEffect } from "react";

// mount > unmount > mount
// Mount useEffect > cleanup > Mount useEffect

export default function Timer() {
  useEffect(() => {
    console.log("Mount useEffect");

    const intervalId = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(intervalId);
    };
  }, []);

  return <div>Timer</div>;
}
