
import { GoogleGenAI } from "@google/genai";

export async function getPersonalizedSynopsis(bookTitle: string, author: string): Promise<string> {
  // Initialize AI instance right before usage to ensure current API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a personalized, exciting 2-sentence blurb for the book "${bookTitle}" by ${author}. Make it sound modern, high-tech, and enticing for a futuristic book discovery app. Focus on the core conflict or the most unique hook.`,
    });
    
    // response.text is a getter property, not a method.
    return response.text || "This book is a highly acclaimed masterpiece that explores deep themes and unforgettable characters.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Explore a world where every page turned reveals a new dimension of human experience and imagination.";
  }
}
