import { GoogleGenAI } from '@google/genai';

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY

const ai = new GoogleGenAI({
  apiKey: GEMINI_KEY,
});


export default ai;