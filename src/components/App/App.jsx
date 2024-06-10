import AppBar from "../AppBar/AppBar";
import OfficerList from "../OfficerList/OfficerList";
import officers from "../../officers.json";

export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerList items={officers} />
    </div>
  );
}
