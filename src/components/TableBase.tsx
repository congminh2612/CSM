import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  NativeSelect,
  Pagination,
  Stack,
  TableFooter,
  TablePagination,
  Typography,
  colors,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import { useState } from "react";
import { originalRows } from "./constant";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import FirstPageIcon from "@mui/icons-material/FirstPage";

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

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

interface User {
  email: string;
  title: string;
  role: string;
  action: string;
}

const TableBase = () => {
  const sm = useMediaQuery("(max-width: 640px)");
  const md = useMediaQuery("(max-width: 768px)");
  const lg = useMediaQuery("(max-width: 1024px)");

  const [columns, setColumns] = useState("");
  const [rows, setRows] = useState<User[]>(originalRows);
  const [searched, setSearched] = useState<string>("");

  const requestSearch = (searchedVal: string) => {
    setRows(originalRows.filter((item) => item.email.includes(searchedVal)));
  };

  const handleChange = (event: { target: { value: string } }) => {
    setColumns(event.target.value);
  };

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <Box
      sx={{
        padding: "40px",
        margin: "40px",
        border: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          display: lg ? "block" : "flex",
          alignItems: "center",
          pb: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: lg ? "100%" : "50%",
          }}
        >
          <Box
            sx={{
              p: "16px 16px 16px 0",
              position: "relative",
              width: lg ? "25%" : "30%",
            }}
          >
            <InputBase
              value={searched}
              onChange={(e) => {
                setSearched(e.target.value);
                requestSearch(e.target.value);
              }}
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
              pl: "80px",
            }}
          >
            <Typography
              sx={{
                display: lg ? "none" : "",
              }}
            >
              Columns:
            </Typography>
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
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: sm ? "none" : "flex",
              pl: lg ? "" : "240px",
              width: lg ? "20%" : "50%",
            }}
          >
            <FilterAltOutlinedIcon color="error" />
            <Typography color="error"> Filters </Typography>
          </Box>
          <Box
            sx={{
              pl: lg ? "10px" : "240px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                width: "100px",
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
              sx={{
                width: "140px",
                borderRadius: "40px",
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
                Invite User
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  sx={{
                    width: "300px",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="center">{row.title}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "blue",
                  }}
                  align="center"
                >
                  {row.action}
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

export default TableBase;
