import Banner from "../components/Banner";
import Groups from "../components/Groups";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Groups isHeld={true} />
      <Groups isHeld={false} />
      <Banner />
      <News />
    </>
  );
};

export default Home;
