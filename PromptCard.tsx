import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { PromptItem } from './types';

interface PromptCardProps {
  item: PromptItem;
}

const PromptCard: React.FC<PromptCardProps> = ({ item }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // HTTP ile başlayanları link olarak algıla
  const isLink = (text: string) => {
    return text.trim().startsWith('http');
  };

  return (
    <div className="group bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
      {/* Image Section - DİKEY YAPILDI (aspect-[2/3]) */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 p-3 w-full">
          <h3 className="font-bold text-white text-sm md:text-base leading-tight mb-1 drop-shadow-lg">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="p-3 flex flex-col gap-2 flex-grow">
        {item.prompts.map((prompt, index) => (
          <div key={index} className="bg-black/40 rounded-lg p-2 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-accent tracking-wider uppercase">
                {isLink(prompt) ? 'BAĞLANTI' : `PROMPT ${index + 1}`}
              </span>
              
              {isLink(prompt) ? (
                <a 
                  href={prompt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  title="Siteye Git"
                >
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button
                  onClick={() => handleCopy(prompt, index)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  title="Kopyala"
                >
                  {copiedIndex === index ? (
                    <Check size={14} className="text-green-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              )}
            </div>
            
            <div className="relative">
              <p className={`text-xs text-gray-300 line-clamp-2 font-mono ${isLink(prompt) ? 'text-blue-400 underline decoration-blue-400/30' : ''}`}>
                {isLink(prompt) ? (
                  <a href={prompt} target="_blank" rel="noopener noreferrer">{prompt}</a>
                ) : (
                  prompt
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptCard;
