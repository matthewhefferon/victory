import "./App.css";
import { VictoryPie } from "victory";

function App() {
  return (
    <div className="App">
      <h1>Playing Around with Victory</h1>
      <VictoryPie
        data={[
          { x: "Value A", y: 60 },
          { x: "Value B", y: 30 },
          { x: "Value C", y: 10 },
        ]}
        colorScale={["#5778a4", "#e49444", "#6a9f58"]}
        innerRadius={95}
        style={{
          data: {
            fillOpacity: 0.9,
            stroke: "#ffffff",
            strokeWidth: 6,
          },
          labels: {
            fontSize: 15,
            fill: "#333333",
          },
        }}
      />
    </div>
  );
}

export default App;
