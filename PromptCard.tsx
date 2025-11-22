import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { PromptItem } from './types';

interface PromptCardProps {
  item: PromptItem;
}

const PromptCard: React.FC<PromptCardProps> = ({ item }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  // Kartın açık mı kapalı mı olduğunu takip eden durum
  const [isExpanded, setIsExpanded] = useState(false);

  // Başlangıçta kaç tane prompt gösterileceği
  const INITIAL_VISIBLE_COUNT = 2;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const isLink = (text: string) => {
    return text.trim().startsWith('http');
  };

  // Eğer genişletildiyse hepsi, değilse sadece ilk 2 tanesi
  const visiblePrompts = isExpanded ? item.prompts : item.prompts.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = item.prompts.length - INITIAL_VISIBLE_COUNT;
  const hasMore = item.prompts.length > INITIAL_VISIBLE_COUNT;

  return (
    <div className={`group bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-xl flex flex-col ${isExpanded ? 'row-span-2' : ''}`}>
      {/* Görsel Alanı (Dikey) */}
      <div className="relative aspect-[2/3] overflow-hidden flex-shrink-0">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 p-3 w-full">
          <h3 className="font-bold text-white text-sm md:text-base leading-tight mb-1 drop-shadow-lg">
            {item.title}
          </h3>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
            {item.prompts.length} Prompt İçerir
          </p>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="p-3 flex flex-col gap-2 flex-grow">
        {visiblePrompts.map((prompt, index) => (
          <div key={index} className="bg-black/40 rounded-lg p-2 border border-white/5 hover:border-white/10 transition-colors animate-fade-in">
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
              <p className={`text-xs text-gray-300 line-clamp-3 font-mono ${isLink(prompt) ? 'text-blue-400 underline decoration-blue-400/30' : ''}`}>
                {isLink(prompt) ? (
                  <a href={prompt} target="_blank" rel="noopener noreferrer">{prompt}</a>
                ) : (
                  prompt
                )}
              </p>
            </div>
          </div>
        ))}

        {/* Genişlet / Daralt Butonu */}
        {hasMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 w-full py-2 flex items-center justify-center gap-1 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all border border-transparent hover:border-white/10"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={14} />
                Daha Az Göster
              </>
            ) : (
              <>
                <ChevronDown size={14} />
                Tümünü Göster (+{hiddenCount})
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
