/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { createChatSession } from '../lib/gemini';
import { cn } from '../lib/utils';
import { PERSONAL_INFO } from '../constants/portfolio';
import { Badge } from './ui';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm ${PERSONAL_INFO.name}'s virtual assistant. Ask me anything about my projects, technical stack, or professional journey. How can I assist you today?` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  
  const suggestions = [
    "Tell me about your tech stack",
    "What's your best project?",
    "How can I work with you?",
    "Experience with LinkWise AI",
    "Mobile app development expertise"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => {
      handleSend(suggestion);
    }, 100);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
      if (!chatSession) initChat();
    }
  }, [isOpen]);

  const initChat = async () => {
    try {
      const session = await createChatSession();
      setChatSession(session);
    } catch (error) {
      console.error("Chat initialization failed", error);
    }
  };

  const handleSend = async (text?: string) => {
    const messageToSend = text || inputValue;
    if (!messageToSend.trim() || isLoading || !chatSession) return;

    const userMessage = messageToSend.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    if (!text) setInputValue('');
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: userMessage });
      const botResponse = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm experiencing high latency right now. Please try again or ping me directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-20 bottom-2 px-4 py-2 bg-white dark:bg-neutral-900 glass-card border-indigo-500/30 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 whitespace-nowrap shadow-2xl"
            >
              Ask me anything!
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(99,102,241,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {isOpen ? <X size={28} className="relative z-10" /> : <MessageSquare size={28} className="relative z-10 group-hover:text-white" />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-28 right-8 z-[100] w-[calc(100%-4rem)] sm:w-[420px] h-[600px] glass overflow-hidden rounded-[2.5rem] flex flex-col shadow-3xl border-transparent"
          >
            {/* Header */}
            <div className="p-8 pb-6 bg-neutral-900 dark:bg-neutral-950 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center relative">
                  <Bot size={28} className="text-indigo-500" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-neutral-900" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight">Virtual Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Ayub System v2.0</span>
                    <Badge variant="indigo" className="text-[8px] px-1.5 py-0 italic">AI Powered</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-neutral-50 dark:bg-neutral-900/40">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex flex-col max-w-[90%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 px-6 rounded-3xl text-sm font-semibold leading-relaxed shadow-sm",
                    msg.role === 'user' 
                      ? "bg-indigo-600 text-white rounded-tr-none" 
                      : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 rounded-tl-none border border-neutral-200 dark:border-white/5"
                  )}>
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-2 px-2">
                    {msg.role === 'user' ? 'You' : 'Ayub'}
                  </span>
                </motion.div>
              ))}
              
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-2 mt-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-2">Quick Commands</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs font-bold px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-sm"
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Processing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-8 pt-0 bg-neutral-50 dark:bg-neutral-900/40">
              <form 
                className="flex gap-3 p-2 bg-white dark:bg-neutral-800 rounded-2xl border-2 border-transparent focus-within:border-indigo-500/50 shadow-2xl transition-all" 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Inquire with Ayub..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-900 dark:text-white focus:outline-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50 shadow-lg shadow-indigo-600/20"
                >
                  <Send size={18} />
                </motion.button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                <p className="text-[9px] text-neutral-400 font-black uppercase tracking-[0.3em]">
                  Encrypted Neural Link Active
                </p>
                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
