import { PromptItem, SocialLink } from './types';

export const APP_NAME = "fatihd.mov";
export const APP_DESCRIPTION = "Yapay Zeka, Video, Fotoğraf";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/fatihd.mov', icon: 'Instagram' },
  { platform: 'E-posta', url: 'mailto:iletisim@fatihd.mov', icon: 'Mail' },
];

// This acts as your "CMS". Add new prompts here to update the site.
export const PROMPT_LIBRARY: PromptItem[] = [
  {
    id: '1',
    title: 'Neon Cyberpunk Seti',
    date: '2024-05-10',
    tags: ['Cyberpunk', 'Portre', 'Neon'],
    prompts: [
      'Scene 1: Cinematic portrait of a cyborg woman with translucent skin, glowing neon circuitry underneath, raining neon city background, shot on 35mm, bokeh, shallow depth of field --ar 4:3 --v 6.0',
      'Scene 2: Close up macro shot of the mechanical eye, intricate details, blue and pink reflections --ar 4:3'
    ],
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Hiper-Gerçekçi Yemek',
    date: '2024-05-12',
    tags: ['Yemek', 'Gerçekçi', 'Makro'],
    prompts: [
      'Macro shot of a gourmet burger with melting cheddar cheese, glistening water droplets on lettuce, steam rising, professional studio lighting, 8k resolution, delicious texture --ar 4:3'
    ],
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Soyut Akışkan',
    date: '2024-05-15',
    tags: ['Soyut', 'Hareket', '3D'],
    prompts: [
      'Slow motion liquid gold mixing with black oil, swirling patterns, hypnotic movement, 60fps, 4k, ray tracing, glossy finish, cinematic lighting'
    ],
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'Minimalist Mimari',
    date: '2024-05-18',
    tags: ['Mimari', 'Minimal', 'Beyaz'],
    prompts: [
      'Minimalist white concrete structure in a desert, harsh sunlight, sharp shadows, blue sky, brutalism style, architectural photography angle --ar 4:3'
    ],
    imageUrl: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: '5',
    title: 'Retro Anime',
    date: '2024-05-20',
    tags: ['Anime', 'Retro', '90lar'],
    prompts: [
      '90s anime style screenshot, a girl sitting by a window in a spaceship looking at earth, lo-fi aesthetic, grainy VHS texture, muted colors --ar 4:3'
    ],
    imageUrl: 'https://picsum.photos/800/600?random=5'
  }
];