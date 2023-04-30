import { AppBar, Box, styled, Tab, Tabs } from "@mui/material";

export const MuiAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.success.light,
  margin: `${theme.spacing(2)} 0`,
  borderRadius: theme.spacing(1),
  boxShadow: "none",
}));

export const MuiTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": { display: "none" },
}));

export const MuiTab = styled(Tab)(({ theme }) => ({
  textTransform: "unset",
  color: theme.palette.text.grey,
  padding: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
  borderRadius: theme.spacing(1),
  border: "2px solid transparent",
  "&:hover": {
    borderColor: theme.palette.success.main,
  },
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: theme.palette.success.main,
  },
}));

export const MuiTabLabel = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "& img": {
    width: 25,
    height: 25,
    borderRadius: "50%",
  },
}));

// export const MuiTabPanel = styled(Ta)(({ theme }) => ({
//   "& .MuiTabs-indicator": { display: "none" },
// }));
