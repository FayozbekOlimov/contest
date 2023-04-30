import { useContext } from "react";
import { IconButton } from "@mui/material";
import { ColorModeContext } from "../../theme";
import { ModeButtonWrapper } from "./style";
import { LightModeOutlined } from "@mui/icons-material";

const ModeButton = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <ModeButtonWrapper>
      <IconButton onClick={toggleColorMode} color="#fff">
        <LightModeOutlined />
      </IconButton>
    </ModeButtonWrapper>
  );
};

export default ModeButton;
