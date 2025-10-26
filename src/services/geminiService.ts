import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}
// FIX: Initialize with process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
