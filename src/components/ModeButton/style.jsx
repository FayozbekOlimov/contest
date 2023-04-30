import { Box, styled } from "@mui/material";

export const ModeButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  backgroundColor: "#fff",
  borderRadius: "50%",
  "& .MuiButtonBase-root": {
    color: "#333",
  },
}));
