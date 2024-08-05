import { Box, Table } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cart/cartSlice";
export default function Cart() {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  return (
    <Box sx={{ marginTop: 10 }}>
      <h1>Đây là giỏ hàng</h1>
      {carts != null ? (
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h3>Cart is empty</h3>
      )}
    </Box>
  );
}
