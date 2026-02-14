'use client'

import { Users, PhoneIcon, UserCheck, ShoppingCart, Home, Lock, TrendingUp, Zap } from 'lucide-react'

const roles = [
  {
    icon: PhoneIcon,
    title: 'Customer Support',
    description: 'Trusted support agents trained for your brand voice',
  },
  {
    icon: TrendingUp,
    title: 'Sales & Lead Generation',
    description: 'High-converting sales teams and qualified lead generators',
  },
  {
    icon: UserCheck,
    title: 'Virtual & Admin Assistants',
    description: 'Executive support and administrative excellence',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Management',
    description: 'Operations teams for seamless online commerce',
  },
  {
    icon: Home,
    title: 'Property Management Support',
    description: 'Full-service property operations and tenant support',
  },
  {
    icon: Lock,
    title: 'IT Support & Cybersecurity',
    description: 'Technical teams and security-focused operations',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Social Media Marketing',
    description: 'Digital marketing teams to amplify your presence',
  },
  {
    icon: Zap,
    title: 'Custom Remote Teams',
    description: 'Tailored teams designed for your unique needs',
  },
]

export default function RolesWeProvide() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground">
            Roles We Provide
          </h2>
          <p className="text-lg text-muted-foreground font-normal">
            From specialized roles to custom teams, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => {
            const Icon = role.icon
            return (
              <div
                key={i}
                className="group rounded-2xl p-6 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-stagger-in-1"
              >
                <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-4">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-normal">
                  {role.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
