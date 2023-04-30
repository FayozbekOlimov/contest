import { Box, Button, styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  backgroundColor: theme.palette.success.main,
  color: "#fff",
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const CardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.table1,
}));

export const CardImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "180px",
  borderRadius: theme.spacing(1),
  overflow: "hidden",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const MuiButton = styled(Button)(({ theme }) => ({
  textTransform: "unset",
  padding: theme.spacing(1),
  margin: `${theme.spacing(1)} 0`,
  width: "100%",
  fontWeight: 700,
  "&:hover": {
    border: "none",
  },
  border: "none",
  backgroundColor: theme.palette.background.button,
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1),
  fontSize: "16px"
}));
