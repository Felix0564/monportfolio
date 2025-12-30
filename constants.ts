
import { Project, Skill, Experience,Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'La Vision par Ordinateur ',
    description: 'Système de vision par ordinateur haute performance pour la détection et le suivi d\'objets en temps réel dans des environnements urbains denses.',
    category: 'AI',
    tags: ['PyTorch', 'YOLOv8', 'Python','CNN', 'OpenCV'],
    imageUrl: '/images/ComputerVision.jpeg',
    link: 'https://github.com/Felix0564/Trafic_routier'
  },

  {
    id: '2',
    title: 'LLM Assistant virtuel',
    description: 'Un assistant virtuel propulsé par des modèles de langage de grande taille pour automatiser les tâches et améliorer la productivité.',
    category: 'AI',
    tags: ['LangChain', 'RAG', 'GROQAPI','NLP', 'Transformers','Gemini','ADK de GOOGLE '],
    imageUrl: '/images/assistantV1.jpeg',
    link: 'https://github.com/Felix0564/ChatBot_LDHOLDING/tree/master/LDHoldingChatbot'
  },

  {
    id: '3',
    title: 'Churn Predictor',
    description: 'Modèle prédictif utilisant des techniques d\'apprentissage automatique pour identifier les clients à risque de churn dans le secteur des télécommunications.',
    category: 'Data Science',
    tags: ['Random Forest', 'XGBoost', 'Logstic Regression'],
    imageUrl: '/images/churn2.png',
    link: 'https://github.com/Felix0564/CHURN_CUSTOMERS'
  },
  {
    id: '4',
    title: 'Gestion de Biblothèque en Ligne',
    description: 'Application mobile pour la gestion et le prêt de livres dans les bibliothèques universitaires, avec notifications et suivi des emprunts.',
    category: 'Web',
    tags: ['Django', 'React', 'SQLite'],
    imageUrl: '/images/biblo1.jpeg',
    link: 'https://gestion-librairie.onrender.com/login_register/'
  },
  {
    id: '5',
    title: 'Gestion de suivi des depenses agricoles',
    description: 'Une application web pour aider les agriculteurs à suivre et gérer leurs dépenses et revenus agricoles de manière efficace.',
    category: 'Mobile',
    tags: ['Flutter', 'Node.js'],
    imageUrl: '/images/agri1.png',
    link: 'https://github.com/Felix0564/GreenOva'
  },

  {
    id: '6',
    title: 'Application de live streaming',
    description: 'Une application mobile pour le streaming en direct avec chat en temps réel et intégration des réseaux sociaux.',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'LiveKit'],
    imageUrl: '/images/live1.png',
    link: '#'

  },

  {
    id: '7',
    title: 'ChatBot de Restaurant Sur Telegram',
    description: 'Restaurant Bot est un chatbot Telegram qui permet aux clients de consulter le menu, passer des commandes et indiquer une adresse de livraison ou un retrait sur place. Le bot notifie également l’administrateur du restaurant lorsqu’une commande est passée',
    category: 'AI',
    tags: ['Python', 'Telegram'],
    imageUrl: '/images/botRst1.jpg',
    link: 'https://github.com/Felix0564/BOT_TELEGRAM_TEST_NEXORA'
    
  },

  {
    id: '8',
    title: 'Dashbord de Suivi de Vente en Ligne',
    description: 'Un tableau de bord interactif pour le suivi des ventes en ligne, offrant des visualisations en temps réel et des analyses approfondies.',
    category: 'BI',
    tags: ['Power BI'],
    imageUrl: '/images/BI1.png',
    link: '#'
    
  },

   {
    id: '9',
    title: 'Applcation de Lecteur de Document PDF en Audio par IA',
    description: 'Une application permettant d\'ecouter des documents PDF en format audio grace a l\'intelligence artificielle.',
    category: 'AI',
    tags: ['Text-to-Speech (TTS)', 'Python', 'PyPDF2'],
    imageUrl: '/images/audiopd.jpg',
    link: 'https://github.com/Felix0564/Audio_book'
    
  }

 

];

export const SKILLS: Skill[] = [
  { name: 'Large Language Models', level: 80, category: 'AI' },
  { name: 'Generative AI', level: 80, category: 'AI' },
  { name: 'Deep Learning', level: 75, category: 'AI' },
  { name: 'Machine Learning', level: 80, category: 'Data Science' },
  { name: 'SQL, ETL, Power BI', level: 60, category: 'BI' },
  // { name: 'ETL', level: 60, category: 'BI' },

  {name: 'Python', level: 85, category: 'AI' },
  { name: 'Django', level: 75, category: 'Web' },
  // { name: 'D3.js Visualization', level: 85, category: 'Data Science' },
  { name: 'Flutter', level: 60, category: 'Mobile' },
  // { name: 'Swift/SwiftUI', level: 80, category: 'Mobile' },
  { name: 'Fullstack React', level: 60, category: 'Web' },
  
  { name: 'Node.js', level: 60, category: 'Web' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Informaticien Développeur  web/Mobile et IA',
    company: 'ULIIIS',
    period: 'Mars 2025 - Août 2025',
    description: [
      'Modélisation et la conception des applications web et mobile.',
      'Recherche et développement en intelligence artificielle.',
      
    ]
  },
  {
    role: 'Full Stack Developeur',
    company: 'TRIOST TECHNOLOGIES',
    period: 'Avril 2024 - Juillet 2024',
    description: [
      'Conception et développement d\'applications web et mobiles.',
      'Mise en œuvre de conceptions réactives robustes adaptées aux mobiles.',
      
    ]
  },

  {
    role: 'Informaticien Développeur',
    company: 'BILIIV HOLDING',
    period: 'Mai 2023 - Octobre 2023',
    description: [
      'En charge de la mise en place d\'un model de Machine \n Learning capable d\'analyser les figures chartistes des marchés financiers.',
      'Mise en place d\' une application de direct (live).'
      
    ]
  }
];

  export const EDUCATION: Education[] = [
  {
    role: 'Master en Intelligence Artificielle. ',
    period: '2023 - 2025',
    ecole: 'Univerté Polytechnique de Bingerville (UPB)',
    
   
  },

  {
    role: 'Licence en MIAGE. ',
    period: '2020 - 2023',
    ecole: 'Univerté Polytechnique de Bingerville (UPB)',
    
   
  },

  {
    role: 'Baccalauréat série D ',
    period: '2019 - 2020',
    ecole: 'Au Lycée Moderne de Koun-Fao',
    
   
  },
];
