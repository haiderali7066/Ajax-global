import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About AJAX Global | Our Story & Mission",
  description:
    "Learn about AJAX Global's journey combining human excellence with AI intelligence. Serving 500+ enterprise clients across 15+ countries.",
  keywords: [
    "about AJAX Global",
    "company mission",
    "outsourcing solutions",
    "operational intelligence",
  ],
  openGraph: {
    title: "About AJAX Global | Our Story & Mission",
    description:
      "Transforming business operations through human excellence and AI intelligence since 2018.",
    type: "website",
  },
};

const milestones = [
  {
    year: "2018",
    event:
      "AJAX Global founded with a vision to combine human excellence with AI intelligence",
  },
  {
    year: "2020",
    event: "Expanded to 5 countries, serving 100+ enterprise clients",
  },
  {
    year: "2022",
    event:
      "Launched IntelliDesq™ - Revolutionary operational intelligence platform",
  },
  {
    year: "2024",
    event: "Reached unicorn status with $1B+ in managed operations",
  },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "Our foundation is built on empowering talented individuals and fostering excellence.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we do, every single day.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "We serve businesses worldwide, supporting growth and transformation across industries.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="About AJAX Global"
        description="How we're transforming business operations through the perfect blend of human talent and AI intelligence"
      />

      {/* Our Story */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-slide-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-normal text-lg">
                <p>
                  AJAX Global was founded on a simple belief: businesses need
                  more than just automation or outsourcing. They need
                  intelligence combined with human excellence.
                </p>
                <p>
                  We saw companies struggling to scale because they lacked
                  either the right people or the insights to optimize their
                  operations. So we built both—elite human teams paired with
                  IntelliDesq™, our AI-powered intelligence platform.
                </p>
                <p>
                  Today, we partner with leading enterprises across sales,
                  customer support, business operations, and back office to
                  deliver transformative results. Our teams don't just execute
                  tasks; they drive strategic outcomes.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 p-12 animate-scroll-scale hover:shadow-xl transition-all duration-500 group">
              <div className="absolute inset-0 animate-shimmer" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:blur-2xl transition-all duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Countries", value: "15+" },
                    { label: "Enterprise Clients", value: "500+" },
                    { label: "Team Members", value: "2,000+" },
                    { label: "Operations Managed", value: "$1B+" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-secondary p-6 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default animate-loop-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="text-3xl font-bold text-primary group-hover:animate-text-shimmer">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
              Key milestones that shaped AJAX Global
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 sm:gap-12 animate-scroll-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg group-hover:scale-125 group-hover:animate-loop-glow transition-all duration-300 shadow-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-4 group-hover:from-primary group-hover:to-accent transition-all duration-300" />
                  )}
                </div>
                <div className="pt-2 pb-8 group-hover:translate-x-3 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {milestone.year}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl font-normal group-hover:text-foreground/90 transition-colors duration-300">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-scroll-rotate"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-6 group-hover:animate-loop-bounce">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-normal text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-loop-bounce" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-loop-slide" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground animate-scroll-fade-in">
            Ready to Transform Your Operations?
          </h2>
          <p
            className="text-lg text-muted-foreground font-normal animate-scroll-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Join hundreds of enterprise teams already scaling with AJAX Global
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:scale-110 group animate-loop-glow"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
