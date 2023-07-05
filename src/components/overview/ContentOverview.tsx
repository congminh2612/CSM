import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import TableOverView from "./TableOverView";

const ContentOverview = () => {
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
      <Box
        sx={{
          m: "40px 40px 0px 40px",
          p: "16px 0 16px 8px",
          border: "1px solid #ccc",
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h5">jacket A</Typography>
          <Typography>Product Code</Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          margin: "40px 0 40px 40px",
          display: "flex",
        }}
      >
        <Button variant="contained" color="error">
          Overview
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
          Materials
        </Button>
      </Box>
      <Box>
        <TableOverView />
      </Box>
    </Box>
  );
};

export default ContentOverview;
