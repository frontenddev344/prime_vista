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
import { Bed, Utensils, Wine, Building } from "lucide-react";
import AboutFeatureSection from "../components/AboutFeatureSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";

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

  const features = [
    {
      icon: <Bed className="w-8 h-8 text-icon" />,
      title: "Comfortable Stays",
      description:
        "Relax in thoughtfully designed rooms that offer comfort, convenience, and a peaceful atmosphere for every guest.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-icon" />,
      title: "Quality Dining",
      description:
        "Enjoy freshly prepared meals made with quality ingredients, delivering flavors that satisfy every taste.",
    },
    {
      icon: <Wine className="w-8 h-8 text-icon" />,
      title: "Bar & Lounge",
      description:
        "Unwind with expertly crafted drinks in a vibrant yet relaxing setting, perfect for socializing or quiet evenings.",
    },
    {
      icon: <Building className="w-8 h-8 text-icon" />,
      title: "All-In-One",
      description:
        "Stay, dine, and relax — all in one place, with seamless service designed to make your experience effortless.",
    },
  ];


  const faqData = [
    {
      question: "A Space Designed for Experiences",
      answer:
        "Our hotel is not just about rooms—it’s about how you feel the moment you walk in.Every corner is thoughtfully designed to create a balance of comfort, style, and energy, making it the perfect place to unwind, connect, and enjoy.",
    },
    {
      question: "Where Comfort Meets Character",
      answer:
        "We go beyond standard hospitality by blending modern design with a warm, inviting atmosphere.From the lighting to the textures, every detail is curated to give you a stay that feels both premium and personal.",
    },
    {
      question: "Elevated Stay, Effortless Living",
      answer:
        "Our rooms are crafted for guests who appreciate both luxury and practicality.Clean lines, cozy bedding, and essential amenities come together to offer a seamless and relaxing stay experience.",
    },
    {
      question: "Crafted Nights at Our Bar",
      answer:
        "As the day winds down, our bar comes alive. Signature cocktails, smooth spirits, and a carefully selected menu set the tone for evenings that are vibrant yet relaxed—perfect for conversations, celebrations, or simply enjoying the moment.",
    },
    {
      question: "Service That Understands You",
      answer:
        "Great service is not loud—it’s intuitive.Our team focuses on the small details, ensuring your needs are met effortlessly so you can focus on enjoying your time.",
    },
  ];
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
      <AboutFeatureSection title="Why Choose Us" items={features} />
      <CTASection
      title="Plan Your Stay With Us"
      description="Whether you’re traveling for business, leisure, or a special occasion, we’re here to make your visit exceptional."
      buttonText="Book Now"
      onClick={() => alert("Booking clicked")}
    />
    <FAQSection faqs={faqData} />
    </>
  )
}

export default About