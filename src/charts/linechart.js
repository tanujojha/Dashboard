import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import "./linechart.css"

const data = [
    { name: "Jan", value: 8 },
    { name: "Mar", value: 2 },
    { name: "May", value: 9 },
    { name: "Jul", value: 5 },
    { name: "Sep", value: 9 },
    { name: "Nov", value: 5 },
];

function Linechart() {
  return (
    <div className='linechartmaindiv'>
        <h5 className='linechartdheading'>Earnings Overview</h5>
        <LineChart className='chart' width={600} height={400} data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip viewBox={{ x: 0, y: 0, width: 200, height: 200 }} />
        </LineChart>

    </div>
  )
}

export default Linechart