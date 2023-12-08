import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Légende :
//
// nomPage_nomComponent_nomNumero

const translations = {
    fr: { 
        HomePage_Info_Titre: 'Bonjour',
        HomePage_Info_Info: 'Charlie',
        // MCQ
        
        MCQ_Titre: 'Questionnaire',

        MCQ_Question1_Question: 'Quelle action contribue à un Noël écologique ?',
        MCQ_Question1_Reponse1: 'Utiliser des emballages plastiques',
        MCQ_Question1_Reponse2: 'Opter pour des décorations réutilisables',
        MCQ_Question1_Reponse3: 'Acheter des cadeaux en plastique',
        MCQ_Question1_Reponse4: 'Ignorer les initiatives écologiques',
        MCQ_Question1_Explication: "Réponse Correcte : Opter pour des décorations réutilisables\nExplication : L'utilisation de décorations réutilisables réduit les déchets et contribue à un Noël plus écologique.",

        MCQ_Question2_Question: "Quel impact du changement climatique affecte l'hiver ?",
        MCQ_Question2_Reponse1: 'Augmentation de la neige',
        MCQ_Question2_Reponse2: 'Stabilité des températures',
        MCQ_Question2_Reponse3: 'Réduction de la neige',
        MCQ_Question2_Reponse4: 'Élévation du niveau de la mer',
        MCQ_Question2_Explication: "Réponse Correcte : Réduction de la neige\nExplication : Le réchauffement climatique peut entraîner une réduction de la neige dans certaines régions, affectant les activités hivernales.",

        MCQ_Question3_Question: "Que favorise un Noël éthique ?",
        MCQ_Question3_Reponse1: "Cadeaux durables, éthiques et locaux",
        MCQ_Question3_Reponse2: "Cadeaux bon marché importés",
        MCQ_Question3_Reponse3: "Cadeaux en plastique jetable",
        MCQ_Question3_Reponse4: "Cadeaux suremballés",
        MCQ_Question3_Explication: "Réponse Correcte : Cadeaux durables, éthiques et locaux\nExplication : Des cadeaux durables, éthiques et locaux soutiennent les petites entreprises tout en réduisant l'empreinte carbone liée aux transports.",

        MCQ_Question4_Question: "Que prouve le mythe 'S'il fait froid, il n'y a pas de changement climatique' ?",
        MCQ_Question4_Reponse1: "Le changement climatique est inexistant",
        MCQ_Question4_Reponse2: "Le changement climatique ne se mesure pas à la température quotidienne",
        MCQ_Question4_Reponse3: "Le froid annule le changement climatique",
        MCQ_Question4_Reponse4: "Le changement climatique est exclusivement lié au réchauffement",
        MCQ_Question4_Explication: "Réponse Correcte : Le changement climatique ne se mesure pas uniquement à la température quotidienne\nExplication : Les variations climatiques à long terme montrent une tendance générale à la hausse de la température mondiale, mais le changement climatique englobe plus que la température quotidienne.",

        MCQ_Question5_Question: "Quel mythe est contredit par le changement climatique ?",
        MCQ_Question5_Reponse1: "'Les hivers rigoureux prouvent que le climat n'est pas en train de changer.'",
        MCQ_Question5_Reponse2: "'S'il fait froid, il n'y a pas de changement climatique.'",
        MCQ_Question5_Reponse3: "'La neige abondante prouve que le réchauffement climatique n'est pas réel.'",
        MCQ_Question5_Reponse4: "'Les changements climatiques n'affectent que les régions chaudes, pas les régions froides.'",
        MCQ_Question5_Explication: "Réponse Correcte : 'La neige abondante prouve que le réchauffement climatique n'est pas réel.'\nExplication : Le réchauffement climatique peut entraîner des changements dans les modèles de précipitations, créant des conditions météorologiques extrêmes, y compris des chutes de neige inhabituelles.",

        MCQ_Question6_Question: "Quelle action peut aider à réduire votre empreinte carbone hivernale ?",
        MCQ_Question6_Reponse1: "Augmenter l'utilisation du chauffage",
        MCQ_Question6_Reponse2: "Éteindre les lumières et les appareils non utilisés",
        MCQ_Question6_Reponse3: "Utiliser des emballages non recyclables",
        MCQ_Question6_Reponse4: "Ignorer les pratiques écoénergétiques",
        MCQ_Question6_Explication: "Réponse Correcte : Éteindre les lumières et les appareils non utilisés\nExplication : Éteindre les lumières et les appareils non utilisés contribue à réduire la consommation d'énergie et, par conséquent, l'empreinte carbone.",

        MCQ_Question7_Question: "Comment minimiser les déchets pendant les fêtes ?",
        MCQ_Question7_Reponse1: "Utiliser des emballages excessifs",
        MCQ_Question7_Reponse2: "Choisir des produits avec un emballage minimal",
        MCQ_Question7_Reponse3: "Faire du gaspillage alimentaire",
        MCQ_Question7_Reponse4: "Opter pour des produits à usage unique",
        MCQ_Question7_Explication: "Réponse Correcte : Choisir des produits avec un emballage minimal\nExplication : Les produits avec un emballage minimal réduisent les déchets d'emballage, contribuant ainsi à minimiser l'impact environnemental.",

        MCQ_Question8_Question: "Quel conseil est lié à un mode de vie écologique pour les fêtes ?",
        MCQ_Question8_Reponse1: "Offrir des cadeaux durables et éthiques",
        MCQ_Question8_Reponse2: "Ignorer les préoccupations environnementales",
        MCQ_Question8_Reponse3: "Utiliser des emballages non recyclables",
        MCQ_Question8_Reponse4: "Choisir des décorations jetables",
        MCQ_Question8_Explication: "Réponse Correcte : Offrir des cadeaux durables et éthiques\nExplication : Offrir des cadeaux durables et éthiques soutient des pratiques respectueuses de l'environnement pendant les fêtes.",

        MCQ_Question9_Question: "Que favorise l'action 'Participez à des initiatives locales' ?",
        MCQ_Question9_Reponse1: "Ignorer les problèmes environnementaux",
        MCQ_Question9_Reponse2: "Soutenir les initiatives locales",
        MCQ_Question9_Reponse3: "Ne pas s'impliquer dans des projets environnementaux",
        MCQ_Question9_Reponse4: "Utiliser des produits non durables",
        MCQ_Question9_Explication: "Réponse Correcte : Soutenir les initiatives locales\nExplication : Participer à des initiatives locales contribue à soutenir la communauté et à promouvoir des actions respectueuses de l'environnement.",

        MCQ_Question10_Question: "Quelle phrase résume le mieux une approche respectueuse de l'environnement ?",
        MCQ_Question10_Reponse1: "'Ignorer les changements climatiques en hiver.'",
        MCQ_Question10_Reponse2: "'Soutenir les petits commerces locaux.'",
        MCQ_Question10_Reponse3: "'Maximiser les déchets pendant les fêtes.'",
        MCQ_Question10_Reponse4: "'Utiliser des emballages non recyclables.",
        MCQ_Question10_Explication: "Réponse Correcte : 'Soutenir les petits commerces locaux.'\nExplication : Soutenir les petits commerces locaux favorise une économie durable et réduit l'empreinte carbone liée aux transports.",

    },
    en: {
        HomePage_Info_Titre: 'Bonjour',

    },
    es: {

    },
    it: {

    },
    de: {

    },
    zh: { //

    },
    renne: {

    }

};

