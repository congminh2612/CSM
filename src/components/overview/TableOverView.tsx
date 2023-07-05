import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { overViewItem, overViewItem2 } from "./constant";

const TableOverView = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        margin: "40px",
        border: "1px solid #eee",
      }}
    >
      <Grid container spacing={6}>
        <Grid item lg={3}>
          <Stack>
            <img
              src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </Stack>
          <Stack
            sx={{
              pt: 4,
            }}
          >
            <Grid container>
              <Grid item lg={3}>
                <img
                  width={60}
                  src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </Grid>
              <Grid item lg={3}>
                <img
                  width={60}
                  src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </Grid>
              <Grid item lg={3}>
                <img
                  width={60}
                  src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </Grid>
              <Grid item lg={3}>
                <img
                  width={60}
                  src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <Typography
                sx={{
                  color: "#ccc",
                }}
              >
                Status:
              </Typography>
              <Typography>Active</Typography>
            </Stack>
            {overViewItem.map((item) => {
              return (
                <Stack direction="row" spacing={2}>
                  <Typography
                    sx={{
                      color: "#ccc",
                    }}
                  >
                    {item.title}:
                  </Typography>
                  <Typography>{item.value}</Typography>
                </Stack>
              );
            })}
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Stack spacing={2}>
            {overViewItem2.map((item) => {
              return (
                <Stack direction="row" spacing={2}>
                  <Typography
                    sx={{
                      color: "#ccc",
                    }}
                  >
                    {item.title}:
                  </Typography>
                  <Typography>{item.value}</Typography>
                </Stack>
              );
            })}
          </Stack>
        </Grid>
        <Grid item lg={1}>
          <Button variant="contained" color="error">
            {" "}
            Edit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableOverView;
