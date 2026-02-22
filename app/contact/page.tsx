import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
// import ContactClient from "@/components/Contact/ContactPage";
import ContactClient from "@/components/Contact/contactClient";

export const metadata: Metadata = {
  title: "Contact AJAX Global | Get in Touch",
  description:
    "Contact AJAX Global for human outsourcing solutions, operational intelligence, and business transformation. Reach out for a consultation.",
  keywords: ["contact", "support", "consulting", "inquiry"],
  openGraph: {
    title: "Contact AJAX Global",
    description:
      "Have questions? Our team is ready to help. Schedule a consultation today.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Get in Touch"
        description="Have questions? Our team is ready to help. Reach out today and let's explore how we can transform your operations."
      />

      <ContactClient />

      <Footer  />
    </main>
  );
}
