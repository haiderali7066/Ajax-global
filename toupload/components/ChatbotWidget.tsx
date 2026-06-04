'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([
    { type: 'bot', text: 'Hello! 👋 How can AJAX Global help you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { type: 'user', text: input }])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        'Great question! I can help you with information about our services.',
        'Would you like to learn more about IntelliDesq™ or our Human Outsourcing Solutions?',
        'Feel free to book a demo or contact our team directly!',
        "I'm here to answer any questions about AJAX Global.",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { type: 'bot', text: randomResponse }])
    }, 500)
  }

  return (
    <>
      {/* Chat Widget */}
      <div
        className={`fixed bottom-20 right-6 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <div className="w-96 max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col h-96 sm:h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 sm:p-6 text-white">
            <h3 className="font-bold text-lg">AJAX Global Support</h3>
            <p className="text-sm text-white/80">We typically reply in minutes</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-secondary text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <Button
                size="sm"
                className="bg-primary hover:bg-accent text-white rounded-lg transition-colors"
                onClick={handleSend}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Open chat"
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              {/* Pulse indicator */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-pulse" />
            </>
          )}
        </div>
      </button>
    </>
  )
}
