import { Box, Typography } from "@mui/material";
import { BannerCardWrapper, BannerCardContent } from "./style";

const BannerCard = ({ img, title, timeAgo, primary }) => {
  return (
    <BannerCardWrapper>
      <img src={img} alt="banner-card image" />
      <BannerCardContent width={primary ? "60%" : "80%"}>
        <Typography
          variant={primary ? "subtitle2" : "caption"}
          fontWeight={700}
        >
          {title}
        </Typography>
        <Typography variant={primary ? "body2" : "caption"}>
          {timeAgo}
        </Typography>
      </BannerCardContent>
    </BannerCardWrapper>
  );
};

export default BannerCard;
