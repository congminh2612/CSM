import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/user/Header";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const DashBoard = () => {
  return (
    <>
      <Box>
        <Header />
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
            Hi, have a great day !
          </Typography>
        </Box>
        <Box
          sx={{
            p: 4,
          }}
        >
          <Grid container spacing={2} columns={15}>
            <Grid item xs={4}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                }}
              >
                <Stack
                  sx={{
                    p: 3,
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <Typography>Recent Activity</Typography>
                </Stack>
                <Box
                  sx={{
                    p: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      width: "100px",
                    }}
                  >
                    Alerts
                  </Button>
                </Box>
                <Box
                  sx={{
                    m: "10px",
                    p: 2,
                    border: "1px solid #ccc",
                    height: "600px",
                  }}
                >
                  <Typography>No data</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Grid container columns={12} spacing={3}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                    }}
                  >
                    <Box
                      sx={{
                        p: "24px 34px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <Typography>Supplier Distribution</Typography>
                    </Box>
                    <Stack
                      alignItems="center"
                      sx={{
                        p: 3,
                      }}
                    >
                      <img
                        width={500}
                        src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                        alt=""
                      />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                    }}
                  >
                    <Box
                      sx={{
                        p: "24px 34px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <Typography>Supplier Network</Typography>
                    </Box>
                    <Stack
                      alignItems="center"
                      sx={{
                        p: 3,
                      }}
                    >
                      <img
                        width={500}
                        src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                        alt=""
                      />
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  pt: 2,
                }}
                spacing={2}
              >
                <Grid item xs={4}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      overflowY: "auto",
                      height: "400px",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        p: "16px 20px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <Typography>Received</Typography>
                      <Typography color="error">More</Typography>
                    </Stack>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      3442244
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      3442244
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      3442244
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      3442244
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={80}
                    >
                      3442244
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      overflowY: "auto",
                      height: "400px",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        p: "16px 20px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <Typography>Puchase Oder Progress</Typography>
                      <Typography color="error">More</Typography>
                    </Stack>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>3442244</Typography>
                        <Typography color="error">View more</Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>3442244</Typography>
                        <Typography color="error">View more</Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>3442244</Typography>
                        <Typography color="error">View more</Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                      }}
                      bgcolor="#ccc"
                      height={100}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>3442244</Typography>
                        <Typography color="error">View more</Typography>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      overflowY: "auto",
                      height: "400px",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        p: "16px 20px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <Typography>Received</Typography>
                      <Typography color="error">More</Typography>
                    </Stack>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DashBoard;
