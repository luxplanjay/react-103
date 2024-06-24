import { useState } from "react";
import UserForm from "../UserForm/UserForm";
import OrderForm from "../OrderForm/OrderForm";
import TextInput from "../TextInput/TextInput";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import css from "./App.module.css";

export default function App() {
  const [lang, setLang] = useState("en");

  const changeLang = (newLang) => {
    setLang(newLang);
  };

  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (newValue) => {
    setInputValue(newValue);
  };

  const addUser = (newUser) => {
    console.log("Send to backend", newUser);
  };

  const makeOrder = (newOrder) => {
    console.log("Make new order", newOrder);
  };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>

      <UserForm onAdd={addUser} />

      <LangSwitcher value={lang} onSelect={changeLang} />
      <p>Selected lang: {lang}</p>

      <TextInput value={inputValue} onType={changeInputValue} />
      <p>{inputValue}</p>

      <OrderForm onOrder={makeOrder} />
    </div>
  );
}
