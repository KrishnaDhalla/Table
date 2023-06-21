import React from "react";
import rows from "../data"
import { DataGrid } from '@mui/x-data-grid';
import logo from '../Asset/hrc.jpg'
const columns = [
  { field: 'id', headerName: 'SlNo', width: 100 },
  { field: 'customerOrderId', headerName: 'Customer Order ID', width: 200 },
  { field: 'salesOrg', headerName: 'Sales Org', width: 150 },
  { field: 'distributionChannel', headerName: 'Distribution Channel', width: 200 },
  { field: 'companyCode', headerName: 'Company Code', width: 150 },
  { field: 'orderCreationDate', headerName: 'Order Creation Date', width: 200 },
  { field: 'orderCurrency', headerName: 'Order Currency', width: 150 },
  { field: 'customerNumber', headerName: 'Customer Number', width: 200 },
  { field: 'amountUSD', headerName: 'Order Amount', width: 150 },
];

const Table = () => {
  return (
    <div style={{ display: "flex",justifyContent: "center", alignItems: "center", height:'100vh', flexDirection:"column" }}>
      <img src={logo} alt="hrc logo" style={{width:200,height:100,}} />
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        sx={{backgroundColor:"#808080",paddingLeft:'2.5rem',textAlign:'center'}}
      />
    </div>
  );
};

export default Table;
