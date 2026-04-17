import React from 'react'
import SubBanner from "../components/SubBanner";  
import ContactBanner from "../assets/contactBanner.jpg"
import ContactContent from "../components/ContactContent"


const Contact = () => {
  return (
   <>
    <SubBanner
        title="Contact"
        backgroundImage={ContactBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact" },
        ]}
      />
       <ContactContent />
   </>
  )
}

export default Contact