import { Box, styled } from "@mui/material";

export const ScoreWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0`,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.tab,
}));

export const Date = styled(Box)(({ theme }) => ({
  width: 120,
  border: `2px solid ${theme.palette.background.tab}`,
  borderTop: "none",
  textAlign: "center",
  borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
  backgroundColor: theme.palette.background.common,
}));

export const Team = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "& img": {
    width: 20,
    height: 20,
  },
}));

export const Result = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));
