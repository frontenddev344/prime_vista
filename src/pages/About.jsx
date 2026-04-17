import React from 'react'
import SubBanner from "../components/SubBanner";
import AboutBanner from "../assets/about_banner.jpg"
import ImageTextSection from "../components/ImageTextSection";
import ImageGridTextSection from "../components/ImageGridTextSection";

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
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
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
      "https://images.unsplash.com/photo-1590490360182-c33d57733427", // small top
      "https://images.unsplash.com/photo-1566073771259-6a8506099945", // big center
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2107c", // wide bottom
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", // small bottom
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