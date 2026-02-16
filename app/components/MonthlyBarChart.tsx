"use client";

import React from "react";

type DataItem = {
     month: string;
     value: number;
};

const data: DataItem[] = [
     { month: "Jun", value: 60 },
     { month: "Jul", value: 75 },
     { month: "Aug", value: 70 },
     { month: "Sep", value: 80 },
     { month: "Oct", value: 95 },
     { month: "Nov", value: 100 },
];

const MonthlyBarChart: React.FC = () => {
     const maxValue = Math.max(...data.map((item) => item.value));

     return (
          <div style={wrapperStyle}>
               <div style={containerStyle}>
                    {data.map((item, index) => (
                         <div key={index} style={barWrapperStyle}>
                              <div
                                   style={{
                                        ...barStyle,
                                        height: `${(item.value / maxValue) * 100}%`,
                                   }}
                              />
                              <span style={labelStyle}>{item.month}</span>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default MonthlyBarChart;

const wrapperStyle: React.CSSProperties = {
     width: "100%",
     height: "250px", // responsive height
};

const containerStyle: React.CSSProperties = {
     display: "flex",
     alignItems: "flex-end",
     justifyContent: "space-between",
     height: "100%",
     gap: "12px",
};

const barWrapperStyle: React.CSSProperties = {
     flex: 1, // important for responsiveness
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "flex-end",
     height: "100%",
};

const barStyle: React.CSSProperties = {
     width: "100%", // takes full flex width
     maxWidth: "50px", // optional limit
     background: "linear-gradient(180deg, #4dabff 0%, #1c7ed6 100%)",
     borderTopLeftRadius: "6px",
     borderTopRightRadius: "6px",
     transition: "height 0.3s ease",
};

const labelStyle: React.CSSProperties = {
     marginTop: "8px",
     fontSize: "14px",
     color: "#666",
};
