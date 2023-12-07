import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';


// Légende :
//
// nomPage_nomComponent_nomNumero

const translations = {
    en: { 
        HomePage_Info_Titre: 'Welcome',
        HomePage_Info_Info: 'Charlie',
        // par page
    },
    fr: {
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
const i18n = new I18n(translations);

// Set the locale once at the beginning of app.
i18n.locale = Localization.locale; // A CHANGER

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;

export default i18n;