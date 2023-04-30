import {
  Box,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";

export const BannerCardWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: theme.spacing(0.5),

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const BannerCardContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(2),
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),

  "& .MuiTypography-subtitle2": {
    fontSize: "20px",
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.table1,
    color: theme.palette.text.primary,
    borderBottom: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.background.table1,
  },
  // hide last border
  "& td, & th": {
    borderBottom: "none",
    fontWeight: 700,
  },
}));
