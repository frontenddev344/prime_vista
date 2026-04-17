import React from "react";
import SubBanner from "../components/SubBanner";
import OfferBanner from "../assets/about_banner.jpg"

export default function TermsConditions() {
  const Section = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-xl sm:text-3xl font-semibold text-primary mb-3">
        {title}
      </h2>
      <div className="text-gray-600  leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </div>
  );

  const List = ({ items }) => (
    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <>
      <SubBanner
        title="Terms & Conditions"
        backgroundImage={OfferBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl container mx-auto bg-white  rounded-lg">

          {/* Header */}
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Welcome to <span className="font-semibold">[PRIME VISTA]</span>. By accessing our website and using our services, you agree to comply with the following Terms & Conditions. Please read them carefully before making any booking.
          </p>

          {/* General Information */}
          <Section title="General Information">
            <p>
              This website is owned and operated by <span className="font-semibold">[PRIME VISTA]</span>. The content provided on this website is for general information and booking purposes only. By using this website, you agree to be legally bound by these terms.
            </p>
          </Section>

          {/* Use of Website */}
          <Section title="Use of Website">
            <List
              items={[
                "You must be at least 18 years old to use this website.",
                "You agree to use the website only for lawful purposes.",
                "You must not misuse the website by introducing viruses or attempting unauthorized access.",
              ]}
            />
          </Section>

          {/* Bookings */}
          <Section title="Bookings & Reservations">
            <List
              items={[
                "All bookings are subject to availability and confirmation.",
                "A booking is considered confirmed only after receiving a confirmation email from us.",
                "The hotel reserves the right to cancel any booking in case of incorrect details or suspicious activity.",
                "You agree to provide accurate and complete information during booking.",
              ]}
            />
          </Section>

          {/* Payment */}
          <Section title="Payment Policy">
            <List
              items={[
                "Full or partial payment may be required at the time of booking.",
                "Prices are subject to change without prior notice.",
                "All payments must be made through approved payment methods listed on the website.",
              ]}
            />
          </Section>

          {/* Cancellation */}
          <Section title="Cancellation & Refund Policy">
            <List
              items={[
                "Cancellation policies may vary depending on the room type or offer.",
                "Refunds (if applicable) will be processed as per the cancellation terms mentioned at the time of booking.",
                "No-shows may result in full booking charges.",
              ]}
            />
          </Section>

          {/* Check-in */}
          <Section title="Check-in & Check-out Policy">
            <List
              items={[
                "Check-in time: [Add Time]",
                "Check-out time: [Add Time]",
                "Early check-in or late check-out is subject to availability and may incur additional charges.",
              ]}
            />
          </Section>

          {/* Guest Responsibilities */}
          <Section title="Guest Responsibilities">
            <List
              items={[
                "Guests must present valid ID proof at check-in.",
                "Guests are responsible for maintaining decorum and respecting hotel property.",
                "Any damage caused to hotel property will be charged to the guest.",
              ]}
            />
          </Section>

          {/* Hotel Rights */}
          <Section title="Hotel Rights">
            <List
              items={[
                "The hotel reserves the right to refuse service to anyone for valid reasons.",
                "Management is not responsible for loss, theft, or damage of personal belongings.",
                "The hotel may modify or discontinue services without prior notice.",
              ]}
            />
          </Section>

          {/* Liability */}
          <Section title="Limitation of Liability">
            <List
              items={[
                "The hotel reserves the right to refuse service to anyone for valid reasons.",
                "Management is not responsible for loss, theft, or damage of personal belongings.",
                "The hotel may modify or discontinue services without prior notice.",
              ]}
            />
          </Section>

          {/* Privacy */}
          <Section title="Privacy Policy">
            <p>
              Your use of this website is also governed by our Privacy Policy.
            </p>
          </Section>

          {/* Changes */}
          <Section title="Changes to Terms">
            <p>
              We reserve the right to update these Terms & Conditions at any time. Continued use of the website implies acceptance of updated terms.
            </p>
          </Section>

          {/* Contact */}
          <Section title="Contact Us">
            <p className="mb-3">If you have any questions, please contact us:</p>
            <ul className="space-y-2 text-sm">
              <li>📧 Email: [Your Email]</li>
              <li>📞 Phone: [Your Phone Number]</li>
              <li>📍 Address: [Hotel Address]</li>
            </ul>
          </Section>

        </div>
      </div>
    </>

  );
}