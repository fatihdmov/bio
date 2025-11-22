import React from 'react';
import { Home, Library, User, GraduationCap } from 'lucide-react';
import { Page } from './types';

interface NavbarProps {
  activePage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const navItems = [
    { id: Page.HOME, label: 'Anasayfa', icon: <Home size={20} /> },
    { id: Page.PROMPTS, label: 'Promptlar', icon: <Library size={20} /> },
    { id: Page.EDUCATION, label: 'Eğitim', icon: <GraduationCap size={20} /> },
    { id: Page.ABOUT, label: 'Hakkımda', icon: <User size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 h-16 flex items-center justify-between px-4 md:px-8">
      <div 
        className="text-xl font-bold tracking-tighter text-white cursor-pointer hover:text-accent transition-colors" 
        onClick={() => setPage(Page.HOME)}
      >
        fatihd.mov
      </div>
      
      <div className="flex items-center gap-2 md:gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              activePage === item.id 
                ? 'bg-white/10 text-white' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
            }`}
            title={item.label}
          >
            {item.icon}
            <span className="hidden md:block text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;