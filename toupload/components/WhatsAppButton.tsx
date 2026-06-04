"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // remove +, spaces, dashes
  const message = "Hi! I'd like to learn more about AJAX Global's solutions.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 left-8 z-50 flex items-center justify-center 
                 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] 
                 rounded-full shadow-lg hover:shadow-xl 
                 transition-all duration-300 hover:scale-110"
    >
      {/* Official WhatsApp Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16 .395C7.164.395 0 7.559 0 16.395c0 2.894.756 5.724 2.191 8.21L.064 32l7.57-2.095a15.94 15.94 0 008.366 2.345h.007c8.835 0 16-7.164 16-16S24.842.395 16 .395zm0 29.455h-.006a13.4 13.4 0 01-6.82-1.873l-.49-.29-4.49 1.242 1.2-4.377-.319-.506a13.33 13.33 0 01-2.047-7.15c0-7.37 5.995-13.365 13.373-13.365 7.372 0 13.367 5.995 13.367 13.366 0 7.37-5.995 13.365-13.368 13.365zm7.44-10.054c-.407-.203-2.41-1.188-2.783-1.323-.374-.135-.646-.203-.918.203-.271.406-1.053 1.323-1.29 1.594-.237.271-.474.305-.88.102-.407-.203-1.718-.633-3.273-2.018-1.21-1.08-2.026-2.414-2.263-2.82-.237-.407-.025-.627.178-.83.182-.181.407-.474.61-.712.203-.237.271-.406.407-.677.135-.271.068-.508-.034-.712-.102-.203-.918-2.214-1.256-3.033-.33-.79-.666-.682-.918-.695l-.78-.014c-.271 0-.712.102-1.085.508-.374.406-1.425 1.392-1.425 3.39 0 1.998 1.458 3.928 1.661 4.199.203.271 2.87 4.383 6.95 6.147.971.419 1.728.669 2.318.856.973.31 1.859.266 2.56.162.781-.116 2.41-.985 2.75-1.937.34-.952.34-1.767.237-1.937-.102-.169-.374-.271-.78-.474z" />
      </svg>
    </Link>
  );
}
