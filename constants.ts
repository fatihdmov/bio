import { SocialLink } from './types';

export const APP_NAME = "fatihd.mov";
export const APP_DESCRIPTION = "Yapay Zeka, Video, Fotoğraf";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/fatihd.mov', icon: 'Instagram' },
  { platform: 'E-posta', url: 'mailto:iletisim@fatihd.mov', icon: 'Mail' },
];

// BURADA TÜR ZORUNLULUĞUNU KALDIRDIK (PromptItem[] sildik)
// ARTIK HATA VERMEDEN YAYINLAMASI LAZIM
export const PROMPT_LIBRARY = [
  {
    id: '9',
    title: 'Gemini 1 Yıl Bedava (Öğrenci)',
    date: '2025-01-20',
    tags: ['Kampanya', 'Gemini', 'Link'],
    prompts: [
      `https://gemini.google/students/?utm_source=gemini&utm_medium=paid-media&utm_campaign=students_sem_bts-sem_generic__text&gclsrc=aw.ds&gad_source=1&gad_campaignid=23100804430&gbraid=0AAAAAC_C9PTSAA9wG9ENrj34sE2FkqmZZ&gclid=Cj0KCQjw9obIBhCAARIsAGHm1mQpqVHVNbK2LemcmdBG83C0W5Xhc_4XP8RSXbdPHCbXdYnMg8ep4XcaAsOVEALw_wcB`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845286/THUMBNALI_vf8jjh.jpg'
  },
  {
    id: '8',
    title: 'Gemini Prompt Arşivi',
    date: '2025-01-15',
    tags: ['Gemini', 'Arşiv', 'Link'],
    prompts: [
      `https://gemini-prompts.vercel.app/`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845279/15_xroeem.jpg'
  },
  {
    id: '7',
    title: 'Doğum Haritası Yorumcusu',
    date: '2024-12-10',
    tags: ['Astroloji', 'Fal', 'Hikaye'],
    prompts: [
      `You are an expert astrologer and a magical storyteller. You can analyze a full natal chart with complete accuracy and translate astrological symbolism into an imaginative, poetic, and fairy-tale-like story. I will provide you with a real natal chart, including Sun, Moon, Ascendant, all planetary positions, major aspects, and house placements. Your task is to analyze the chart **thoroughly and correctly like a professional astrologer** and then present the entire analysis as a **fairy-tale story in Turkish**. The analysis should cover all areas of life suggested by the chart: - Personality and soul traits - Career and life purpose - Love and relationships - Health and physical energy - Life journey, destiny, and potential challenges Your writing style should be **dreamy, emotional, symbolic, and cinematic**. Use mythological tones, nature imagery (stars, oceans, fire, wind, etc.), and deep emotional expression to turn the chart into a **personal legend, a magical fairy-tale story**. ⚠️ Important: - The story must be **astrologically accurate**. - Do not use modern or casual language; maintain a **magical, symbolic, and fairy-tale-like tone**. - Do not translate the chart literally; convey the astrological meanings **symbolically and truthfully*`
    ],
    // YENİ GÖRSEL LİNKİ BURAYA EKLENDİ:
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763848583/WhatsApp_Image_2025-11-23_at_00.56.05_z1dgl7.jpg'
  },
  {
    id: '6',
    title: 'Arabanı McQueen ile Yarıştır',
    date: '2024-11-25',
    tags: ['Video', 'Kling AI', 'Eğlence'],
    prompts: [
      `Gemini Prompt: Make my car look like it's racing with Lightning McQueen at over 80 km/h, realistic and at night, just like in the movie.`,
      `Kling AI Prompt: Turn this photo into a video of it racing at over 80 km/h, looking realistic, just like in the movie.`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845278/11_s2kmho.jpg'
  },
  {
    id: '5',
    title: 'Arabana Çarpmışlar Şakası',
    date: '2024-11-01',
    tags: ['Şaka', 'Photoshop', 'Troll'],
    prompts: [
      `Add a subtle, not exaggerated damage to the car in the photo. Make it very realistic. Do not change the license plate under any circumstances. The bumper and door should show damage.`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845278/8_xckyaj.jpg'
  },
  {
    id: '4',
    title: 'Fotoğrafını Sanat Eseri Yap',
    date: '2024-10-15',
    tags: ['Sanat', 'Müze', 'Portre'],
    prompts: [
      `KADIN İÇİN: Using the attached image as reference for the woman's face and appearance, create a highly realistic, cinematic, and photographic scene in a modern art gallery where she is standing slightly to the side or at a distance, seen from behind, looking at a large oil painting portrait of herself on the wall. The entire painting must be fully visible — she should not block, cover, or overlap any part of the artwork. The painting should depict the same woman in a realistic, expressive oil-painting style, showing her face and upper body with textured brush strokes and muted colors. The gallery wall is clean and white, with a soft, dramatic spotlight illuminating the artwork, creating a professional, cinematic exhibition atmosphere. Include realistic lighting, subtle shadows, depth of field, and natural reflections. Vertical composition, ultra-detailed, photorealistic.`,
      `ERKEK İÇİN: Using the attached image as reference for the man's face and appearance, create a highly realistic, cinematic, and photographic scene in a modern art gallery where he is standing slightly to the side or at a distance, seen from behind, looking at a large oil painting portrait of himself on the wall. The entire painting must be fully visible — he should not block, cover, or overlap any part of the artwork. The painting should depict the same man in a realistic, expressive oil-painting style, showing her face and upper body with textured brush strokes and muted colors. The gallery wall is clean and white, with a soft, dramatic spotlight illuminating the artwork, creating a professional, cinematic exhibition atmosphere. Include realistic lighting, subtle shadows, depth of field, and natural reflections. Vertical composition, ultra-detailed, photorealistic.`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845278/7_m6k1h1.jpg'
  },
  {
    id: '3',
    title: 'Evsiz Adam Şakası',
    date: '2024-09-20',
    tags: ['Şaka', 'Montaj', 'Eğlence'],
    prompts: [
      `Edit a homeless man on the couch and make it look as real as you can for a prank`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845278/6_opmfpi.jpg'
  },
  {
    id: '2',
    title: 'Gelin Damat Dış Çekim',
    date: '2024-09-05',
    tags: ['Düğün', 'Sinematik', 'Nostalji'],
    prompts: [
      `PROMPT 1: Create an image of the same man and woman from the reference, preserving their exact facial features without any changes. The scene captures a modern and stylish wedding concept, illuminated by natural daylight. The atmosphere is bright and clear, with minimal shadows to convey a luxurious feel.`,
      `PROMPT 2: Create an image of the same man and woman from the reference, keeping their exact facial features and expressions fully intact without any changes. The couple is sitting in a classic convertible car with burgundy leather seats. The groom wears a black suit, white shirt, and bow tie, with black sunglasses that add a charismatic touch to his elegant look. The bride wears a strapless white wedding gown with voluminous tulle details, paired with long white lace-up heeled sandals and retro white-framed sunglasses, creating a bold and modern style. The shot is taken from a slightly elevated diagonal angle, showing the bride in a stretched-out pose and the groom in a relaxed posture, resulting in a balanced composition that highlights them both. The atmosphere feels romantic, fashionable, and cinematic. Apply a bohemian effect that evokes the 1980s. Final aspect ratio: 9:18. Faces must not be altered or distorted in any way; their true facial features must remain unchanged.`,
      `PROMPT 3: Create a realistic photo of the same man and woman from the provided reference, keeping their exact facial features fully intact without any changes. The image should be vertical 9:18 format and framed in a medium shot, with the couple as the main focus. In one moment, the couple is posed on a motorcycle in an outdoor setting; the photo is in black and white, giving it a timeless and romantic atmosphere. The background shows blurred trees and buildings, keeping attention on the subjects. Natural daylight comes from the side and above, creating soft highlights and shadows on their faces, enhancing contrast and depth. The groom wears a black tuxedo jacket, black trousers, black bow tie, and white shirt, with a small white boutonnière on his lapel, a wristwatch on his wrist, and Ray-Ban square sunglasses. The bride wears an elegant white spaghetti-strap wedding dress with a long flowing veil, her wavy hair blowing in the wind, and retro white cat-eye sunglasses with black lenses`,
      `PROMPT 4: Create a modern and stylish wedding-themed image featuring the same woman and man from the provided photo, with their exact facial features and expressions preserved without any alterations. The couple is sitting in a classic convertible car with burgundy leather seats. The groom wears a black suit, white shirt, bow tie, and black sunglasses, projecting a sharp and charismatic look. The bride wears a strapless princess-style white wedding dress with voluminous tulle details, paired with long platform heels and white-framed retro sunglasses for a bold, fashionable style. The lighting is natural daylight, bright and clear, with minimal shadows to create a luxurious atmosphere. The shot is taken from a slightly elevated diagonal angle, capturing the bride in a stretched pose and the groom in a relaxed posture, forming a balanced composition that feels cinematic, romantic, and fashionable. Apply a bohemian effect that evokes the 1980s. Final image ratio: 9:18.`,
      `PROMPT 5: Make this image of people to look like a candid cinematic night photograph, shot on Kodak Portra 400 film, 35mm film style, capturing the mood of Wong Kar-wai films. A young couple eats noodles at a humble street food stall. The bride wears a modest white wedding dress, white gloves, with a long lace veil, leaning forward playfully slurping noodles with chopsticks, facing the camera. The groom wears a dark cardigan and white shirt, holding noodles and looking affectionately at the bride. They sit at a shiny metal table with bowls of noodles, sauces, and condiments. Behind them, shelves of drinks and a softly glowing colorful Vietnamese menu sign are visible. Lighting: ultra-strong direct on-camera flash like Polaroid photography, background darker due to flash, very subtle blue shadows, faint pink highlights, slightly warm skin tones, strong contrast, harsh glossy textures on skin and table. Effects: glowy, dreamy, slightly blurred for soft focus, realistic textures, visible film grain, consistent warm muted Kodak Portra tones. Nostalgic, melancholic Wong Kar-wai mood. Faces: preserve uploaded faces exactly with no distortion, frontal view, bride facing camera, groom looking at bride.`,
      `PROMPT 6: Create an intimate wedding kissing photo of this image, wearing a bride and groom attire in no specific place(like in the middle of the night, running in a green grass, etc.) and make a little blurry effect`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845278/4_tfwp2n.jpg'
  },
  {
    id: '1',
    title: 'Çocukluk Fotoğrafı Birleştirme',
    date: '2024-08-01',
    tags: ['Nostalji', 'Polaroid', 'Anı'],
    prompts: [
      `Create a Polaroid photo using the first and second pictures. The photo should look like an ordinary photograph, without any distinct subject or feature. The photo should be slightly blurry, and it should have a consistent light source spread throughout the photo, as if a flash went off in a dark room. Do not change the faces, they must remain exactly the same as the ones I uploaded. Replace the background with white curtains. The children in the photo should remain as children and hug each other.`
    ],
    imageUrl: 'https://res.cloudinary.com/ddfp55a2s/image/upload/v1763845278/1_wxmmhf.jpg'
  }
];
