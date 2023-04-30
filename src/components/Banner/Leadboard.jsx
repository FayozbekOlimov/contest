import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { StyledTableCell, StyledTableRow } from "./style";

const Leadboard = () => {
  const [select, setSelect] = useState(1);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  function createData(tr, team, turnir, topnis, ochko) {
    return { tr, team, turnir, topnis, ochko };
  }

  const rows = [
    createData(1, "Barcelona", 15, 40, 75),
    createData(2, "Barcelona", 15, 40, 75),
    createData(3, "Barcelona", 15, 40, 75),
    createData(4, "Barcelona", 15, 40, 75),
  ];

  return (
    <Box p={1} bgcolor="background.table1" borderRadius={2}>
      <Typography fontWeight={700} variant="h6" p={1}>
        Jadval
      </Typography>
      <FormControl fullWidth sx={{ my: 1, bgcolor: "background.table2" }}>
        <Select value={select} onChange={handleChange}>
          <MenuItem value={1}>Italiya A seriya</MenuItem>
          <MenuItem value={2}>Laliga</MenuItem>
          <MenuItem value={3}>Premierliga</MenuItem>
          <MenuItem value={4}>Bundesliga</MenuItem>
          <MenuItem value={5}>Ligue 1</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={10}>№</StyledTableCell>
              <StyledTableCell align="left">Komanda</StyledTableCell>
              <StyledTableCell align="right">T</StyledTableCell>
              <StyledTableCell align="right">T/N</StyledTableCell>
              <StyledTableCell align="right">O</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.tr}>
                <StyledTableCell component="th">{row.tr}</StyledTableCell>
                <StyledTableCell align="left">{row.team}</StyledTableCell>
                <StyledTableCell align="right">{row.turnir}</StyledTableCell>
                <StyledTableCell align="right">{row.topnis}</StyledTableCell>
                <StyledTableCell align="right">{row.ochko}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leadboard;
