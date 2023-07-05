import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TableProduct from "./TableProduct";

const ContentProduct = () => {
  return (
    <Box>
      <Box
        sx={{
          margin: "20px 0 0 40px",
          padding: "2px 0 2px 6px",
          borderLeft: "8px solid red",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight={500}>
          Products
        </Typography>
        <Typography
          variant="body2"
          fontWeight={500}
          sx={{
            paddingLeft: "8px",
            color: "gray",
          }}
        >
          View and Manage Products
        </Typography>
      </Box>
      {/* <Box
        sx={{
          margin: "40px 0 40px 40px",
          display: "flex",
        }}
      >
        <Button variant="contained" color="error">
          Users
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#eee",
            color: "#000",
            marginLeft: "20px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#fafafa",
              boxShadow: "none",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "#fafafa",
              borderColor: "#005cbf",
            },
          }}
        >
          Roles
        </Button>
      </Box> */}
      <Box>
        <TableProduct />
      </Box>
    </Box>
  );
};

export default ContentProduct;
