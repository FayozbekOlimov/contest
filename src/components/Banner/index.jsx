import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { newsUrl, NEWS_URL } from "../../api/urls";
import BannerCard from "./BannerCard";
import Leadboard from "./Leadboard";

const Banner = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const resp = await axios.get(NEWS_URL + newsUrl);
    const data = resp?.data;
    setNews(data);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            {news.map((neww, ind) =>
              ind === 0 ? (
                <Grid item xs={12}>
                  <BannerCard
                    img={neww.image}
                    title={neww.name}
                    timeAgo="0.5 soat oldin"
                    primary={true}
                  />
                </Grid>
              ) : (
                <Grid item xs={12} sm={6} md={4}>
                  <BannerCard
                    img={neww.image}
                    title={neww.name}
                    timeAgo="1 soat oldin"
                    primary={false}
                  />
                </Grid>
              )
            )}
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
