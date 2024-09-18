import "./App.css";
import TrafficLight from "./components/TrafficLight";
import { TrafficControlContextProvider } from "./context/TrafficControlContext";

function App() {
  return (
    <TrafficControlContextProvider>
      <div className="app-container">
        <TrafficLight />
      </div>
    </TrafficControlContextProvider>
  );
}

export default App;
