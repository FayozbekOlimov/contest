import { Box } from "@mui/material";
import Logo from "../Logo";
import ModeButton from "../ModeButton";
import { HeaderContainer, HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer maxWidth="xl">
        <Box>
          <Logo />
        </Box>
        <Box>
          <ModeButton />
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
