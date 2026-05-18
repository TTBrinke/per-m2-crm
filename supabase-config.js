// ==========================================
// SUPABASE CONFIGURATIE VOOR PER-M2 CRM
// ==========================================
// Vul hier jouw eigen gegevens in die je kunt vinden in je Supabase Dashboard:
// Settings (tandwiel-icoon) -> API -> Project API keys

let SUPABASE_URL = "https://vbwukcdyszjfmnxizkht.supabase.co"; // bijv. https://xyz.supabase.co
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZid3VrY2R5c3pqZm1ueGl6a2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMzAwNzgsImV4cCI6MjA5NDcwNjA3OH0.EVbVUVy0svwtSKM6BN-LzFnnxfcVqns17mv4K1z5fps"; // een hele lange sleutel die begint met eyJ...

// Automatische correctie als /rest/v1/ per ongeluk is meegekopieerd
if (SUPABASE_URL.endsWith("/rest/v1/")) {
    SUPABASE_URL = SUPABASE_URL.slice(0, -9);
} else if (SUPABASE_URL.endsWith("/rest/v1")) {
    SUPABASE_URL = SUPABASE_URL.slice(0, -8);
}

// Initialiseer de client alleen als de CDN succesvol is geladen
let supabase = null;
if (typeof window.supabase !== 'undefined') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Fout: Supabase CDN is niet geladen.");
}
