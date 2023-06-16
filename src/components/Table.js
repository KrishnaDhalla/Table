import React from "react";
import orders from "../data"
import logo from '../Asset/hrc.jpg'
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",flexDirection:"column"}}>
      <img src={logo} alt="hrc logo" style={{width:200,height:100,}} />
      <table style={{ borderCollapse: "collapse", width: "100%",backgroundColor:"	#808080" }}>
        
        <thead>
          <tr style={{backgroundColor:"#404040"}}>
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
                      return <td style={{ border: "1px solid #dddddd", padding: "8px",color:"#ffffff",textAlign:"center" }}>{val}</td>
                    })}
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
