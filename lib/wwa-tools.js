/*
 * Information
 * Creator / Developer: Dani Technology (Dani Ramdani) - FullStack Engineer
 * Contact Creator / Developer: 0895 3416 24750 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Technology (Dani Ramdani) - FullStack Engineer (Creator / Developer)
 * @whiskeysockets/baileys (Library "Baileys" provider)
*/

const connectToWhatsApp = require('./sock.js');

module.exports = {
  startServer: connectToWhatsApp
};