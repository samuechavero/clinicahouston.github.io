
import { GoogleGenAI } from "@google/genai";

export const getDentalAdvice = async (userMessage: string) => {
  // Always use process.env.API_KEY directly when initializing the GoogleGenAI client instance.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Eres un asistente virtual amable para la 'Clínica Dental Ana Garcia'. Tu objetivo es responder preguntas generales sobre salud dental y sobre los servicios de la clínica (Limpieza, Ortodoncia, Blanqueamiento, Revisiones). No des diagnósticos médicos definitivos, siempre sugiere agendar una cita para una evaluación profesional. Habla en español de forma profesional y cálida.",
        temperature: 0.7,
        // maxOutputTokens is omitted to ensure the model has enough token budget for thinking and generation.
      },
    });

    // Access the .text property directly (it is a getter, not a method).
    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Tuvimos un problema conectando con nuestro asistente. Por favor, intenta de nuevo más tarde.";
  }
};