import { Box, Container, styled } from "@mui/material";

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  padding: theme.spacing(2),
}));
