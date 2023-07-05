import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Header = () => {
  const sm = useMediaQuery("(max-width: 640px)");
  const md = useMediaQuery("(max-width: 768px)");
  const lg = useMediaQuery("(max-width: 1024px)");
  return (
    <Box
      sx={{
        display: "flex",
        boxShadow: 1,
        height: "80px",
        alignItems: "center",
        padding: lg ? "0 20px" : "0 100px 0 40px",
      }}
    >
      <Box>
        <Typography>Workspace for CSM</Typography>
      </Box>
      <Box
        sx={{
          display: md ? "none" : "flex",
          justifyContent: "",
          paddingLeft: "60px",
          width: lg ? "50%" : "70%",
        }}
      >
        <TypographyCustom>Dashboard</TypographyCustom>
        <TypographyCustom>Products</TypographyCustom>
        <TypographyCustom>Orders</TypographyCustom>
      </Box>

      <Box
        sx={{
          display: "flex",
          paddingLeft: lg ? "40px" : "60px",
          justifyContent: "space-between",
          width: lg ? "10%" : "18%",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <NotificationsNoneOutlinedIcon />
          <Typography
            sx={{
              paddingLeft: "8px",
            }}
          >
            CSM
          </Typography>
        </Box>
        <Box
          sx={{
            pl: lg ? "10px" : "",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccountCircleRoundedIcon />
          <Typography
            sx={{
              paddingLeft: "8px",
            }}
          >
            Steven
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const TypographyCustom = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "16px",
  paddingLeft: "50px",
}));
