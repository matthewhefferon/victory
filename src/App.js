import "./App.css";
import { VictoryPie, VictoryBar, VictoryChart, VictoryLabel } from "victory";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <h1>Playing Around with Victory</h1>

      {/* Donut */}
      <motion.div
        className="Donut"
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
      {/* Bar */}
      <motion.div
        className="Bar"
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <VictoryChart
          //theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryBar
            style={{ data: { fill: "#5778a4" }, labels: { fill: "#333333" } }}
            categories={{ x: ["Value A", "Value B", "Value C", "Value D"] }}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryLabel dy={-5} />}
          />
        </VictoryChart>
      </motion.div>
    </div>
  );
}

export default App;
