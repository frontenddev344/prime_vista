import React from 'react'
import SubBanner from "../components/SubBanner";
import barBanner from '../assets/barBanner.jpg'
import DiscoverBars from '../components/DiscoverBars'
import BarsImage from '../components/BarsImage'
import FoodSection from "../components/FoodSection";
import PrivateDining from "../components/PrivateDining";

const Bars = () => {
  return (
    <>
      <SubBanner
        title="Bars & Lounges"
        backgroundImage={barBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Bars & Lounges" },
        ]}
      />
      <DiscoverBars />
      <BarsImage />
      <FoodSection />
      <PrivateDining />
    </>
  )
}

export default Bars