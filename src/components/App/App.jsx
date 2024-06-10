import AppBar from "../AppBar/AppBar";
import OfficerList from "../OfficerList/OfficerList";
import officers from "../../officers.json";

export default function App() {
  return (
    <div>
      <AppBar />
      <h1>React is amazing!</h1>
      <OfficerList items={officers} />
    </div>
  );
}