// Variable globale pour stocker la langue active
// window.activeLanguage = 'fr'; // La langue par défaut ou 'fr' si marche pas

// i18n.use(initReactI18next).init({
//   resources: translations,
//   lng: window.activeLanguage,
//   fallbackLng: 'fr',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       fr: {
//         translation: {
//             HomePage_Info_Titre: 'Bonjour',
//             HomePage_Info_Info: 'Charlie',
//             // MCQ
            
//             MCQ_Titre: 'Questionnaire',
    
//             MCQ_Question1_Question: 'Quelle action contribue à un Noël écologique ?',
//             MCQ_Question1_Reponse1: 'Utiliser des emballages plastiques',
//             MCQ_Question1_Reponse2: 'Opter pour des décorations réutilisables',
//             MCQ_Question1_Reponse3: 'Acheter des cadeaux en plastique',
//             MCQ_Question1_Reponse4: 'Ignorer les initiatives écologiques',
//             MCQ_Question1_Explication: "Réponse Correcte : Opter pour des décorations réutilisables\nExplication : L'utilisation de décorations réutilisables réduit les déchets et contribue à un Noël plus écologique.",
    
//             MCQ_Question2_Question: "Quel impact du changement climatique affecte l'hiver ?",
//             MCQ_Question2_Reponse1: 'Augmentation de la neige',
//             MCQ_Question2_Reponse2: 'Stabilité des températures',
//             MCQ_Question2_Reponse3: 'Réduction de la neige',
//             MCQ_Question2_Reponse4: 'Élévation du niveau de la mer',
//             MCQ_Question2_Explication: "Réponse Correcte : Réduction de la neige\nExplication : Le réchauffement climatique peut entraîner une réduction de la neige dans certaines régions, affectant les activités hivernales.",
    
