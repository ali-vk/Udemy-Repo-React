import "./ChartBar.css";

export default function ChartBar({ value, label, maxValue }) {
  let barFill = "0%";

  if (maxValue > 0) {
    barFill = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
