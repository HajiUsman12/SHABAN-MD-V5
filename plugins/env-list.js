const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Displays bot settings",
    category: "menu",
    react: "⚙️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Royal & Stylish Settings Message
        let envSettings = `*⚙️HASAN-MD SETTINGS⚙️*

┣ 🔹 *status_view:* ${isEnabled(config.AUTO_STATUS_SEEN) ? "On" : "Off"}  
┣ 🔹 *status_reply:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "On" : "Off"}  
┣ 🔹 *auto_reply:* ${isEnabled(config.AUTO_REPLY) ? "On" : "Off"}  
┣ 🔹 *auto_sticker:* ${isEnabled(config.AUTO_STICKER) ? "On" : "Off"}  
┣ 🔹 *auto_voice:* ${isEnabled(config.AUTO_VOICE) ? "On" : "Off"}  
┣ 🔹 *custom_reacts:* ${isEnabled(config.CUSTOM_REACT) ? "On" : "Off"}  
┣ 🔹 *auto_react:* ${isEnabled(config.AUTO_REACT) ? "On" : "Off"}  
┣ 🔹 *Delete Links:* ${isEnabled(config.DELETE_LINKS) ? "On" : "Off"}  
┣ 🔹 *Anti-Link:* ${isEnabled(config.ANTI_LINK) ? "On" : "Off"}  
┣ 🔹 *anti_bad:* ${isEnabled(config.ANTI_BAD) ? "On" : "Off"}  
┣ 🔹 *auto_typing:* ${isEnabled(config.AUTO_TYPING) ? "On" : "Off"}  
┣ 🔹 *auto_reacording:* ${isEnabled(config.AUTO_RECORDING) ? "On" : "Off"}  
┣ 🔹 *always_online:* ${isEnabled(config.ALWAYS_ONLINE) ? "On" : "Off"}  
┣ 🔹 *mode:* ${isEnabled(config.PUBLIC_MODE) ? "On" : "Off"}  
┣ 🔹 *read_message:* ${isEnabled(config.READ_MESSAGE) ? "On" : "Off"}  
┣ 🔹 *status_react:* ${isEnabled(config.AUTO_STATUS_REACT) ? "On" : "Off"}  
┣ 🔹 *welcome:* ${isEnabled(config.WELCOME) ? "On" : "Off"}  
┣ 🔹 *admin-events:* ${isEnabled(config.ADMIN_EVENTS) ? "On" : "Off"}  
┃  
┗━━━━━━━━━━━━━━━━━ 
📝 *Description:* ${config.DESCRIPTION}`;

        // Send stylish image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://i.ibb.co/S7Q5x9LW/IMG-20250407-WA0027.jpg' }, // Stylish Image
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: "HᴀsᴀɴMᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (error) {
        console.log(error);
        reply(`❌ *Error:* ${error.message}`);
    }
});
