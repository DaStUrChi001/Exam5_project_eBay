import React from "react";
import Container from "../../utils/Container"
import Ads from "../../components/ads/Ads";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import DestinationsList from "../../components/destinationsList/DestinationsList";
import ItemsList from "../../components/itemsList/ItemsList";
import Events from "../../components/personalized-events/Events";
import Search from "../../components/search/Search";

const Home = () => {
  return (
    <>
      <main>
        <Container>
          <Search />
          <Banner />
          <Events />
          <Categories />
          <DestinationsList />
          <Ads />
          <ItemsList />
        </Container>
      </main>
    </>
  );
}

export default Home;