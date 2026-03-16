const portfolioConfig = {
    // Profiel foto URL - vervang dit met je eigen foto
    profile: {
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80",
        // Of gebruik je eigen gehoste foto:
        // image: "https://jouw-domein.nl/foto.jpg"
    },

    contact: {
        discordUsername: "official_thijs",
        discordLink: "https://discord.com/users/636813350453379072"
    },

    stats: {
        baseScripts: 104,
        baseClients: 6
    },

    // Werkervaring - voeg hier je eigen ervaring toe
    experience: [{
            date: "2026 - Heden",
            title: "Eigenaar & Developer",
            company: "Tatta Roleplay",
            description: "Na lange tijd voor andere gewerkt te hebben had ik een ingeveging gekregen om weer voor mezelf te beginnen en hier ook al mijn moeite in te steken met passie.",
            tags: ["Lua", "OX Lib", "Framework", "Ui Design"]
        },
        {
            date: "2026 - Heden",
            title: "Head Developer",
            company: "Yesterday Roleplay",
            description: "Werk momenteel voor Yesterday Roleplay waar ik scripts voor ontwikkel en onderhoud pleeg. Ook help ik beginnende developers met het leren van het vak.",
            tags: ["Loondienst", "Teamverband"]
        },
        {
            date: "2025 - 2026",
            title: "Head Developer",
            company: "Driedorp Roleplay",
            description: "Groot schalig project waarbij ik een server heb ontwikkelt van de grond af aan en hier de leiding over had, ben in deze periode ook begonnen met het maken van ui's en leren van java script.",
            tags: ["Loondienst", "UI Design"]
        },
        {
            date: "2025 - 2026",
            title: "Eigenaar & Developer",
            company: "OT Services",
            description: "Eigen scripts beginnen te ontwikkelen en begonnen aan klein schalige projecten.",
            tags: ["OX Lib", "Lua"]
        },
        {
            date: "2024 - 2025",
            title: "Eigenaar & Developer",
            company: "Tatta Roleplay",
            description: "Mijn eigen fivem server gestart en uitgebouwd bestaand uit bestaande scripts.",
            tags: ["Lua", "ESX"]
        }
    ],

    projects: [{
        title: "OTNET Anticheat",
        description: "Custom anticheat systeem met ingebouwde staffmenu.",
        image: "https://images.unsplash.com/photo-1563206767-5b1d1293e9e7?w=800&q=80",
        tags: ["Anticheat", "Admin", "Security", "Lua"]
    }],

    skills: [
        { name: "Lua", level: 95, icon: "🎮" },
        { name: "HTML", level: 80, icon: "⚙️" },
        { name: "JavaScript", level: 55, icon: "💻" },
        { name: "SQL", level: 65, icon: "🗄️" },
        { name: "CSS", level: 75, icon: "🎨" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}