//             MCQ_Question3_Question: "Que favorise un Noël éthique ?",
//             MCQ_Question3_Reponse1: "Cadeaux durables, éthiques et locaux",
//             MCQ_Question3_Reponse2: "Cadeaux bon marché importés",
//             MCQ_Question3_Reponse3: "Cadeaux en plastique jetable",
//             MCQ_Question3_Reponse4: "Cadeaux suremballés",
//             MCQ_Question3_Explication: "Réponse Correcte : Cadeaux durables, éthiques et locaux\nExplication : Des cadeaux durables, éthiques et locaux soutiennent les petites entreprises tout en réduisant l'empreinte carbone liée aux transports.",
    
//             MCQ_Question4_Question: "Que prouve le mythe 'S'il fait froid, il n'y a pas de changement climatique' ?",
//             MCQ_Question4_Reponse1: "Le changement climatique est inexistant",
//             MCQ_Question4_Reponse2: "Le changement climatique ne se mesure pas à la température quotidienne",
//             MCQ_Question4_Reponse3: "Le froid annule le changement climatique",
//             MCQ_Question4_Reponse4: "Le changement climatique est exclusivement lié au réchauffement",
//             MCQ_Question4_Explication: "Réponse Correcte : Le changement climatique ne se mesure pas uniquement à la température quotidienne\nExplication : Les variations climatiques à long terme montrent une tendance générale à la hausse de la température mondiale, mais le changement climatique englobe plus que la température quotidienne.",
    
//             MCQ_Question5_Question: "Quel mythe est contredit par le changement climatique ?",
//             MCQ_Question5_Reponse1: "'Les hivers rigoureux prouvent que le climat n'est pas en train de changer.'",
//             MCQ_Question5_Reponse2: "'S'il fait froid, il n'y a pas de changement climatique.'",
//             MCQ_Question5_Reponse3: "'La neige abondante prouve que le réchauffement climatique n'est pas réel.'",
//             MCQ_Question5_Reponse4: "'Les changements climatiques n'affectent que les régions chaudes, pas les régions froides.'",
//             MCQ_Question5_Explication: "Réponse Correcte : 'La neige abondante prouve que le réchauffement climatique n'est pas réel.'\nExplication : Le réchauffement climatique peut entraîner des changements dans les modèles de précipitations, créant des conditions météorologiques extrêmes, y compris des chutes de neige inhabituelles.",
    
