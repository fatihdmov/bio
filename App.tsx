import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import PromptCard from './PromptCard';
import { Page } from './types';
import { APP_NAME, PROMPT_LIBRARY, SOCIAL_LINKS, APP_DESCRIPTION } from './constants';
import { Instagram, Mail, Globe, ArrowRight, Library, User, GraduationCap, Clock, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  // Sayfa her değiştiğinde en tepeye kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Dinamik ikon seçimi
  const getIcon = (name: string) => {
    switch (name) {
      case 'Instagram': return <Instagram size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Globe size={20} />;
    }
  };

  // Ortak Geri Dön Butonu Bileşeni
  const BackButton = () => (
    <button 
      onClick={() => setActivePage(Page.HOME)}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
    >
      <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
        <ArrowLeft size={20} />
      </div>
      <span className="font-medium">Ana Sayfaya Dön</span>
    </button>
  );

  const renderHome = () => (
    <div className="flex flex-col items-center min-h-[80vh] px-4 pt-8 animate-fade-in w-full max-w-md mx-auto">
      {/* Profil Bölümü - LİNK GÜNCELLENDİ */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-6 group hover:border-accent transition-colors duration-500">
        <img 
          src="https://res.cloudinary.com/ddfp55a2s/image/upload/v1763847243/kare_kopya_xrewup.png" 
          alt="Profil" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-white bg-clip-text bg-gradient-to-b from-white to-gray-400 text-transparent">
          {APP_NAME}
        </h1>
        <p className="text-gray-400 text-base font-light leading-relaxed max-w-xs mx-auto">
          {APP_DESCRIPTION}
        </p>
      </div>

      {/* Sosyal Linkler */}
      <div className="flex justify-center gap-4 mb-12 w-full">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            className="flex-1 flex justify-center items-center space-x-2 px-4 py-3 bg-surface border border-white/10 rounded-xl transition-all hover:bg-white/10 hover:scale-[1.02] hover:border-accent/30 text-sm font-medium group"
          >
            <span className="group-hover:text-accent transition-colors">{getIcon(link.icon)}</span>
            <span>{link.platform}</span>
          </a>
        ))}
      </div>

      {/* Ana Navigasyon Butonları */}
      <div className="w-full space-y-4">
        <button
          onClick={() => setActivePage(Page.PROMPTS)}
          className="w-full bg-surface hover:bg-white/5 border border-white/10 hover:border-accent/40 p-4 rounded-2xl flex items-center justify-between group transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-white group-hover:text-accent group-hover:bg-accent/10 transition-colors">
               <Library size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">Prompt Kütüphanesi</h3>
              <p className="text-xs text-gray-400">Koleksiyonumu incele</p>
            </div>
          </div>
          <div className="text-gray-600 group-hover:text-accent transition-colors transform group-hover:translate-x-1">
            <ArrowRight size={20} />
          </div>
        </button>

        <button
          onClick={() => setActivePage(Page.EDUCATION)}
          className="w-full bg-surface hover:bg-white/5 border border-white/10 hover:border-accent/40 p-4 rounded-2xl flex items-center justify-between group transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-white group-hover:text-accent group-hover:bg-accent/10 transition-colors">
               <GraduationCap size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">Eğitim</h3>
              <p className="text-xs text-gray-400">Çok yakında...</p>
            </div>
          </div>
          <div className="text-gray-600 group-hover:text-accent transition-colors transform group-hover:translate-x-1">
            <ArrowRight size={20} />
          </div>
        </button>

        <button
          onClick={() => setActivePage(Page.ABOUT)}
          className="w-full bg-surface hover:bg-white/5 border border-white/10 hover:border-accent/40 p-4 rounded-2xl flex items-center justify-between group transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-white group-hover:text-accent group-hover:bg-accent/10 transition-colors">
               <User size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">Hakkımda</h3>
              <p className="text-xs text-gray-400">Hikayem & iletişim</p>
            </div>
          </div>
          <div className="text-gray-600 group-hover:text-accent transition-colors transform group-hover:translate-x-1">
            <ArrowRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );

  const renderPrompts = () => {
    return (
      <div className="max-w-7xl mx-auto pt-6 pb-24 px-2 md:px-4 animate-slide-up">
        <div className="px-2">
          <BackButton />
        </div>
        <div className="flex flex-col mb-6 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Prompt Kütüphanesi</h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1">Instagram Reels videolarımda kullandığım tüm promptlar.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PROMPT_LIBRARY.map(item => (
            <PromptCard key={item.id} item={item} />
          ))}
        </div>

        {PROMPT_LIBRARY.length === 0 && (
            <div className="text-center py-20 text-gray-600">
                Henüz prompt bulunmuyor.
            </div>
        )}
      </div>
    );
  };

  const renderEducation = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-slide-up text-center">
      <div className="w-full max-w-md flex justify-start px-4 mb-8">
        <BackButton />
      </div>
      
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-accent/10 rounded-full blur-xl"></div>
        <div className="relative p-8 bg-surface rounded-full border border-white/10 shadow-2xl">
          <GraduationCap size={64} className="text-accent" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-4">Eğitim Serisi</h2>
      <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
        Yapay zeka ile profesyonel video ve fotoğraf üretim tekniklerini anlattığım kapsamlı eğitim seti hazırlanıyor.
      </p>

      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-accent text-sm font-medium">
        <Clock size={16} />
        <span>Çok Yakında</span>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-2xl mx-auto pt-12 pb-24 px-4 animate-slide-up">
      <BackButton />
      <h2 className="text-3xl font-bold mb-8 border-l-4 border-accent pl-4 text-white">Hakkımda</h2>
      <div className="prose prose-invert prose-lg text-gray-300">
        <p className="mb-6">
          Merhaba, ben <strong>Fatih</strong>. Yapay Zeka ve görsel hikaye anlatıcılığının kesişim noktasında içerikler üreten bir dijital sanatçıyım.
        </p>
        <p className="mb-6">
          Yolculuğum geleneksel fotoğrafçılıkla başladı, ancak üretken yapay zekanın gelişi yaratıcılıkta yeni bir boyut açtı. Midjourney, Runway Gen-2 ve Stable Diffusion gibi araçları kullanarak sinematik kareler, hareketli video varlıkları ve sürreal ortamlar yaratma konusunda uzmanlaşıyorum.
        </p>
        <p className="mb-6">
          Bu web sitesi topluluğum için bir merkez niteliğinde. Burada Instagram reels videolarımda kullandığım promptları bulabilir, iş akışım hakkında bilgi edinebilir ve yakında yayınlayacağım eğitim setlerine ulaşabilirsiniz.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="text-xl font-bold mb-4 text-white">İletişim</h3>
        <p className="text-gray-400 mb-4">İş birlikleri, marka anlaşmaları veya sadece merhaba demek için:</p>
        <a href="mailto:iletisim@fatihd.mov" className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors">
          <Mail size={18} />
          <span>iletisim@fatihd.mov</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent selection:text-black pt-16">
      <Navbar activePage={activePage} setPage={setActivePage} />
      
      <main>
        {activePage === Page.HOME && renderHome()}
        {activePage === Page.PROMPTS && renderPrompts()}
        {activePage === Page.EDUCATION && renderEducation()}
        {activePage === Page.ABOUT && renderAbout()}
      </main>

      {/* Desktop Footer */}
      <footer className="text-center py-8 text-gray-600 text-xs border-t border-white/5 mt-12">
        <p>&copy; {new Date().getFullYear()} fatihd.mov. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default App;
