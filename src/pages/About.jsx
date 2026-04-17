import React from 'react'
import SubBanner from "../components/SubBanner";
import AboutBanner from "../assets/about_banner.jpg"
import ImageTextSection from "../components/ImageTextSection";
import ImageGridTextSection from "../components/ImageGridTextSection";
import ImageGridImage1 from "../assets/about-grid_image1.jpg"
import ImageGridImage2 from "../assets/about-grid_image2.jpg"
import ImageGridImage3 from "../assets/about-grid_image3.jpg"
import ImageGridImage4 from "../assets/about-grid_image4.jpg"
import AboutAfterBanner from "../assets/about_after_banner.jpg"

const About = () => {
  const content1 = {
    title: (
      <>
        Your Complete Stay, <br /> All in One Place
      </>
    ),
    paragraphs: [
      {
        text: "Welcome to a Prime Vista where comfort meets experience. Whether you're here for a relaxing stay, great food, or an evening at the bar, we bring everything together under one roof.",
      },
      {
        text: "Designed for both leisure and business travelers, our space offers the perfect balance of relaxation, hospitality, and vibrant social energy.",
        className: "mb-6",
      },
    ],
    button: {
      text: "Contact Us",
      onClick: () => console.log("Contact clicked"),
    },
    image:
      AboutAfterBanner,
  };

  const content2 = {
    title: "More Than Just a Hotels",
    paragraphs: [
      {
        text: "We are more than a place to stay — we are a place to experience. From well-appointed rooms to a lively bar and lounge, every part of our property is designed to make your time with us enjoyable and effortless.",
      },
      {
        text: "Whether you're visiting for a night or an extended stay, we ensure comfort, convenience, and quality at every step.",
      },
    ],
    button: {
      text: "Contact Us",
      onClick: () => console.log("clicked"),
    },
    images: [
      ImageGridImage1, 
      ImageGridImage2, 
      ImageGridImage3, 
      ImageGridImage4, 
    ],
  };

  return (
    <>
      <SubBanner
        title="About"
        backgroundImage={AboutBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About" },
        ]}
      />
      <ImageTextSection {...content1} />
      <ImageGridTextSection {...content2} />
    </>
  )
}

export default About