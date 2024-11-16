import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getAIResponse(message: string, context: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `
      You are an AI advisor in the Meta World simulation game. 
      Context: ${context}
      User Message: ${message}
      
      Provide a relevant response as an advisor, considering the game's context and mechanics.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('AI Response Error:', error);
    return 'I apologize, but I am unable to process your request at the moment.';
  }
}