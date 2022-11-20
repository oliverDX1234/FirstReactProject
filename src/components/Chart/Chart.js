import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = function (props) {
  const valArray = props.dataPoints.map((x) => x.value);
  const totalMax = Math.max(...valArray);

  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          key={x.label}
          value={x.value}
          maxValue={totalMax}
          label={x.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
