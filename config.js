const portfolioConfig = {
    // Profiel foto URL - vervang dit met je eigen foto
    profile: {
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80",
        // Of gebruik je eigen gehoste foto:
        // image: "https://jouw-domein.nl/foto.jpg"
    },

    contact: {
        discordUsername: "official_thijs",
        discordLink: "https://discord.com/users/JE_USER_ID_HIER"
    },

    stats: {
        baseScripts: 25,
        baseClients: 15
    },

    // Werkervaring - voeg hier je eigen ervaring toe
    experience: [{
            date: "2023 - Heden",
            title: "Lead FiveM Developer",
            company: "Tatta Roleplay",
            description: "Hoofdverantwoordelijke voor alle server-side scripting. Ontwikkeling van custom ESX scripts, anticheat systemen, en UI/UX implementaties. Beheer van een team van 3 developers.",
            tags: ["ESX", "Lua", "MySQL", "Leadership"]
        },
        {
            date: "2022 - 2023",
            title: "FiveM Scripter",
            company: "Freelance",
            description: "Ontwikkeling van custom scripts voor diverse FiveM servers. Specialisatie in inventory systemen, job scripts, en interactieve UI componenten. Meer dan 20 tevreden klanten geholpen.",
            tags: ["Freelance", "UI Design", "OX Inventory"]
        },
        {
            date: "2021 - 2022",
            title: "Junior Developer",
            company: "Eigen Projecten",
            description: "Gestart met FiveM development door eigen projecten te bouwen. Leren werken met ESX framework, Lua programmeren, en database management. Basis gelegd voor huidige expertise.",
            tags: ["Learning", "ESX", "Lua Basics"]
        }
    ],

    projects: [{
            title: "ESX Legacy HUD System",
            description: "Een volledig customizable HUD systeem voor ESX Legacy met OX Lib integratie. Features: cash/bank display, job info, vehicle HUD, en smooth animations.",
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
    ],

    skills: [
        { name: "FiveM/Lua", level: 95, icon: "🎮" },
        { name: "ESX Framework", level: 90, icon: "⚙️" },
        { name: "OX Inventory/Lib", level: 85, icon: "📦" },
        { name: "JavaScript/HTML", level: 80, icon: "💻" },
        { name: "MySQL/Database", level: 75, icon: "🗄️" },
        { name: "UI/UX Design", level: 70, icon: "🎨" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}