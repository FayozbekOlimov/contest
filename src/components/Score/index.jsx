import { Box, Grid, Typography } from "@mui/material";
import { Result, ScoreWrapper, Team, Date } from "./style";

const Score = ({ isHeld, player1, player2, res }) => {
  return (
    <Box display="flex" flexDirection="column">
      <ScoreWrapper>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item>
            <Team>
              <img src={player1.image} alt={player1.name} />
              <Typography color="text.primary" variant="body2" fontWeight={700}>
                {player1.name}
              </Typography>
            </Team>
          </Grid>
          <Grid item>
            <Result>
              {isHeld ? (
                <>
                  <Typography color="text.primary" fontWeight={700}>
                    {res.split(":")[0]}
                  </Typography>
                  <Typography color="text.primary" fontWeight={700}>
                    :
                  </Typography>
                  <Typography color="text.primary" fontWeight={700}>
                    {res.split(":")[1]}
                  </Typography>
                </>
              ) : (
                <Typography color="text.primary" fontWeight={400}>
                  Vs
                </Typography>
              )}
            </Result>
          </Grid>
          <Grid item>
            <Team>
              <Typography color="text.primary" variant="body2" fontWeight={400}>
                {player2.name}
              </Typography>
              <img src={player2.image} alt={player2.name} />
            </Team>
          </Grid>
        </Grid>
      </ScoreWrapper>
      <Date>
        <Typography color="text.grey" variant="caption" fontWeight={500}>
          11.11.2021 &nbsp; 23:59
        </Typography>
      </Date>
    </Box>
  );
};

export default Score;
