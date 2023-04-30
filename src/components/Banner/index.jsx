import { Container, Grid } from "@mui/material";
import BannerCard from "./BannerCard";
import Leadboard from "./Leadboard";

const Banner = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BannerCard
                img={"/images/b1.png"}
                title="Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib boradi: bo'g'inlar oldidagi barcha maketlar"
                timeAgo="2 soat oldin"
                primary={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BannerCard
                img={"/images/b2.png"}
                title="Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi"
                timeAgo="3 soat oldin"
                primary={false}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BannerCard
                img={"/images/b2.png"}
                title="Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi"
                timeAgo="3 soat oldin"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BannerCard
                img={"/images/b2.png"}
                title="Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi"
                timeAgo="3 soat oldin"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Leadboard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
