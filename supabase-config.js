// ==========================================
// SUPABASE CONFIGURATIE VOOR PER-M2 CRM
// ==========================================
// Vul hier jouw eigen gegevens in die je kunt vinden in je Supabase Dashboard:
// Settings (tandwiel-icoon) -> API -> Project API keys

const SUPABASE_URL = "JOUW_SUPABASE_URL_HIER"; // bijv. https://xyz.supabase.co
const SUPABASE_ANON_KEY = "JOUW_SUPABASE_ANON_KEY_HIER"; // een hele lange sleutel die begint met eyJ...

// Initialiseer de client alleen als de CDN succesvol is geladen
let supabase = null;
if (typeof window.supabase !== 'undefined') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Fout: Supabase CDN is niet geladen.");
}
