// Lehrer-PIN (bitte anpassen)
const TEACHER_PIN = "1234";

// Server-URL, an die die Ergebnisse geschickt werden.
// Wenn du noch keinen Server hast, lass eine Dummy-URL drin
// oder setze sie auf eine echte URL (z.B. Google Apps Script Web-App).
const SERVER_URL = "https://script.google.com/macros/s/AKfycbxmHegvBVeMLwqRP8yLcm6NzIfhlc6-IRHxxp-NoEp7aH157qX4GjyQI1tBv5EtQQzGGA/exec";

// Optionale Start-Konfiguration vom Server.
// Wenn du das nicht brauchst, kannst du SERVER_CONFIG weglassen.
window.SERVER_CONFIG = {
  count: 10,        // Anzahl Aufgaben
  min: 1,           // kleinste Zahl
  max: 150,         // größte Zahl
  ops: ["+", "-", "*", "/"], // erlaubte Rechenarten
  allowNeg: false,  // negative Ergebnisse erlauben
  divInt: true,     // Division nur ganzzahlig
  multMax: 12,      // max. Faktor bei Multiplikation
  divMax: 12,       // max. Teiler bei Division
  evenOnly: false   // "Nur gerade Zahlen" voreingestellt?
};
