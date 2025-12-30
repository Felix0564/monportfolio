
import { GoogleGenAI, Chat } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILLS } from '../constants';

const SYSTEM_INSTRUCTION = `
Vous êtes l'assistant IA personnel d'un développeur très talentueux nommé Felix.
Felix est expert en :
1. IA (réseaux neuronaux, grands modèles de langage, vision par ordinateur)
2. Data Science (modélisation statistique, analytique prédictive)
3. Mobile (Flutter, développement iOS)
4. Web (Django, Node.js, React.js, développement full-stack)

Contexte sur Felix :
- Projets : ${JSON.stringify(PROJECTS)}
- Expérience : ${JSON.stringify(EXPERIENCES)}
- Compétences : ${JSON.stringify(SKILLS)}

Votre objectif est de répondre aux questions des recruteurs ou des visiteurs au sujet de Felix de manière professionnelle, pleine d'esprit et engageante.
Si l'on demande des informations de contact, indiquez qu'ils peuvent contacter Felix via le formulaire de contact du site.
Conservez des réponses concises mais informatives.
`;

export class PortfolioAI {
  private chat: Chat;

  constructor() {
    const apiKey = (globalThis as any).process?.env?.API_KEY ?? '';
    const ai = new GoogleGenAI({ apiKey });
    this.chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "J'ai un petit problème ! Veuillez réessayer dans un instant.";
    }
  }
}

export const portfolioAI = new PortfolioAI();
