import { I18n } from 'i18n-js';

// Légende :
//
// nomPage_nomComponent_nomNumero

const translations = {
    fr: { 
        // MCQ
        
        MCQ_Titre: "Questionnaire",

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
    en:  {
        HomePage_Info_Titre: "Hello",
        HomePage_Info_Info: "Charlie",
        MCQ_Titre: "Quiz",
        MCQ_Question1_Question: "Which action contributes to an eco-friendly Christmas?",
        MCQ_Question1_Reponse1: "Use plastic packaging",
        MCQ_Question1_Reponse2: "Opt for reusable decorations",
        MCQ_Question1_Reponse3: "Buy plastic gifts",
        MCQ_Question1_Reponse4: "Ignore eco-friendly initiatives",
        MCQ_Question1_Explication: "Correct Answer: Opt for reusable decorations\nExplanation: Using reusable decorations reduces waste and contributes to a more eco-friendly Christmas.",
        MCQ_Question2_Question: "Which impact of climate change affects winter?",
        MCQ_Question2_Reponse1: "Increase in snow",
        MCQ_Question2_Reponse2: "Stable temperatures",
        MCQ_Question2_Reponse3: "Reduction in snow",
        MCQ_Question2_Reponse4: "Rising sea levels",
        MCQ_Question2_Explication: "Correct Answer: Reduction in snow\nExplanation: Climate change can lead to a reduction in snow in certain regions, affecting winter activities.",
        MCQ_Question3_Question: "What does an ethical Christmas promote?",
        MCQ_Question3_Reponse1: "Durable, ethical, and local gifts",
        MCQ_Question3_Reponse2: "Inexpensive imported gifts",
        MCQ_Question3_Reponse3: "Disposable plastic gifts",
        MCQ_Question3_Reponse4: "Overpackaged gifts",
        MCQ_Question3_Explication: "Correct Answer: Durable, ethical, and local gifts\nExplanation: Durable, ethical, and local gifts support small businesses while reducing the carbon footprint associated with transportation.",
        MCQ_Question4_Question: "What does the myth 'If it's cold, there is no climate change' prove?",
        MCQ_Question4_Reponse1: "Climate change doesn't exist",
        MCQ_Question4_Reponse2: "Climate change is not measured by daily temperature",
        MCQ_Question4_Reponse3: "Cold cancels climate change",
        MCQ_Question4_Reponse4: "Climate change is exclusively related to warming",
        MCQ_Question4_Explication: "Correct Answer: Climate change is not measured solely by daily temperature\nExplanation: Long-term climate variations show a general trend of rising global temperatures, but climate change encompasses more than daily temperature.",
        MCQ_Question5_Question: "Which myth is contradicted by climate change?",
        MCQ_Question5_Reponse1: "'Harsh winters prove that the climate is not changing.'",
        MCQ_Question5_Reponse2: "'If it's cold, there is no climate change.'",
        MCQ_Question5_Reponse3: "'Abundant snow proves that global warming is not real.'",
        MCQ_Question5_Reponse4: "'Climate changes only affect warm regions, not cold regions.'",
        MCQ_Question5_Explication: "Correct Answer: 'Abundant snow proves that global warming is not real.'\nExplanation: Global warming can lead to changes in precipitation patterns, creating extreme weather conditions, including unusual snowfall.",
        MCQ_Question6_Question: "Which action can help reduce your winter carbon footprint?",
        MCQ_Question6_Reponse1: "Increase heating usage",
        MCQ_Question6_Reponse2: "Turn off lights and unused appliances",
        MCQ_Question6_Reponse3: "Use non-recyclable packaging",
        MCQ_Question6_Reponse4: "Ignore eco-friendly practices",
        MCQ_Question6_Explication: "Correct Answer: Turn off lights and unused appliances\nExplanation: Turning off lights and unused appliances helps reduce energy consumption and, consequently, the carbon footprint.",
        MCQ_Question7_Question: "How to minimize waste during the holidays?",
        MCQ_Question7_Reponse1: "Use excessive packaging",
        MCQ_Question7_Reponse2: "Choose products with minimal packaging",
        MCQ_Question7_Reponse3: "Engage in food waste",
        MCQ_Question7_Reponse4: "Opt for single-use products",
        MCQ_Question7_Explication: "Correct Answer: Choose products with minimal packaging\nExplanation: Products with minimal packaging reduce packaging waste, thereby contributing to minimizing environmental impact.",
        MCQ_Question8_Question: "Which advice is related to an eco-friendly lifestyle for the holidays?",
        MCQ_Question8_Reponse1: "Offer sustainable and ethical gifts",
        MCQ_Question8_Reponse2: "Ignore environmental concerns",
        MCQ_Question8_Reponse3: "Use non-recyclable packaging",
        MCQ_Question8_Reponse4: "Choose disposable decorations",
        MCQ_Question8_Explication: "Correct Answer: Offer sustainable and ethical gifts\nExplanation: Offering sustainable and ethical gifts supports environmentally friendly practices during the holidays.",
        MCQ_Question9_Question: "What does the action 'Participate in local initiatives' promote?",
        MCQ_Question9_Reponse1: "Ignore environmental issues",
        MCQ_Question9_Reponse2: "Support local initiatives",
        MCQ_Question9_Reponse3: "Not getting involved in environmental projects",
        MCQ_Question9_Reponse4: "Use non-durable products",
        MCQ_Question9_Explication: "Correct Answer: Support local initiatives\nExplanation: Participating in local initiatives contributes to supporting the community and promoting environmentally friendly actions.",
        MCQ_Question10_Question: "Which sentence best summarizes an environmentally friendly approach?",
        MCQ_Question10_Reponse1: "'Ignore climate changes in winter.'",
        MCQ_Question10_Reponse2: "'Support local small businesses.'",
        MCQ_Question10_Reponse3: "'Maximize waste during the holidays.'",
        MCQ_Question10_Reponse4: "'Use non-recyclable packaging.'",
        MCQ_Question10_Explication: "Correct Answer: 'Support local small businesses.'\nExplanation: Supporting local small businesses promotes a sustainable economy and reduces the carbon footprint associated with transportation."
      },
    es: {
        HomePage_Info_Titre: "Bonjour",
        HomePage_Info_Info: "Charlie",
        MCQ_Titre: "Cuestionario",
        MCQ_Question1_Question: "¿Qué acción contribuye a una Navidad ecológica?",
        MCQ_Question1_Reponse1: "Usar envases de plástico",
        MCQ_Question1_Reponse2: "Optar por decoraciones reutilizables",
        MCQ_Question1_Reponse3: "Comprar regalos de plástico",
        MCQ_Question1_Reponse4: "Ignorar las iniciativas ecológicas",
        MCQ_Question1_Explication: "Respuesta Correcta: Optar por decoraciones reutilizables\nExplicación: El uso de decoraciones reutilizables reduce los desechos y contribuye a una Navidad más ecológica.",
        MCQ_Question2_Question: "¿Qué impacto del cambio climático afecta al invierno?",
        MCQ_Question2_Reponse1: "Aumento de la nieve",
        MCQ_Question2_Reponse2: "Estabilidad de las temperaturas",
        MCQ_Question2_Reponse3: "Reducción de la nieve",
        MCQ_Question2_Reponse4: "Elevación del nivel del mar",
        MCQ_Question2_Explication: "Respuesta Correcta: Reducción de la nieve\nExplicación: El cambio climático puede provocar una reducción de la nieve en algunas regiones, afectando las actividades invernales.",
        MCQ_Question3_Question: "¿Qué favorece una Navidad ética?",
        MCQ_Question3_Reponse1: "Regalos duraderos, éticos y locales",
        MCQ_Question3_Reponse2: "Regalos baratos importados",
        MCQ_Question3_Reponse3: "Regalos de plástico desechable",
        MCQ_Question3_Reponse4: "Regalos sobreenvueltos",
        MCQ_Question3_Explication: "Respuesta Correcta: Regalos duraderos, éticos y locales\nExplicación: Los regalos duraderos, éticos y locales apoyan a las pequeñas empresas y reducen la huella de carbono asociada al transporte.",
        MCQ_Question4_Question: "¿Qué demuestra el mito 'Si hace frío, no hay cambio climático'?",
        MCQ_Question4_Reponse1: "El cambio climático no existe",
        MCQ_Question4_Reponse2: "El cambio climático no se mide por la temperatura diaria",
        MCQ_Question4_Reponse3: "El frío anula el cambio climático",
        MCQ_Question4_Reponse4: "El cambio climático está exclusivamente relacionado con el calentamiento",
        MCQ_Question4_Explication: "Respuesta Correcta: El cambio climático no se mide únicamente por la temperatura diaria\nExplicación: Las variaciones climáticas a largo plazo muestran una tendencia general al aumento de la temperatura global, pero el cambio climático abarca más que la temperatura diaria.",
        MCQ_Question5_Question: "¿Qué mito contradice el cambio climático?",
        MCQ_Question5_Reponse1: "'Los inviernos rigurosos prueban que el clima no está cambiando.'",
        MCQ_Question5_Reponse2: "'Si hace frío, no hay cambio climático.'",
        MCQ_Question5_Reponse3: "'La nieve abundante prueba que el calentamiento global no es real.'",
        MCQ_Question5_Reponse4: "'Los cambios climáticos solo afectan a las regiones cálidas, no a las regiones frías.'",
        MCQ_Question5_Explication: "Respuesta Correcta: 'La nieve abundante prueba que el calentamiento global no es real.'\nExplicación: El calentamiento global puede provocar cambios en los patrones de precipitación, creando condiciones meteorológicas extremas, incluyendo nevadas inusuales.",
        MCQ_Question6_Question: "¿Qué acción puede ayudar a reducir tu huella de carbono invernal?",
        MCQ_Question6_Reponse1: "Aumentar el uso de la calefacción",
        MCQ_Question6_Reponse2: "Apagar luces y electrodomésticos no utilizados",
        MCQ_Question6_Reponse3: "Usar envases no reciclables",
        MCQ_Question6_Reponse4: "Ignorar las prácticas ecoamigables",
        MCQ_Question6_Explication: "Respuesta Correcta: Apagar luces y electrodomésticos no utilizados\nExplicación: Apagar luces y electrodomésticos no utilizados ayuda a reducir el consumo de energía y, por lo tanto, la huella de carbono.",
        MCQ_Question7_Question: "¿Cómo minimizar los desechos durante las fiestas?",
        MCQ_Question7_Reponse1: "Usar envases excesivos",
        MCQ_Question7_Reponse2: "Elegir productos con un envase mínimo",
        MCQ_Question7_Reponse3: "Desperdiciar alimentos",
        MCQ_Question7_Reponse4: "Optar por productos de un solo uso",
        MCQ_Question7_Explication: "Respuesta Correcta: Elegir productos con un envase mínimo\nExplicación: Los productos con un envase mínimo reducen los desechos de envases, contribuyendo así a minimizar el impacto ambiental.",
        MCQ_Question8_Question: "¿Qué consejo está relacionado con un estilo de vida ecológico para las fiestas?",
        MCQ_Question8_Reponse1: "Ofrecer regalos sostenibles y éticos",
        MCQ_Question8_Reponse2: "Ignorar las preocupaciones medioambientales",
        MCQ_Question8_Reponse3: "Usar envases no reciclables",
        MCQ_Question8_Reponse4: "Elegir decoraciones desechables",
        MCQ_Question8_Explication: "Respuesta Correcta: Ofrecer regalos sostenibles y éticos\nExplicación: Ofrecer regalos sostenibles y éticos apoya prácticas respetuosas con el medio ambiente durante las fiestas.",
        MCQ_Question9_Question: "¿Qué favorece la acción 'Participar en iniciativas locales'?",
        MCQ_Question9_Reponse1: "Ignorar los problemas medioambientales",
        MCQ_Question9_Reponse2: "Apoyar las iniciativas locales",
        MCQ_Question9_Reponse3: "No involucrarse en proyectos medioambientales",
        MCQ_Question9_Reponse4: "Usar productos no duraderos",
        MCQ_Question9_Explication: "Respuesta Correcta: Apoyar las iniciativas locales\nExplicación: Participar en iniciativas locales contribuye a apoyar a la comunidad y promover acciones respetuosas con el medio ambiente.",
        MCQ_Question10_Question: "¿Qué frase resume mejor un enfoque respetuoso con el medio ambiente?",
        MCQ_Question10_Reponse1: "'Ignorar los cambios climáticos en invierno.'",
        MCQ_Question10_Reponse2: "'Apoyar a los pequeños comercios locales.'",
        MCQ_Question10_Reponse3: "'Maximizar los desechos durante las fiestas.'",
        MCQ_Question10_Reponse4: "'Usar envases no reciclables.'",
        MCQ_Question10_Explication: "Respuesta Correcta: 'Apoyar a los pequeños comercios locales.'\nExplicación: Apoyar a los pequeños comercios locales promueve una economía sostenible y reduce la huella de carbono asociada al transporte."
      },
    it: {
        HomePage_Info_Titre: "Bonjour",
        HomePage_Info_Info: "Charlie",
        MCQ_Titre: "Questionario",
        MCQ_Question1_Question: "Quale azione contribuisce a un Natale ecologico?",
        MCQ_Question1_Reponse1: "Usare imballaggi di plastica",
        MCQ_Question1_Reponse2: "Optare per decorazioni riutilizzabili",
        MCQ_Question1_Reponse3: "Acquistare regali di plastica",
        MCQ_Question1_Reponse4: "Ignorare le iniziative ecologiche",
        MCQ_Question1_Explication: "Risposta Corretta: Optare per decorazioni riutilizzabili\nSpiegazione: L'uso di decorazioni riutilizzabili riduce i rifiuti e contribuisce a un Natale più ecologico.",
        MCQ_Question2_Question: "Quale impatto del cambiamento climatico colpisce l'inverno?",
        MCQ_Question2_Reponse1: "Aumento della neve",
        MCQ_Question2_Reponse2: "Stabilità delle temperature",
        MCQ_Question2_Reponse3: "Riduzione della neve",
        MCQ_Question2_Reponse4: "Elevazione del livello del mare",
        MCQ_Question2_Explication: "Risposta Corretta: Riduzione della neve\nSpiegazione: Il cambiamento climatico può portare a una riduzione della neve in alcune regioni, influenzando le attività invernali.",
        MCQ_Question3_Question: "Cosa favorisce un Natale etico?",
        MCQ_Question3_Reponse1: "Regali durevoli, etici e locali",
        MCQ_Question3_Reponse2: "Regali economici importati",
        MCQ_Question3_Reponse3: "Regali di plastica usa e getta",
        MCQ_Question3_Reponse4: "Regali eccessivamente incartati",
        MCQ_Question3_Explication: "Risposta Corretta: Regali durevoli, etici e locali\nSpiegazione: Regali durevoli, etici e locali sostengono le piccole imprese e riducono l'impronta di carbonio legata ai trasporti.",
        MCQ_Question4_Question: "Cosa dimostra il mito 'Se fa freddo, non c'è cambiamento climatico'?",
        MCQ_Question4_Reponse1: "Il cambiamento climatico non esiste",
        MCQ_Question4_Reponse2: "Il cambiamento climatico non si misura dalla temperatura quotidiana",
        MCQ_Question4_Reponse3: "Il freddo annulla il cambiamento climatico",
        MCQ_Question4_Reponse4: "Il cambiamento climatico è esclusivamente legato al riscaldamento",
        MCQ_Question4_Explication: "Risposta Corretta: Il cambiamento climatico non si misura solo dalla temperatura quotidiana\nSpiegazione: Le variazioni climatiche a lungo termine mostrano una tendenza generale al rialzo della temperatura globale, ma il cambiamento climatico comprende più della temperatura quotidiana.",
        MCQ_Question5_Question: "Quale mito contraddice il cambiamento climatico?",
        MCQ_Question5_Reponse1: "'Gli inverni rigidi dimostrano che il clima non sta cambiando.'",
        MCQ_Question5_Reponse2: "'Se fa freddo, non c'è cambiamento climatico.'",
        MCQ_Question5_Reponse3: "'La neve abbondante dimostra che il riscaldamento globale non è reale.'",
        MCQ_Question5_Reponse4: "'I cambiamenti climatici colpiscono solo le regioni calde, non quelle fredde.'",
        MCQ_Question5_Explication: "Risposta Corretta: 'La neve abbondante dimostra che il riscaldamento globale non è reale.'\nSpiegazione: Il riscaldamento globale può portare a cambiamenti nei modelli di precipitazione, creando condizioni meteorologiche estreme, comprese nevicate insolite.",
        MCQ_Question6_Question: "Quale azione può aiutare a ridurre la tua impronta di carbonio invernale?",
        MCQ_Question6_Reponse1: "Aumentare l'uso del riscaldamento",
        MCQ_Question6_Reponse2: "Spegnere luci e apparecchi non utilizzati",
        MCQ_Question6_Reponse3: "Usare imballaggi non riciclabili",
        MCQ_Question6_Reponse4: "Ignorare le pratiche eco-sostenibili",
        MCQ_Question6_Explication: "Risposta Corretta: Spegnere luci e apparecchi non utilizzati\nSpiegazione: Spegnere luci e apparecchi non utilizzati contribuisce a ridurre il consumo di energia e, di conseguenza, l'impronta di carbonio.",
        MCQ_Question7_Question: "Come minimizzare i rifiuti durante le feste?",
        MCQ_Question7_Reponse1: "Usare imballaggi eccessivi",
        MCQ_Question7_Reponse2: "Scegliere prodotti con un imballaggio minimo",
        MCQ_Question7_Reponse3: "Sprecare cibo",
        MCQ_Question7_Reponse4: "Optare per prodotti monouso",
        MCQ_Question7_Explication: "Risposta Corretta: Scegliere prodotti con un imballaggio minimo\nSpiegazione: I prodotti con un imballaggio minimo riducono i rifiuti di imballaggio, contribuendo così a minimizzare l'impatto ambientale.",
        MCQ_Question8_Question: "Quale consiglio è legato a uno stile di vita ecologico per le feste?",
        MCQ_Question8_Reponse1: "Offrire regali sostenibili ed etici",
        MCQ_Question8_Reponse2: "Ignorare le preoccupazioni ambientali",
        MCQ_Question8_Reponse3: "Usare imballaggi non riciclabili",
        MCQ_Question8_Reponse4: "Scegliere decorazioni usa e getta",
        MCQ_Question8_Explication: "Risposta Corretta: Offrire regali sostenibili ed etici\nSpiegazione: Offrire regali sostenibili ed etici supporta pratiche rispettose dell'ambiente durante le feste.",
        MCQ_Question9_Question: "Cosa favorisce l'azione 'Partecipa a iniziative locali'?",
        MCQ_Question9_Reponse1: "Ignorare i problemi ambientali",
        MCQ_Question9_Reponse2: "Sostenere le iniziative locali",
        MCQ_Question9_Reponse3: "Non coinvolgersi in progetti ambientali",
        MCQ_Question9_Reponse4: "Usare prodotti non durevoli",
        MCQ_Question9_Explication: "Risposta Corretta: Sostenere le iniziative locali\nSpiegazione: Partecipare a iniziative locali contribuisce a sostenere la comunità e promuovere azioni rispettose dell'ambiente.",
        MCQ_Question10_Question: "Quale frase riassume meglio un approccio rispettoso dell'ambiente?",
        MCQ_Question10_Reponse1: "'Ignorare i cambiamenti climatici in inverno.'",
        MCQ_Question10_Reponse2: "'Sostenere i piccoli negozi locali.'",
        MCQ_Question10_Reponse3: "'Massimizzare i rifiuti durante le feste.'",
        MCQ_Question10_Reponse4: "'Usare imballaggi non riciclabili.'",
        MCQ_Question10_Explication: "Risposta Corretta: 'Sostenere i piccoli negozi locali.'\nSpiegazione: Sostenere i piccoli negozi locali favorisce un'economia sostenibile e riduce l'impronta di carbonio legata ai trasporti."
      },
    de: {
        HomePage_Info_Titre: "Bonjour",
        HomePage_Info_Info: "Charlie",
        MCQ_Titre: "Fragebogen",
        MCQ_Question1_Question: "Welche Handlung trägt zu einem umweltfreundlichen Weihnachten bei?",
        MCQ_Question1_Reponse1: "Verwendung von Plastikverpackungen",
        MCQ_Question1_Reponse2: "Optimierung für wiederverwendbare Dekorationen",
        MCQ_Question1_Reponse3: "Kauf von Plastikgeschenken",
        MCQ_Question1_Reponse4: "Ignorieren von Umweltschutzinitiativen",
        MCQ_Question1_Explication: "Richtige Antwort: Optimierung für wiederverwendbare Dekorationen\nErläuterung: Die Verwendung von wiederverwendbaren Dekorationen reduziert Abfall und trägt zu einem umweltfreundlicheren Weihnachten bei.",
        MCQ_Question2_Question: "Welche Auswirkung des Klimawandels betrifft den Winter?",
        MCQ_Question2_Reponse1: "Zunahme von Schnee",
        MCQ_Question2_Reponse2: "Stabilität der Temperaturen",
        MCQ_Question2_Reponse3: "Abnahme von Schnee",
        MCQ_Question2_Reponse4: "Anstieg des Meeresspiegels",
        MCQ_Question2_Explication: "Richtige Antwort: Abnahme von Schnee\nErläuterung: Der Klimawandel kann in einigen Regionen zu weniger Schnee führen und winterliche Aktivitäten beeinflussen.",
        MCQ_Question3_Question: "Was fördert ein ethisches Weihnachten?",
        MCQ_Question3_Reponse1: "Nachhaltige, ethische und lokale Geschenke",
        MCQ_Question3_Reponse2: "Günstige importierte Geschenke",
        MCQ_Question3_Reponse3: "Einweg-Plastikgeschenke",
        MCQ_Question3_Reponse4: "Übermäßig verpackte Geschenke",
        MCQ_Question3_Explication: "Richtige Antwort: Nachhaltige, ethische und lokale Geschenke\nErläuterung: Nachhaltige, ethische und lokale Geschenke unterstützen kleine Unternehmen und reduzieren den CO2-Fußabdruck durch Transporte.",
        MCQ_Question4_Question: "Was beweist der Mythos 'Wenn es kalt ist, gibt es keinen Klimawandel'?",
        MCQ_Question4_Reponse1: "Es gibt keinen Klimawandel",
        MCQ_Question4_Reponse2: "Klimawandel wird nicht anhand der täglichen Temperaturen gemessen",
        MCQ_Question4_Reponse3: "Die Kälte hebt den Klimawandel auf",
        MCQ_Question4_Reponse4: "Klimawandel ist ausschließlich auf Erwärmung zurückzuführen",
        MCQ_Question4_Explication: "Richtige Antwort: Klimawandel wird nicht nur anhand der täglichen Temperaturen gemessen\nErläuterung: Langfristige Klimaveränderungen zeigen einen allgemeinen Anstieg der weltweiten Durchschnittstemperatur, aber der Klimawandel umfasst mehr als nur die tägliche Temperatur.",
        MCQ_Question5_Question: "Welcher Mythos wird durch den Klimawandel widerlegt?",
        MCQ_Question5_Reponse1: "'Kalte Winter beweisen, dass sich das Klima nicht ändert.'",
        MCQ_Question5_Reponse2: "'Wenn es kalt ist, gibt es keinen Klimawandel.'",
        MCQ_Question5_Reponse3: "'Reichlicher Schnee beweist, dass die globale Erwärmung nicht real ist.'",
        MCQ_Question5_Reponse4: "'Klimaveränderungen betreffen nur warme Regionen, nicht kalte.'",
        MCQ_Question5_Explication: "Richtige Antwort: 'Reichlicher Schnee beweist, dass die globale Erwärmung nicht real ist.'\nErläuterung: Die globale Erwärmung kann zu Veränderungen in den Niederschlagsmustern führen und extreme Wetterbedingungen wie ungewöhnlichen Schneefall verursachen.",
        MCQ_Question6_Question: "Welche Handlung kann dazu beitragen, Ihren CO2-Fußabdruck im Winter zu reduzieren?",
        MCQ_Question6_Reponse1: "Erhöhung der Heiznutzung",
        MCQ_Question6_Reponse2: "Ausschalten von Lichtern und ungenutzten Geräten",
        MCQ_Question6_Reponse3: "Verwendung von nicht recyclebarem Verpackungsmaterial",
        MCQ_Question6_Reponse4: "Ignorieren von umweltfreundlichen Praktiken",
        MCQ_Question6_Explication: "Richtige Antwort: Ausschalten von Lichtern und ungenutzten Geräten\nErläuterung: Das Ausschalten von Lichtern und ungenutzten Geräten trägt zur Reduzierung des Energieverbrauchs und damit des CO2-Fußabdrucks bei.",
        MCQ_Question7_Question: "Wie minimiert man Abfall während der Feiertage?",
        MCQ_Question7_Reponse1: "Verwendung von übermäßigen Verpackungen",
        MCQ_Question7_Reponse2: "Auswahl von Produkten mit minimaler Verpackung",
        MCQ_Question7_Reponse3: "Lebensmittelverschwendung betreiben",
        MCQ_Question7_Reponse4: "Entscheidung für Einwegprodukte",
        MCQ_Question7_Explication: "Richtige Antwort: Auswahl von Produkten mit minimaler Verpackung\nErläuterung: Produkte mit minimaler Verpackung reduzieren den Verpackungsmüll und tragen somit zur Minimierung der Umweltauswirkungen bei.",
        MCQ_Question8_Question: "Welcher Ratschlag ist mit einem umweltfreundlichen Lebensstil für die Feiertage verbunden?",
        MCQ_Question8_Reponse1: "Anbieten von nachhaltigen und ethischen Geschenken",
        MCQ_Question8_Reponse2: "Ignorieren von Umweltbedenken",
        MCQ_Question8_Reponse3: "Verwendung von nicht recyclebarem Verpackungsmaterial",
        MCQ_Question8_Reponse4: "Entscheidung für Einwegdekorationen",
        MCQ_Question8_Explication: "Richtige Antwort: Anbieten von nachhaltigen und ethischen Geschenken\nErläuterung: Das Anbieten von nachhaltigen und ethischen Geschenken unterstützt umweltfreundliche Praktiken während der Feiertage.",
        MCQ_Question9_Question: "Was fördert die Aktion 'Teilnahme an lokalen Initiativen'?",
        MCQ_Question9_Reponse1: "Ignorieren von Umweltproblemen",
        MCQ_Question9_Reponse2: "Unterstützung lokaler Initiativen",
        MCQ_Question9_Reponse3: "Nicht-Beteiligung an Umweltprojekten",
        MCQ_Question9_Reponse4: "Verwendung von nicht nachhaltigen Produkten",
        MCQ_Question9_Explication: "Richtige Antwort: Unterstützung lokaler Initiativen\nErläuterung: Die Teilnahme an lokalen Initiativen trägt dazu bei, die Gemeinschaft zu unterstützen und umweltfreundliche Maßnahmen zu fördern.",
        MCQ_Question10_Question: "Welcher Satz fasst am besten einen umweltfreundlichen Ansatz zusammen?",
        MCQ_Question10_Reponse1: "'Ignorieren von Klimaveränderungen im Winter.'",
        MCQ_Question10_Reponse2: "'Unterstützung kleiner lokaler Geschäfte.'",
        MCQ_Question10_Reponse3: "'Maximierung des Mülls während der Feiertage.'",
        MCQ_Question10_Reponse4: "'Verwendung von nicht recyclebarem Verpackungsmaterial.'",
        MCQ_Question10_Explication: "Richtige Antwort: 'Unterstützung kleiner lokaler Geschäfte.'\nErläuterung: Die Unterstützung kleiner lokaler Geschäfte fördert eine nachhaltige Wirtschaft und reduziert den CO2-Fußabdruck durch Transporte."
      },
    zh: {
        HomePage_Info_Titre: "你好",
        HomePage_Info_Info: "查理",
        MCQ_Titre: "问卷调查",
        MCQ_Question1_Question: "哪项行动有助于创建环保的圣诞节？",
        MCQ_Question1_Reponse1: "使用塑料包装",
        MCQ_Question1_Reponse2: "选择可重复使用的装饰",
        MCQ_Question1_Reponse3: "购买塑料礼物",
        MCQ_Question1_Reponse4: "忽略环保倡议",
        MCQ_Question1_Explication: "正确答案：选择可重复使用的装饰\n解释：使用可重复使用的装饰减少了废物，有助于创造更环保的圣诞节。",
        MCQ_Question2_Question: "气候变化对冬季有什么影响？",
        MCQ_Question2_Reponse1: "雪量增加",
        MCQ_Question2_Reponse2: "温度稳定",
        MCQ_Question2_Reponse3: "雪量减少",
        MCQ_Question2_Reponse4: "海平面上升",
        MCQ_Question2_Explication: "正确答案：雪量减少\n解释：气候变化可能导致某些地区雪量减少，影响冬季活动。",
        MCQ_Question3_Question: "什么有助于创造一个道德的圣诞节？",
        MCQ_Question3_Reponse1: "持久，道德和本地的礼物",
        MCQ_Question3_Reponse2: "廉价的进口礼品",
        MCQ_Question3_Reponse3: "一次性塑料礼品",
        MCQ_Question3_Reponse4: "过分包装的礼品",
        MCQ_Question3_Explication: "正确答案：持久，道德和本地的礼物\n解释：持久，道德和本地的礼物支持小企业，减少了与运输相关的碳足迹。",
        MCQ_Question4_Question: "‘如果天冷，就没有气候变化’这个神话证明了什么？",
        MCQ_Question4_Reponse1: "气候变化不存在",
        MCQ_Question4_Reponse2: "气候变化不是通过每日温度测量的",
        MCQ_Question4_Reponse3: "寒冷能抵消气候变化",
        MCQ_Question4_Reponse4: "气候变化仅与升温有关",
        MCQ_Question4_Explication: "正确答案：气候变化不仅通过每日温度测量\n解释：长期的气候变化显示全球平均温度普遍上升的趋势，但气候变化不仅仅与每日温度有关。",
        MCQ_Question5_Question: "哪个神话被气候变化所反驳？",
        MCQ_Question5_Reponse1: "‘寒冷的冬季证明气候不会改变’",
        MCQ_Question5_Reponse2: "‘如果天冷，就没有气候变化’",
        MCQ_Question5_Reponse3: "‘大雪证明全球变暖不是真实的’",
        MCQ_Question5_Reponse4: "‘气候变化只影响热带地区，不影响寒冷地区’",
        MCQ_Question5_Explication: "正确答案：‘大雪证明全球变暖不是真实的’\n解释：全球变暖可能导致降水模式变化，造成极端天气条件，包括异常的降雪。",
        MCQ_Question6_Question: "哪个行动有助于减少您的冬季碳足迹？",
        MCQ_Question6_Reponse1: "增加供暖的使用",
        MCQ_Question6_Reponse2: "关闭未使用的灯光和设备",
        MCQ_Question6_Reponse3: "使用不可回收的包装",
        MCQ_Question6_Reponse4: "忽略不可持续的做法",
        MCQ_Question6_Explication: "正确答案：关闭未使用的灯光和设备\n解释：关闭未使用的灯光和设备有助于减少能源消耗，从而减少碳足迹。",
        MCQ_Question7_Question: "如何在节日期间减少废物？",
        MCQ_Question7_Reponse1: "使用过多的包装",
        MCQ_Question7_Reponse2: "选择包装最少的产品",
        MCQ_Question7_Reponse3: "浪费食物",
        MCQ_Question7_Reponse4: "选择一次性产品",
        MCQ_Question7_Explication: "正确答案：选择包装最少的产品\n解释：选择包装最少的产品可减少包装废物，从而有助于最小化环境影响。",
        MCQ_Question8_Question: "与假日环保生活方式相关的建议是什么？",
        MCQ_Question8_Reponse1: "提供可持续和道德的礼物",
        MCQ_Question8_Reponse2: "忽略环保问题",
        MCQ_Question8_Reponse3: "使用不可回收的包装",
        MCQ_Question8_Reponse4: "选择一次性装饰",
        MCQ_Question8_Explication: "正确答案：提供可持续和道德的礼物\n解释：提供可持续和道德的礼物支持假日期间环保的实践。",
        MCQ_Question9_Question: "什么有助于‘参与本地活动’的行动？",
        MCQ_Question9_Reponse1: "忽略环境问题",
        MCQ_Question9_Reponse2: "支持本地活动",
        MCQ_Question9_Reponse3: "不参与环境项目",
        MCQ_Question9_Reponse4: "使用不可持续的产品",
        MCQ_Question9_Explication: "正确答案：支持本地活动\n解释：参与本地活动有助于支持社区，并促进环保行动。",
        MCQ_Question10_Question: "哪个句子最好地概括了环保的方法？",
        MCQ_Question10_Reponse1: "‘忽略冬季气候变化’",
        MCQ_Question10_Reponse2: "‘支持小型本地店铺’",
        MCQ_Question10_Reponse3: "‘在假日期间最大化废物’",
        MCQ_Question10_Reponse4: "‘使用不可回收的包装’",
        MCQ_Question10_Explication: "正确答案：‘支持小型本地店铺’\n解释：支持小型本地店铺有助于促进可持续经济，减少与运输相关的碳足迹。"
      },
    renne: {
      HomePage_Info_Titre: "abowrbonan",
      HomePage_Info_Info: "awbwrowbno",
      MCQ_Titre: "arobowbwrun",
      MCQ_Question1_Question: "bouawwnr bnboranuwonranorbraoau nroaoonrwonrwonranrorboruanowbranoroua nobwranrwaoaonboawoa ？",
      MCQ_Question1_Reponse1: "uawwraoau nroaoonrwonrwanu wonranor",
      MCQ_Question1_Reponse2: "raoaunro aoonrwonrwo nra nror",
      MCQ_Question1_Reponse3: "orauwbowna wbnaraoarob",
      MCQ_Question1_Reponse4: "oowunrauwoa bo anran wonbraoranrbonanwrwrbnbraunrwoba rnwran",
      MCQ_Question1_Explication: "ronurboawarnorwnab ononrnwanborbra oauwoauanrboanworboraoaunr wonranorbraoaunroa oon.",
      MCQ_Question2_Question: "anorowbwaurbnanarbr aon bwanobrboroabnraoanrwoba nraroabrawrouwrbaon branbonoan ？",
      MCQ_Question2_Reponse1: "bwroanoarro",
      MCQ_Question2_Reponse2: "rwnaroanwb",
      MCQ_Question2_Reponse3: "arobowbwrun",
      MCQ_Question2_Reponse4: "bwrnararaw",
      MCQ_Question2_Explication: "rwan aon bwanobrboroab nrbarbwa",
      MCQ_Question3_Question: "awbwrawbwrowbno owbawbwro wbnono ?",
      MCQ_Question3_Reponse1: "awbwroabwo",
      MCQ_Question3_Reponse2: "rwnrabowro",
      MCQ_Question3_Reponse3: "abowrbonan",
      MCQ_Question3_Reponse4: "awbwrowbno",
      MCQ_Question3_Explication: "brawrnroaonru rranwbouanroabnorwonbanoarow uabonrowranb arnwbwonrwuo rbrauanroa",
      MCQ_Question4_Question: "braon rbranabwoaoobrnarob ranurwaranbnbwororbonan brau wbawobroawarnuaroobrwan ？",
      MCQ_Question4_Reponse1: "awboroa wbo robwanbwan",
      MCQ_Question4_Reponse2: "rwanbarbwa",
      MCQ_Question4_Reponse3: "awborobwa ru rran",
      MCQ_Question4_Reponse4: "awbwro awbwrowbnowbno",
      MCQ_Question4_Explication: "braonwbwroarnauowranbonbarnuabwnrbnoarwnarouboarab wonronobwnr anbrunwanboran",
      MCQ_Question5_Question: "aro arobowbwrunbarobo wrunowbwrun",
      MCQ_Question5_Reponse1: "wbwro awbwrowb",
      MCQ_Question5_Reponse2: "bwrnararaw",
      MCQ_Question5_Reponse3: "awbwroabwo",
      MCQ_Question5_Reponse4: "awbwrowonru rrbno",
      MCQ_Question5_Explication: "awrnroaonru rranwbouanroabnorwonbanoarow uabonrowranb arnwbwonrwuo rbrauanro",
      MCQ_Question6_Question: "boanorunbwroaorubranbnoabnruobro",
      MCQ_Question6_Reponse1: "nawbrarwb",
      MCQ_Question6_Reponse2: "wrawrananb",
      MCQ_Question6_Reponse3: "aunrwroaunr",
      MCQ_Question6_Reponse4: "rawbwa",
      MCQ_Question6_Explication: "bwoaorawrbraonboraowbnaoarwbanranwbnoarbwro rwanbra",
      MCQ_Question7_Question: "ranroabranawbrawbnoarno",
      MCQ_Question7_Reponse1: "aunrwbnraw",
      MCQ_Question7_Reponse2: "bwraobnroabn",
      MCQ_Question7_Reponse3: "aonrwbwanr",
      MCQ_Question7_Reponse4: "anranobwonbwrunboan",
      MCQ_Question7_Explication: "bwanroanranorwbaonrawbrwanbrwanbra",
      MCQ_Question8_Question: "aonrwnranrbnoarbra",
      MCQ_Question8_Reponse1: "uawnrwbrawb",
      MCQ_Question8_Reponse2: "rawbrwonrwbnarbwranb",
      MCQ_Question8_Reponse3: "rawbwranbrawbra",
      MCQ_Question8_Reponse4: "raowbrwnarwb",
      MCQ_Question8_Explication: "raoanroawbranbwoabranb",
      MCQ_Question9_Question: "raobnrawbwaorawnbra",
      MCQ_Question9_Reponse1: "bwnroaurnowbanraw",
      MCQ_Question9_Reponse2: "roanborbwanarwbrawbrao",
      MCQ_Question9_Reponse3: "ranbwoanroabnrawbra",
      MCQ_Question9_Reponse4: "bwaornawbraoanrwbrawbranra",
      MCQ_Question9_Explication: "ranrawbrawbwanroanbwoarnarbrwanbwaoarwbnranbrwanbrwa",
      MCQ_Question10_Question: "rawbrwanbraonrawbwoanrwbranb",
      MCQ_Question10_Reponse1: "rwbrawbrwanbwaonrb",
      MCQ_Question10_Reponse2: "rawbwnrawbraoanr",
      MCQ_Question10_Reponse3: "ranbwoarwbnrawbwbranb",
      MCQ_Question10_Reponse4: "raobrwanrawbwanb",
      MCQ_Question10_Explication: "raowbnranbrwbanbrwanbrwanbra"
    }
};

const i18n = new I18n(translations);

// Set the locale once at the beginning of app.
i18n.locale = "fr";

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;

export default i18n;