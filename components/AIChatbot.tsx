
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Volume2, VolumeX } from 'lucide-react';
import { getChatbotResponse } from '../geminiService.ts';

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Welcome! I'm Godwin's digital twin. I can discuss my 10+ years in Azure, ML Engineering, and Full Stack development. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [mute, setMute] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const speak = (text: string) => {
    if (mute) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: m.text }]
      }));

      const response = await getChatbotResponse(userMsg, history);
      const botResponseText = response || "I'm sorry, I couldn't process that.";
      
      setMessages(prev => [...prev, { role: 'bot', text: botResponseText }]);
      speak(botResponseText);
    } catch (err: any) {
      console.error("Gemini Chat Error:", err);
      let errorMsg = "Unable to connect. Please enable AI features via the key dialog.";
      setMessages(prev => [...prev, { role: 'bot', text: errorMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Tell me about Godwin's Azure experience",
    "What ML projects has he built?",
    "Is he available for remote work?",
    "Tell me about his time at TEK Experts"
  ];

  return (
    <div className="flex flex-col h-[480px]">
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                <Bot size={16} className="text-primary-600" />
              </div>
            )}
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary-600 text-white rounded-tr-none shadow-lg' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-none border border-slate-200 dark:border-slate-700'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-primary-600 animate-pulse" />
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex items-center">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {suggestions.map(s => (
          <button 
            key={s}
            onClick={() => { setInput(s); }}
            className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary-400 hover:text-primary-600 transition-all"
          >
            {s}
          </button>
        ))}
      </div>
      
      <div className="flex gap-2 relative">
        <button 
          onClick={() => setMute(!mute)}
          className="absolute right-[60px] top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-600 transition-colors"
          title={mute ? "Unmute Voice" : "Mute Voice"}
        >
          {mute ? <VolumeX size={18} /> : <Volume2 size={18} className={isSpeaking ? "animate-pulse text-primary-600" : ""} />}
        </button>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me anything..."
          className="flex-grow p-4 pr-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm dark:text-white transition-all"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="p-4 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 disabled:opacity-50 transition-all shadow-xl hover:shadow-primary-500/20"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
