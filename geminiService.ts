
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Always create a new instance to ensure we use the most recent key from the environment/dialog
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatbotResponse = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAI();
  
  // Using gemini-3-flash-preview for high speed and reliability for standard text tasks.
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    history: history,
    config: {
      systemInstruction: `You are an AI assistant representing Godwin Kper Simeon on his portfolio website. 
      Godwin is a Data Scientist, ML Engineer, and Azure Solution Engineer with 10+ years of experience.
      Expertise: Python, SQL, ReactJS, Machine Learning, Power BI, Azure, Terraform, Ansible.
      Past Roles: TEK Experts (Azure Solution Engineer), Benue State University (Principal Computer Programme Officer).
      He is based in Lagos, Nigeria. 
      Answer questions about Godwin's professional background, skills, and projects based on this context. 
      Keep responses professional, concise, and helpful.`,
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};

export const editImageWithGemini = async (base64Image: string, prompt: string, mimeType: string): Promise<string | null> => {
  const ai = getAI();
  
  // Using gemini-2.5-flash-image for image editing tasks.
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image.split(',')[1],
            mimeType: mimeType,
          },
        },
        {
          text: prompt,
        },
      ],
    },
  });

  for (const candidate of response.candidates || []) {
    for (const part of candidate.content.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
  }
  return null;
};
