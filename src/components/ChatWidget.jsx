import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// Predefined FAQs for quick matching without external calls
const FAQ = [
  {
    q: 'What documents can you notarize?',
    a: 'We can notarize most standard legal, real estate, and business documents. Please call for any special requests.',
  },
  { q: 'Do you offer mobile notary service?', a: 'Yes! We provide mobile notary services throughout the Greater Philadelphia area.' },
  {
    q: 'Are you available after hours or for emergencies?',
    a: 'Absolutely—after hours and emergency service are available. Text or call for details.',
  },
];

// Basic keyword matching to find an answer
const findAnswer = (question) => {
  const normalized = question.toLowerCase();
  return FAQ.find(({ q }) => normalized.includes(q.toLowerCase()));
};

// TODO(phase-2): Replace findAnswer logic with OpenAI API call for dynamic responses.

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // { from: 'user' | 'bot', text: string }
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Focus input when chat opens for accessibility
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Scroll to latest message when messages update
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.elements.question.value.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    form.reset();

    const match = findAnswer(text);
    const answer = match ? match.a : 'Great question! Please call or text for a personalized answer.';
    setMessages((m) => [...m, { from: 'bot', text: answer }]);
  };

  // Allow ESC key to close the chat window
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            onClick={() => setOpen(true)}
            className="fixed bottom-4 right-4 rounded-full bg-deepgray px-4 py-2 text-white shadow-lg transition-colors hover:bg-charcoal focus:outline-none focus:ring focus:ring-platinum"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Ask a Notary
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            role="dialog"
            aria-label="Ask a Notary"
            className="fixed bottom-4 right-4 flex h-80 w-72 flex-col overflow-hidden rounded border border-platinum bg-black text-platinum shadow-lg sm:h-96 sm:w-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-deepgray px-3 py-2">
              <span className="font-medium text-white">Ask a Notary</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white hover:text-silver focus:outline-none"
              >
                ✕
              </button>
            </div>
            <div
              ref={listRef}
              className="flex-1 space-y-2 overflow-y-auto px-3 py-2 text-sm"
              aria-live="polite"
            >
              <p className="text-xs text-platinum">
                For legal advice or sensitive matters, please call or text directly.
              </p>
              {messages.map((msg, idx) => (
                <p
                  key={idx}
                  className={clsx('rounded px-2 py-1', {
                    'ml-auto bg-deepgray text-white': msg.from === 'user',
                    'mr-auto bg-charcoal text-platinum': msg.from === 'bot',
                  })}
                >
                  {msg.text}
                </p>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex gap-2 border-t border-platinum p-2">
              <label htmlFor="question" className="sr-only">
                Type your question
              </label>
              <input
                id="question"
                name="question"
                ref={inputRef}
                type="text"
                className="flex-1 rounded border border-platinum bg-deepgray px-2 py-1 text-white placeholder-platinum focus:border-silver focus:outline-none"
                placeholder="Ask a question..."
                autoComplete="off"
              />
              <button
                type="submit"
                className="rounded bg-deepgray px-3 text-white transition-colors hover:bg-charcoal focus:outline-none focus:ring focus:ring-platinum"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
