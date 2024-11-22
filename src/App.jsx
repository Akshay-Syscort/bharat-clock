import "./App.css";
import AppName from "./Components/AppName";
import CurrentDateTime from "./Components/CurrentDateTime";

function App() {
  return (
    <div>
      <AppName></AppName>
      <p>This is the clock that shows the time in the Bharat at all time</p>
      <CurrentDateTime></CurrentDateTime>
    </div>
  );
}

export default App;
