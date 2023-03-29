import * as React from "react";
import Typography from "@mui/material/Typography";
import ReactEcharts from "echarts-for-react";
export default function Card({ data }) {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.graphData,
        type: data.graphType,
      },
    ],
  };
  return (
    <>
      <Typography component="p" variant="h5" className="card-title">
        {data.title}
      </Typography>
      <Typography component="p" variant="h6" className="card-population">
        {data.population}
      </Typography>
      <div>
        <ReactEcharts
          option={option}
          style={{ height: "170px", width: "100%" }}
        />
      </div>
    </>
  );
}
