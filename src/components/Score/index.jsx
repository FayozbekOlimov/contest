import { Box, Grid, Typography } from "@mui/material";
import { Result, ScoreWrapper, Team, Date } from "./style";

const Score = ({ isHeld }) => {
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
              <img src="/images/barcelona-logo.png" alt="barcelona" />
              <Typography color="text.primary" variant="body2" fontWeight={700}>
                Barcelona
              </Typography>
            </Team>
          </Grid>
          <Grid item>
            <Result>
              {isHeld ? (
                <>
                  <Typography color="text.primary" fontWeight={700}>
                    3
                  </Typography>
                  <Typography color="text.primary" fontWeight={700}>
                    :
                  </Typography>
                  <Typography color="text.primary" fontWeight={700}>
                    0
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
                Liverpool
              </Typography>
              <img src="/images/liverpool-logo.png" alt="liverpool" />
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
