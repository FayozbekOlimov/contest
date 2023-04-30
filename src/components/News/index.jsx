import { Container, Grid } from "@mui/material";
import { newsUrl, NEWS_URL } from "../../api/urls";
import NewsCard from "./NewsCard";
import { MuiButton, Title } from "./style";

const News = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Title variant="subtitle1">Barcha yangiliklar</Title>
      <Grid container spacing={2} my={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            img={"/images/news1.png"}
            title='Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi'
            subtitle='Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
            time="12.05.2021  12:54"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            img={"/images/news1.png"}
            title='Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi'
            subtitle='Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
            time="12.05.2021  12:54"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            img={"/images/news1.png"}
            title='Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi'
            subtitle='Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
            time="12.05.2021  12:54"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            img={"/images/news1.png"}
            title='Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi'
            subtitle='Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
            time="12.05.2021  12:54"
          />
        </Grid>
      </Grid>
      <MuiButton variant="outlined">Barchasini ko'rish</MuiButton>
    </Container>
  );
};

export default News;
