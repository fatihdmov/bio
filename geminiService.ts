import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

try {
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey: apiKey });
    }
} catch (error) {
    console.error("Gemini istemcisi başlatılamadı", error);
}

export const generateEnhancedPrompt = async (baseIdea: string): Promise<string> => {
  if (!ai) {
    return "API Anahtarı eksik. Lütfen ortam değişkenlerini kontrol edin.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = "You are an expert AI Prompt Engineer for Midjourney and Stable Diffusion. Your task is to take a simple user concept and expand it into a highly detailed, professional image generation prompt. Include keywords for lighting, style, camera settings, and resolution. Return ONLY the prompt text, no intro or outro.";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: baseIdea,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Prompt oluşturulamadı.";
  } catch (error) {
    console.error("Gemini API Hatası:", error);
    return "Yapay zeka servisine bağlanırken bir hata oluştu.";
  }
};