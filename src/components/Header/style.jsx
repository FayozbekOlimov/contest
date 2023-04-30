import { Box, styled, Container } from "@mui/material";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
}));

