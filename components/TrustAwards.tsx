'use client'

export default function TrustAwards() {
  const awards = [
    {
      title: 'Gartner',
      description: 'The only Leader in 3 Work Management Gartner® Magic Quadrant™ reports.',
      color: 'bg-blue-300',
      textColor: 'text-blue-900',
    },
    {
      title: 'G2 Enterprise Grid Leader',
      description: 'Leader in the G2 Enterprise Grid® Report Spring 2025',
      color: 'bg-yellow-400',
      textColor: 'text-yellow-900',
      badge: 'Spring 2025',
    },
    {
      title: 'Forrester',
      description: 'Motorola achieved 346% ROI according to Forrester\'s Total Economic Impact™ research.',
      color: 'bg-emerald-400',
      textColor: 'text-emerald-900',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            A leader you can trust
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`${award.color} rounded-3xl p-8 sm:p-10 min-h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="space-y-4">
                <h3 className={`text-2xl sm:text-3xl font-bold ${award.textColor}`}>
                  {award.title}
                </h3>
                <p className={`${award.textColor} text-lg font-normal leading-relaxed`}>
                  {award.description}
                </p>
              </div>
              <button className={`${award.textColor} font-semibold text-sm hover:underline transition-colors duration-300`}>
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
