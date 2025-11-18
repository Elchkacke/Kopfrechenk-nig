// Lehrer-PIN (bitte anpassen)
const TEACHER_PIN = "1234";

// Server-URL für Ergebnis-Speicherung.
// Wenn du keinen Server hast: Dummy-URL lassen.
const SERVER_URL = "https://script.google.com/macros/s/AKfycbx1Fp2z4frJxAOjR1qUctCHsQb7pxIipNvIGvYlXqxwLKeOE2UbPyrQZqkS20_BXzsSEA/exec";

// Start-Konfiguration (überschreibt die Default-Werte aus index.html)
window.SERVER_CONFIG = {
  count: 10,
  min: 1,
  max: 150,
  ops: ["+", "-", "*", "/"],
  allowNeg: false,
  divInt: true,
  multMax: 12,
  divMax: 12,
  evenOnly: false
};
