// Portfolio Configuration - EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// Just change the values below and refresh your website!

const portfolioConfig = {
    // ==================== CONTACT INFORMATION ====================
    contact: {
        // Je Discord username (wordt getoond op de knop)
        discordUsername: "official_thijs",

        // Discord profiel link (rechtermuisknop op je profiel in Discord → Kopieer ID)
        // Format: https://discord.com/users/JE_USER_ID
        // OF gebruik een Discord server invite link
        discordLink: "https://discord.com/users/JE_USER_ID_HIER",

        // Alternatief: Discord server invite
        // discordLink: "https://discord.gg/je-server-code"
    },

    // ==================== STATISTICS ====================
    // Deze worden automatisch berekend + opgeteld bij je projecten
    stats: {
        baseScripts: 25, // Aantal scripts buiten deze projecten om
        baseClients: 15 // Aantal klanten buiten deze projecten om
    },

    // ==================== PROJECTS ====================
    // Voeg hier al je projecten toe!
    // Je kunt zoveel projecten toevoegen als je wilt
    projects: [{
            title: "ESX Legacy HUD System",
            description: "Een volledig customizable HUD systeem voor ESX Legacy met OX Lib integratie. Features: cash/bank display, job info, vehicle HUD, en smooth animations.",
            // Gebruik Unsplash voor placeholder afbeeldingen, of je eigen screenshots
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            tags: ["ESX", "OX Lib", "HUD", "Lua"]
        },
        {
            title: "Advanced Drug Dealer Script",
            description: "Comprehensive drug dealing systeem met NPC interacties, OX Inventory integratie, vehicle spawning met trunk items, en cooldown management.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
            tags: ["ESX", "OX Inventory", "NPC", "Lua"]
        },
        {
            title: "Weapon Holster Animation",
            description: "Realistische wapen holster animaties gebaseerd op clothing components. Features: holster/back animations, shooting blocks tijdens animatie, en bag weight system.",
            image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
            tags: ["Animations", "Clothing", "Weapons", "Lua"]
        },
        {
            title: "Pizza Delivery Job",
            description: "Complete pizzabezorg job met ESX, OX Target, OX Lib context menus. Features: outfit changing, delivery routes, NPC interactions, en vehicle management.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
            tags: ["ESX", "Job", "OX Target", "Lua"]
        },
        {
            title: "Bullet Casing Evidence",
            description: "Forensisch bewijs systeem voor politie servers. Bullet casings spawn bij schieten, forensisch onderzoek mogelijk, weapon serial tracking, en fingerprint system.",
            image: "https://images.unsplash.com/photo-1453873419456-d8b490c5f9d5?w=800&q=80",
            tags: ["Police", "Evidence", "OX Target", "Lua"]
        },
        {
            title: "OTNET Anticheat",
            description: "Custom anticheat systeem met server-side player blips, ESP met head IDs, OX Lib admin menus, en centralized permission checking.",
            image: "https://images.unsplash.com/photo-1563206767-5b1d1293e9e7?w=800&q=80",
            tags: ["Anticheat", "Admin", "Security", "Lua"]
        }
        // Voeg meer projecten toe door te kopiëren en plakken:
        // {
        //     title: "Jouw Project",
        //     description: "Beschrijving...",
        //     image: "https://jouw-afbeelding-url.jpg",
        //     tags: ["Tag1", "Tag2", "Tag3"]
        // }
    ],

    // ==================== SKILLS ====================
    // Pas je skills aan! Level is 0-100 (percentage)
    skills: [
        { name: "FiveM/Lua", level: 95, icon: "🎮" },
        { name: "ESX Framework", level: 90, icon: "⚙️" },
        { name: "OX Inventory/Lib", level: 85, icon: "📦" },
        { name: "JavaScript/HTML", level: 80, icon: "💻" },
        { name: "MySQL/Database", level: 75, icon: "🗄️" },
        { name: "UI/UX Design", level: 70, icon: "🎨" }
        // Voeg meer skills toe:
        // { name: "QBCore", level: 80, icon: "🔧" }
    ]
};

// Maak de config beschikbaar voor andere scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}