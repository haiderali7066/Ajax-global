import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import HOSPage from "@/components/HOS/HOSPage";

export const metadata: Metadata = {
  title: "Human Outsourcing Solutions (HOS) | AJAX Global",
  description:
    "Elite human outsourcing teams trained to your standards. Scale operations with dedicated professionals and AI-assisted workflows from AJAX Global.",
  keywords: [
    "human outsourcing",
    "HOS",
    "business operations",
    "dedicated teams",
    "outsourcing solutions",
    "BPO",
  ],
  openGraph: {
    title: "Human Outsourcing Solutions | AJAX Global",
    description:
      "High-performance teams engineered for your success with AI-assisted intelligence.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HOSPage />
      <Footer />
      <ChatbotWidget />
      <WhatsAppButton />
    </main>
  );
}
