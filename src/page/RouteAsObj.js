import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Product,Quality,Amount) {
  return { Product,Quality,Amount };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData(   "",  "Total", 3.7,),
  createData("","",<button>Placerorder</button>)
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 ,maxWidth:350,marginLeft:50}} aria-label="simple table">
        <TableHead 
        sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
        >
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Quality</TableCell>
            <TableCell align="right">Amount</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Product}
              </TableCell>
              <TableCell align="right">{row.Quality}</TableCell>
              <TableCell align="right">{row.Amount}</TableCell>
              
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
