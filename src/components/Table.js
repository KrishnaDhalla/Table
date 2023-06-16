import React from "react";
import orders from "../data"
const head = [
  "SlNo",
  "Customer Order ID",
  "Sales Org",
  "Distribution Channel",
  "Company Code",
  "Order Creation Date",
  "Order Currency",
  "Customer Number",
  "Amount (USD)"
];
const Table = () => {
  return (
    <>
      <table style={{ borderCollapse: "collapse", width: "100%",backgroundColor:"	#808080" }}>
        <thead>
          <tr >
            {head.map((h) => {
              return <th style={{ border: "1px solid #dddddd", padding: "8px", color:"#ffffff" }}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
            {
              orders.map((order,index)=>{
                return(
                  <tr key={index}>
                    {Object.values(order).map((val,i)=>{
                      return <td style={{ border: "1px solid #dddddd", padding: "8px",color:"#ffffff" }}>{val}</td>
                    })}
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </>
  );
};

export default Table;
