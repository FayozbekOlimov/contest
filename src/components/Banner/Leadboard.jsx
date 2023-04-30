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
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL, ligaUrl, teamUrl } from "../../api/urls";
import { DataContext } from "../../context/DataProvider";
import { StyledTableCell, StyledTableRow } from "./style";

const Leadboard = () => {
  const [select, setSelect] = useState(1);
  const [team, setTeam] = useState([]);
  const [subteam, setSubteam] = useState([]);

  const handleChange = (event) => {
    setSelect(event.target.value);
    const ligaId = +event.target.value;
    const subteam = team.filter((t) => t.liga === ligaId);
    setSubteam(subteam);
  };

  const [ligas, setLigas] = useState([]);

  const getLigas = async () => {
    const resp = await axios.get(BASE_URL + ligaUrl);
    const data = resp.data;
    setLigas(data);
  };

  useEffect(() => {
    getLigas();
  }, []);

  const getTeam = async () => {
    const resp = await axios.get(BASE_URL + teamUrl);
    const data = resp?.data;
    setTeam(data);
    const subteam = data.filter((t) => t.liga === 1);
    setSubteam(subteam);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <Box p={1} bgcolor="background.table1" borderRadius={2}>
      <Typography fontWeight={700} variant="h6" p={1}>
        Jadval
      </Typography>
      <FormControl fullWidth sx={{ my: 1, bgcolor: "background.table2" }}>
        <Select value={select} onChange={handleChange}>
          {ligas.map((liga) => (
            <MenuItem key={liga.id} value={liga.id}>
              {liga.name}
            </MenuItem>
          ))}
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
            {subteam.map((row, ind) => (
              <StyledTableRow key={row?.id}>
                <StyledTableCell component="th">{ind + 1}</StyledTableCell>
                <StyledTableCell align="left">{row?.name}</StyledTableCell>
                <StyledTableCell align="right">{row?.tur}</StyledTableCell>
                <StyledTableCell align="right">{row?.nisbat}</StyledTableCell>
                <StyledTableCell align="right">{row?.ochko}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leadboard;
