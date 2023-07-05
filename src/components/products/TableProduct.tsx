import {
  Box,
  Button,
  FormControl,
  InputBase,
  Modal,
  NativeSelect,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import { Rows } from "./constant";
import ModalProduct from "./ModalProduct";

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
  "&:nth-of-type(even)": {
    backgroundColor: "#e3f2fd",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Product {
  productName: string;
  active: string;
  productCode: string;
  HsCode: string;
  Category: string;
  SubCategory: string;
}

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1150,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const TableProduct = () => {
  const [columns, setColumns] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: { target: { value: string } }) => {
    setColumns(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: "40px",
        margin: "40px",
        border: "1px solid #eee",
      }}
    >
      <Stack
        direction={{ md: "column", lg: "row" }}
        spacing={{ sm: 1, lg: 5, xl: 25 }}
        sx={{
          py: "20px",
          minWidth: 700,
        }}
      >
        <Stack
          direction={{
            sm: "column",
            md: "row",
          }}
          spacing={4}
        >
          <Box
            sx={{
              p: "16px 16px 16px 0",
              position: "relative",
            }}
          >
            <InputBase
              sx={{
                width: "240px",
                backgroundColor: "#eee",
                border: "1px solid gray",
                p: "2px 0 2px 10px",
                borderRadius: "5px",
              }}
              placeholder="Search"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "36px",
                backgroundColor: "#212121",
                position: "absolute",
                top: "17px",
                left: "199px",
              }}
            >
              <SearchIcon
                sx={{
                  backgroundColor: "#212121",
                  color: "#eee",
                  fontSize: "22px",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>Columns:</Typography>
            <FormControl sx={{ m: 1 }}>
              <NativeSelect
                value={columns}
                onChange={handleChange}
                input={
                  <InputBase
                    sx={{
                      width: "240px",
                      backgroundColor: "#eee",
                      border: "1px solid gray",
                      p: "2px 0 2px 10px",
                      borderRadius: "5px",
                    }}
                  />
                }
              >
                <option value={10}>Email,Title ,Role</option>
                <option value={20}>Title</option>
                <option value={30}>Role</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={{ sm: 10, lg: 20, xl: 20 }}
          sx={{
            pt: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              pt: "5px",
            }}
          >
            <FilterAltOutlinedIcon color="error" />
            <Typography color="error"> Filters </Typography>
          </Box>
          <Stack direction="row" spacing={10}>
            <Button
              variant="contained"
              color="error"
              sx={{
                width: "100px",
                height: "35px",
                borderRadius: "40px",
                textTransform: "capitalize",
              }}
            >
              <AppShortcutOutlinedIcon />
              <Typography
                sx={{
                  pl: "4px",
                }}
              >
                import
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleOpen}
              sx={{
                width: "160px",
                borderRadius: "40px",
                height: "35px",
                textTransform: "capitalize",
                ml: "40px",
              }}
            >
              <PersonAddAlt1OutlinedIcon />
              <Typography
                sx={{
                  pl: "4px",
                }}
              >
                Add Product
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <ModalProduct />
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="center">Active</StyledTableCell>
              <StyledTableCell align="center">Product Code</StyledTableCell>
              <StyledTableCell align="center">HS Code</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Sub Category</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  sx={{
                    width: "300px",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.productName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.active}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.productCode}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "blue",
                  }}
                  align="center"
                >
                  {row.hsCode}
                </StyledTableCell>
                <StyledTableCell align="center">{row.category}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.subCategory}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Pagination
          sx={{
            pt: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
          count={3}
          shape="rounded"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default TableProduct;
