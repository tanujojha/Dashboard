import React from 'react';
import { Legend, Pie, PieChart, Tooltip, Cell } from "recharts";
import "./piechart.css";

const data = [
    {
      name: "Direct",
      value: 55,
      color: "#1b976a",
    },
    {
      name: "Referral",
      value: 30,
      color: "#e74a3b",
    },
    {
      name: "Social",
      value: 15,
      color: "#f6c23e",
    },
  ];

function Piechart() {
  return (
    <div className='piechartmaindiv'>
        <h5 className='pieheading'>Revenue Sources</h5>
        <PieChart width={350} height={400}>
          <Pie
            dataKey="value"
            data={data}
            nameKey="name"
            outerRadius={130}
            innerRadius={100}
            cx="50%"
            cy="50%"
            fontSize={20}
          >
            {data.map((element, index) => {
              return <Cell key={index} fill={element.color} />;
            })}
          </Pie>
          <Tooltip title />
          <Legend />
        </PieChart>
    </div>
  )
}

export default Piechart