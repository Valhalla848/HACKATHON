import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../context/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import "../components/CompStyle/Cart.css";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, changeProductCount, deleteProductInCart, cart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  const trHeadStyle = {
    backgroundColor: "#666699 !important",
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Name
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Type
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Description
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Count
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Sub Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              {" "}
              ---{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} alt="" width="70" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>

              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => deleteProductInCart(row.item.id)}
                  startIcon={<DeleteIcon sx={{ color: "#666699" }} />}
                ></Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ m: 5 }}>
        <Typography variant="h6" component="div">
          Total price: {cart?.totalPrice}
          <Link to="/order">
            <Button onClick={cartCleaner}>BUY NOW</Button>
          </Link>
        </Typography>
      </Box>
    </TableContainer>
  );
}
