import { Divider, Grid, Link, Typography } from "@mui/material";
import Logo from "../Logo";
import { FooterContainer, FooterWrapper } from "./style";

const Footer = () => {
  const socialLinks = [
    {
      src: "/images/twitter.png",
      url: "https://www.twitter.com",
    },
    {
      src: "/images/youTube.png",
      url: "https://www.youtube.com",
    },
    {
      src: "/images/telegram.png",
      url: "https://www.telegram.org",
    },
  ];

  const links = [
    {
      name: "Main",
      url: "#",
    },
    {
      name: "Mach center",
      url: "#",
    },
    {
      name: "Football",
      url: "#",
    },
    {
      name: "Tennis",
      url: "#",
    },
    {
      name: "Cybersport",
      url: "#",
    },
  ];

  return (
    <FooterWrapper>
      <FooterContainer maxWidth="xl">
        <Grid container spacing={2} pb={2} borderBottom="1px solid #fff">
          <Grid item xs={12} lg={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={3}>
                <Logo />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                {links.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    underline="none"
                    display="block"
                    color="#fff"
                    my={1}
                    fontSize="14px"
                  >
                    {link.name}
                  </Link>
                ))}
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                {links.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    underline="none"
                    display="block"
                    color="#fff"
                    my={1}
                    fontSize="14px"
                  >
                    {link.name}
                  </Link>
                ))}
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                {links.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    underline="none"
                    display="block"
                    color="#fff"
                    my={1}
                    fontSize="14px"
                  >
                    {link.name}
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Grid container spacing={1}>
              {socialLinks.map((link, index) => (
                <Grid item key={index} xs={4}>
                  <Link display={"block"} href={link.url} target="_blank">
                    <img
                      src={link.src}
                      alt="social media"
                      width={40}
                      height={40}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </FooterContainer>
      <Typography textAlign={"center"} color="#fff">
        © 2023 Footboll. All rights reserved
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
