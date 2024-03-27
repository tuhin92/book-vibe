import React, { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Custom shape component for the bars
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyChart = () => {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("bookDetails");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBookDetails(parsedData);
    }
  }, []);

  // Custom tooltip content
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container mx-auto mt-12" style={{ width: "100%", maxWidth: "800px" }}>
      <BarChart width={800} height={500} data={bookDetails}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {bookDetails.map((book, index) => (
            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default MyChart;
