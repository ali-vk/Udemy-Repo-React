import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
  const maximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
