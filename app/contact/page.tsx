'use client'

import React from "react"
import type { Metadata } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Contact AJAX Global | Get in Touch',
  description: 'Contact AJAX Global for human outsourcing solutions, operational intelligence, and business transformation. Reach out for a consultation.',
  keywords: ['contact', 'support', 'consulting', 'inquiry'],
  openGraph: {
    title: 'Contact AJAX Global',
    description: 'Have questions? Our team is ready to help. Schedule a consultation today.',
    type: 'website',
  },
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@ajaxglobal.com',
    description: 'We typically respond within 2 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Available Monday-Friday, 9AM-6PM EST',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    value: 'San Francisco, USA',
    description: 'With offices in 15+ countries',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
    setFormData({ name: '', email: '', company: '', message: '' })

    // Reset message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Get in Touch"
        description="Have questions? Our team is ready to help. Reach out today and let's explore how we can transform your operations."
      />

      {/* Contact Methods */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="group rounded-2xl p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center animate-stagger-in-1"
                >
                  <div className="inline-flex p-4 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{method.value}</p>
                  <p className="text-sm text-muted-foreground font-normal">{method.description}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground font-normal">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/20"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your needs..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none hover:border-primary/20"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-accent text-white rounded-lg py-3 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send className="w-4 h-4" />}
                </Button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 animate-fade-in">
                    Thank you! We've received your message and will get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-8 sm:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
                    <ul className="space-y-3">
                      {[
                        'Initial consultation call (15-30 min)',
                        'Discovery of your operational needs',
                        'Custom proposal within 48 hours',
                        'Implementation planning',
                        'Dedicated support throughout',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border/30">
                    <h4 className="font-bold text-foreground mb-3">Quick Response Times</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-semibold text-primary">2 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Chat:</span>
                        <span className="font-semibold text-primary">15 minutes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-semibold text-primary">Immediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="rounded-xl bg-card border border-border p-6 text-center space-y-4">
                <h4 className="font-bold text-foreground">Prefer a Quick Chat?</h4>
                <p className="text-sm text-muted-foreground">
                  Use the chat widget in the bottom right to connect with our team instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does implementation typically take?',
                a: 'Most implementations take 2-4 weeks depending on complexity. We work closely with you to ensure a smooth transition.',
              },
              {
                q: 'Can I start with a small team and scale up?',
                a: 'Absolutely! Our model is designed to scale from 1 to 1000+ team members based on your needs.',
              },
              {
                q: 'What industries do you serve?',
                a: 'We serve diverse industries including SaaS, fintech, e-commerce, healthcare, and more.',
              },
              {
                q: 'Do you offer 24/7 support?',
                a: 'Yes, our teams can provide round-the-clock coverage across all time zones.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <summary className="p-6 font-semibold text-foreground flex items-center justify-between select-none hover:text-primary transition-colors duration-300">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground border-t border-border/30">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
