import { Typography } from "@mui/material";
import { CardImage, CardWrapper } from "./style";

const NewsCard = ({ img, title, subtitle, time }) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={img} alt={title} />
      </CardImage>
      <Typography variant="body2" gutterBottom fontWeight={700} fontSize="15px">
        {title}
      </Typography>
      <Typography variant="subtitle2" fontSize="13px" gutterBottom fontWeight={400}>
        {subtitle}
      </Typography>
      <Typography variant="caption" fontWeight={400}>
        {time}
      </Typography>
    </CardWrapper>
  );
};

export default NewsCard;
