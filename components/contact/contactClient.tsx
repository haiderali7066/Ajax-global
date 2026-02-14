"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@ajaxglobal.com",
    description: "We typically respond within 2 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Available Monday-Friday, 9AM-6PM EST",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "San Francisco, USA",
    description: "With offices in 15+ countries",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", company: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Contact Methods */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center"
                >
                  <div className="inline-flex p-4 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-normal">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full px-4 py-3 rounded-lg border border-gray-200"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 resize-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="w-4 h-4" />}
              </Button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
                  Thank you! We've received your message.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
