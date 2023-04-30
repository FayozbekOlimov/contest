import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { Box, Typography, Container, Grid } from "@mui/material";
import { MuiAppBar, MuiTab, MuiTabLabel, MuiTabs } from "./style";
import { useEffect, useState } from "react";
import Score from "../Score";
import axios from "axios";
import { BASE_URL, ligaUrl, oldgameUrl } from "../../api/urls";

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

  const [ligas, setLigas] = useState([]);

  const getLigas = async () => {
    const resp = await axios.get(BASE_URL + ligaUrl);
    const data = resp.data;
    setLigas(data);
  };

  useEffect(() => {
    getLigas();
  }, []);

  const [oldgame, setOldgame] = useState([]);

  const getOldgame = async () => {
    const resp = await axios.get(BASE_URL + oldgameUrl);
    const data = resp?.data;
    setOldgame(data);
  };

  useEffect(() => {
    getOldgame();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <MuiAppBar>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs"
          variant="scrollable"
        >
          {ligas.map((liga, ind) => (
            <MuiTab
              key={ind}
              label={
                <MuiTabLabel>
                  <img src={liga?.image} />
                  <Typography>{liga?.name}</Typography>
                </MuiTabLabel>
              }
              {...a11yProps(ind)}
            />
          ))}
        </MuiTabs>
      </MuiAppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {ligas.map((liga, ind) => (
          <TabPanel value={value} index={ind} key={ind}>
            <Grid container spacing={2}>
              {oldgame
                .filter((g) => g.liga.id === liga.id)
                .map((game, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Score
                      isHeld={isHeld}
                      player1={game.player1}
                      player2={game.player2}
                      res={game.natija}
                    />
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
        ))}
      </SwipeableViews>
    </Container>
  );
};

export default Groups;
