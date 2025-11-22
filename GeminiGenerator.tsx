import React, { useState } from 'react';
import { Sparkles, ArrowRight, Copy, Check } from 'lucide-react';
import { generateEnhancedPrompt } from './geminiService';

const GeminiGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const enhanced = await generateEnhancedPrompt(input);
    setResult(enhanced);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-surface border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-accent/20 rounded-lg">
            <Sparkles className="text-accent" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AI Prompt Geliştirici</h2>
            <p className="text-sm text-gray-400">Gemini 2.5 Flash ile güçlendirilmiştir</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">FİKRİNİZ</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Örn: Tokyo yağmurunda fütüristik bir araba"
                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button
                onClick={handleGenerate}
                disabled={loading || !input}
                className="bg-white text-black px-4 py-3 rounded-xl font-bold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <ArrowRight size={20} />
                )}
              </button>
            </div>
          </div>

          {result && (
            <div className="animate-fade-in mt-6">
              <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">GELİŞTİRİLMİŞ PROMPT</label>
              <div className="bg-black/30 rounded-xl border border-white/10 p-4 relative group">
                <p className="text-sm text-gray-300 font-mono leading-relaxed pr-8">
                  {result}
                </p>
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  title="Panoya kopyala"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiGenerator;