import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { Box, Typography, Container, Grid } from "@mui/material";
import { MuiAppBar, MuiTab, MuiTabLabel, MuiTabs } from "./style";
import { useState } from "react";
import Score from "../Score";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Groups = ({ isHeld }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <MuiAppBar>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs"
          variant="scrollable"
        >
          <MuiTab
            label={
              <MuiTabLabel>
                <img src="/images/premierliga.png" alt="liga" />
                <Typography>Italiya, Seriya A</Typography>
              </MuiTabLabel>
            }
            {...a11yProps(0)}
          />
          <MuiTab
            label={
              <MuiTabLabel>
                <img src="/images/premierliga.png" alt="liga" />
                <Typography>Premier Liga</Typography>
              </MuiTabLabel>
            }
            {...a11yProps(1)}
          />
          <MuiTab
            label={
              <MuiTabLabel>
                <img src="/images/premierliga.png" alt="liga" />
                <Typography>LaLiga</Typography>
              </MuiTabLabel>
            }
            {...a11yProps(2)}
          />
          <MuiTab
            label={
              <MuiTabLabel>
                <img src="/images/premierliga.png" alt="liga" />
                <Typography>BundesLiga</Typography>
              </MuiTabLabel>
            }
            {...a11yProps(3)}
          />
          <MuiTab
            label={
              <MuiTabLabel>
                <img src="/images/premierliga.png" alt="liga" />
                <Typography>Ligue 1</Typography>
              </MuiTabLabel>
            }
            {...a11yProps(4)}
          />
        </MuiTabs>
      </MuiAppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            {Array.from(Array(10)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Score isHeld={isHeld} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
};

export default Groups;
