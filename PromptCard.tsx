import React, { useState } from 'react';
import { Copy, Check, Layers } from 'lucide-react';
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

  return (
    <div className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col h-full">
      {/* Image Section - 4:3 Aspect Ratio */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900 relative">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700">
            <Layers size={32} />
          </div>
        )}
        
        {/* Overlay Title on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent pt-8">
          <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-accent transition-colors">{item.title}</h3>
        </div>
      </div>

      {/* Content Section - Tags removed */}
      <div className="p-3 flex-1 flex flex-col gap-2">
        <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
          {item.prompts.map((promptText, idx) => (
            <div key={idx} className="relative bg-black/40 p-2 rounded-lg border border-white/5 group/prompt">
              <div className="flex justify-between items-start gap-2 mb-1">
                 <span className="text-[10px] font-bold text-accent/70 uppercase tracking-wider">
                   Prompt {idx + 1}
                 </span>
                 <button 
                  onClick={() => handleCopy(promptText, idx)}
                  className={`p-1 rounded-md transition-all duration-200 ${
                    copiedIndex === idx
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/20 hover:text-white'
                  }`}
                  title="Kopyala"
                >
                  {copiedIndex === idx ? <Check size={12} /> : <Copy size={12} />}
                </button>
              </div>
              <p className="text-[10px] text-gray-400 font-mono leading-relaxed line-clamp-3 hover:line-clamp-none transition-all cursor-default">
                {promptText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptCard;