import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

const LineChartComponent = props => (
  <div>
    <h1>{props.title}</h1>
    <LineChart
      width={1500}
      height={700}
      data={props.deviceData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="date">
        <Label value="Date and time" offset={5} position="insideBottomLeft" />
      </XAxis>
      <YAxis
        label={{ value: props.y_axis, angle: -90, position: "insideLeft" }}
      />

      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={props.line1}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={props.line2} stroke="#82ca9d" />
    </LineChart>
  </div>
);

export default LineChartComponent;
