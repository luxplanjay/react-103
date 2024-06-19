import { useState, useEffect } from "react";

const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("num-of-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickTracker() {
  const [clicks, setClicks] = useState(getInitialClicks);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log("write to ls");
    localStorage.setItem("num-of-clicks", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log("This is MOUNT effect");
  }, []);

  useEffect(() => {
    console.log("Current date: ", date);
    document.title = date;
  }, [date]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
