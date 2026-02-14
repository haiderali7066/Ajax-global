'use client'

import Link from 'next/link'

export default function WhatsAppButton() {
  const phoneNumber = '+1234567890'
  const message = "Hi! I'd like to learn more about AJAX Global's solutions."
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-8 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contact via WhatsApp"
      title="Contact via WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.946 0-3.754.75-5.119 2.104-1.366 1.355-2.119 3.154-2.119 5.104 0 1.954.751 3.75 2.118 5.103 1.366 1.353 3.173 2.105 5.121 2.105h.004c1.947 0 3.755-.75 5.119-2.104 1.366-1.356 2.119-3.155 2.119-5.105 0-1.953-.751-3.75-2.118-5.103-1.366-1.353-3.172-2.105-5.121-2.105m5.121-9.375C6.59 0 .556 6.027.556 13.272 0 15.66.646 17.986 1.844 20.001L.369 23.555l3.753-1.477c1.946 1.092 4.158 1.695 6.465 1.695 7.034 0 13.033-6.027 13.033-13.278S20.155 0 13.122 0" />
      </svg>
    </Link>
  )
}
