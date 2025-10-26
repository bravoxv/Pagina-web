import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}
// FIX: Initialize with process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateThankYouMessage = async (comment: string): Promise<string> => {
    // FIX: Check process.env.API_KEY directly.
    if (!process.env.API_KEY) {
        return Promise.resolve("¡Gracias por tu comentario! La conexión con la IA está desactivada temporalmente, pero tu mensaje ha sido recibido en la estación espacial.");
    }

    try {
        const prompt = `Un usuario llamado Bravo-XV tiene una página personal con temática del espacio y el universo. Un visitante acaba de dejar el siguiente comentario: "${comment}". Genera un mensaje de agradecimiento que sea corto (2-3 frases), creativo, positivo y que encaje con la temática espacial. El mensaje debe estar en español y tener un tono amigable y emocionante.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text ?? "¡Gracias por tu mensaje! Ha sido recibido en el cosmos.";
    } catch (error) {
        console.error("Error generating thank you message with Gemini:", error);
        throw new Error("Could not connect with the Gemini constellation.");
    }
};
