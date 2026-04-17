import React from "react";
import SubBanner from "../components/SubBanner";
import OfferBanner from "../assets/about_banner.jpg"

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
    <hr className="mt-6 border-gray-200" />
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
export default function PrivacyPolicy() {


  return (
    <>
      <SubBanner
        title="Privacy Policy"
        backgroundImage={OfferBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl ">

           <p className="text-gray-600 mb-6">
            At <span className="font-semibold">[PRIME VISTA]</span>, we are committed
            to protecting your privacy and ensuring that your personal information
            is handled in a safe and responsible manner. This Privacy Policy outlines
            how we collect, use, and safeguard your information when you visit our
            website or use our services.
          </p>

          <hr className="mb-8 border-gray-200" />

          <Section title="Information We Collect">
            <p>We may collect the following types of information:</p>

            <h3 className="font-semibold text-gray-800 mt-4">
              Personal Information
            </h3>

            <List
              items={[
                "Full Name",
                "Email Address",
                "Phone Number",
                "Billing Address",
                "ID Proof details (as required for hotel check-in)",
              ]}
            />
          </Section>

          <Section title="How We Use Your Information">
            <p>We use your information to:</p>

            <List
              items={[
                "Process and confirm bookings",
                "Provide customer support",
                "Send booking confirmations and updates",
                "Improve our website and services",
                "Comply with legal requirements",
              ]}
            />
          </Section>

          <Section title="Payment Information">
            <p>
              We do not store your payment details (such as credit/debit card
              information). All payments are processed through secure and trusted
              payment gateways.
            </p>
          </Section>

          <Section title="Sharing of Information">
            <p>
              We do not sell or rent your personal information. However, we may
              share your data with:
            </p>

            <List
              items={[
                "Payment gateway providers",
                "Government authorities (if required by law)",
                "Service providers helping us operate our business",
              ]}
            />
          </Section>

          <Section title="Cookies Policy">
            <p>
              Our website uses cookies to enhance user experience. Cookies help us:
            </p>

            <List
              items={[
                "Understand user behavior",
                "Improve website performance",
                "Remember user preferences",
              ]}
            />
          </Section>

            <Section title="Data Security">
            <p>
              We implement appropriate security measures to protect your personal
              information from unauthorized access, misuse, or disclosure.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>

            <List
              items={[
                "Access your personal data",
                "Request correction of incorrect data",
                "Request deletion of your data (subject to legal requirements)",
              ]}
            />
          </Section>

          <Section title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices or content.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated effective date.
            </p>
          </Section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-600 mb-3">
              If you have any questions, please contact us:
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>📧 Email: [Your Email]</li>
              <li>📞 Phone: [Your Phone Number]</li>
              <li>📍 Address: [Hotel Address]</li>
            </ul>
          </section>

        </div>
      </div>
    </>
  );
}