//             MCQ_Question6_Question: "Quelle action peut aider à réduire votre empreinte carbone hivernale ?",
//             MCQ_Question6_Reponse1: "Augmenter l'utilisation du chauffage",
//             MCQ_Question6_Reponse2: "Éteindre les lumières et les appareils non utilisés",
//             MCQ_Question6_Reponse3: "Utiliser des emballages non recyclables",
//             MCQ_Question6_Reponse4: "Ignorer les pratiques écoénergétiques",
//             MCQ_Question6_Explication: "Réponse Correcte : Éteindre les lumières et les appareils non utilisés\nExplication : Éteindre les lumières et les appareils non utilisés contribue à réduire la consommation d'énergie et, par conséquent, l'empreinte carbone.",
    
//             MCQ_Question7_Question: "Comment minimiser les déchets pendant les fêtes ?",
//             MCQ_Question7_Reponse1: "Utiliser des emballages excessifs",
//             MCQ_Question7_Reponse2: "Choisir des produits avec un emballage minimal",
//             MCQ_Question7_Reponse3: "Faire du gaspillage alimentaire",
//             MCQ_Question7_Reponse4: "Opter pour des produits à usage unique",
//             MCQ_Question7_Explication: "Réponse Correcte : Choisir des produits avec un emballage minimal\nExplication : Les produits avec un emballage minimal réduisent les déchets d'emballage, contribuant ainsi à minimiser l'impact environnemental.",
    
//             MCQ_Question8_Question: "Quel conseil est lié à un mode de vie écologique pour les fêtes ?",
//             MCQ_Question8_Reponse1: "Offrir des cadeaux durables et éthiques",
//             MCQ_Question8_Reponse2: "Ignorer les préoccupations environnementales",
//             MCQ_Question8_Reponse3: "Utiliser des emballages non recyclables",
//             MCQ_Question8_Reponse4: "Choisir des décorations jetables",
//             MCQ_Question8_Explication: "Réponse Correcte : Offrir des cadeaux durables et éthiques\nExplication : Offrir des cadeaux durables et éthiques soutient des pratiques respectueuses de l'environnement pendant les fêtes.",
    
//             MCQ_Question9_Question: "Que favorise l'action 'Participez à des initiatives locales' ?",
//             MCQ_Question9_Reponse1: "Ignorer les problèmes environnementaux",
//             MCQ_Question9_Reponse2: "Soutenir les initiatives locales",
//             MCQ_Question9_Reponse3: "Ne pas s'impliquer dans des projets environnementaux",
//             MCQ_Question9_Reponse4: "Utiliser des produits non durables",
//             MCQ_Question9_Explication: "Réponse Correcte : Soutenir les initiatives locales\nExplication : Participer à des initiatives locales contribue à soutenir la communauté et à promouvoir des actions respectueuses de l'environnement.",
    
//             MCQ_Question10_Question: "Quelle phrase résume le mieux une approche respectueuse de l'environnement ?",
//             MCQ_Question10_Reponse1: "'Ignorer les changements climatiques en hiver.'",
//             MCQ_Question10_Reponse2: "'Soutenir les petits commerces locaux.'",
//             MCQ_Question10_Reponse3: "'Maximiser les déchets pendant les fêtes.'",
//             MCQ_Question10_Reponse4: "'Utiliser des emballages non recyclables.",
//             MCQ_Question10_Explication: "Réponse Correcte : 'Soutenir les petits commerces locaux.'\nExplication : Soutenir les petits commerces locaux favorise une économie durable et réduit l'empreinte carbone liée aux transports.",
    
//         },
//       },
//       en: {
//         translation: {
//           greeting: 'Hello, world!',
//         },
//       },
//     },
//     lng: 'fr',
//     fallbackLng: 'fr',
//     interpolation: {
//       escapeValue: true,
//     },
//   });

// export default i18n;

window.activeLanguage = 'fr'; // La langue par défaut

i18n.use(initReactI18next).init({
    resources: translations,
    lng: window.activeLanguage,
    fallbackLng: 'fr', // Langue de secours si la traduction n'est pas trouvée
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;