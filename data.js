const weaponsData = [
    // --- ASSAULT RIFLES (AR) ---
    { name: "Kilo 141", class: "Assault Rifle", dmg: 29, fireRate: 68, accuracy: 57 },
    { name: "M13", class: "Assault Rifle", dmg: 24, fireRate: 88, accuracy: 56 },
    { name: "Grau 5.56", class: "Assault Rifle", dmg: 27, fireRate: 73, accuracy: 62 },
    { name: "Krig 6", class: "Assault Rifle", dmg: 30, fireRate: 65, accuracy: 62 },
    { name: "AK-47", class: "Assault Rifle", dmg: 33, fireRate: 55, accuracy: 67 },
    { name: "HVK-30", class: "Assault Rifle", dmg: 23, fireRate: 71, accuracy: 55 },
    { name: "Type 19", class: "Assault Rifle", dmg: 28, fireRate: 75, accuracy: 55 },
    { name: "LK24", class: "Assault Rifle", dmg: 28, fireRate: 63, accuracy: 67 },
    { name: "KN-44", class: "Assault Rifle", dmg: 26, fireRate: 65, accuracy: 55 },
    { name: "DR-H", class: "Assault Rifle", dmg: 32, fireRate: 57, accuracy: 63 },
    { name: "EM2", class: "Assault Rifle", dmg: 36, fireRate: 54, accuracy: 65 },
    { name: "M16", class: "Assault Rifle", dmg: 30, fireRate: 64, accuracy: 69 },
    { name: "ASM10", class: "Assault Rifle", dmg: 34, fireRate: 55, accuracy: 61 },
    { name: "Man-O-War", class: "Assault Rifle", dmg: 37, fireRate: 50, accuracy: 69 },
    { name: "FR .556", class: "Assault Rifle", dmg: 25, fireRate: 68, accuracy: 52 },
    { name: "Peacekeeper MK2", class: "Assault Rifle", dmg: 26, fireRate: 65, accuracy: 54 },
    { name: "AS VAL", class: "Assault Rifle", dmg: 28, fireRate: 80, accuracy: 42 },
    { name: "CR-56 AMAX", class: "Assault Rifle", dmg: 25, fireRate: 71, accuracy: 52 },
    { name: "Oden", class: "Assault Rifle", dmg: 48, fireRate: 41, accuracy: 66 },
    { name: "Maddox", class: "Assault Rifle", dmg: 28, fireRate: 72, accuracy: 56 },
    { name: "FFAR 1", class: "Assault Rifle", dmg: 24, fireRate: 91, accuracy: 48 },
    { name: "AK117", class: "Assault Rifle", dmg: 25, fireRate: 77, accuracy: 50 },
    { name: "BK57", class: "Assault Rifle", dmg: 27, fireRate: 66, accuracy: 57 },
    { name: "ICR-1", class: "Assault Rifle", dmg: 26, fireRate: 60, accuracy: 69 },
    { name: "HBRa3", class: "Assault Rifle", dmg: 26, fireRate: 70, accuracy: 52 },
    { name: "Swordfish", class: "Assault Rifle", dmg: 24, fireRate: 62, accuracy: 74 },
    { name: "TEC-9", class: "Assault Rifle", dmg: 27, fireRate: 65, accuracy: 58 },

    // --- SMGs ---
    { name: "Fennec", class: "SMG", dmg: 23, fireRate: 111, accuracy: 41 },
    { name: "Switchblade X9", class: "SMG", dmg: 27, fireRate: 85, accuracy: 48 },
    { name: "CBR4", class: "SMG", dmg: 24, fireRate: 80, accuracy: 43 },
    { name: "QQ9", class: "SMG", dmg: 25, fireRate: 83, accuracy: 40 },
    { name: "CX-9", class: "SMG", dmg: 24, fireRate: 103, accuracy: 44 },
    { name: "PP19 Bizon", class: "SMG", dmg: 30, fireRate: 65, accuracy: 62 },
    { name: "RUS-79U", class: "SMG", dmg: 28, fireRate: 77, accuracy: 51 },
    { name: "PDW-57", class: "SMG", dmg: 27, fireRate: 75, accuracy: 46 },
    { name: "Chicom", class: "SMG", dmg: 27, fireRate: 62, accuracy: 61 },
    { name: "MSMC", class: "SMG", dmg: 25, fireRate: 92, accuracy: 37 },
    { name: "HG 40", class: "SMG", dmg: 26, fireRate: 67, accuracy: 62 },
    { name: "GKS", class: "SMG", dmg: 28, fireRate: 60, accuracy: 62 },
    { name: "Cordite", class: "SMG", dmg: 24, fireRate: 80, accuracy: 45 },
    { name: "Pharo", class: "SMG", dmg: 34, fireRate: 68, accuracy: 49 },
    { name: "QXR", class: "SMG", dmg: 22, fireRate: 87, accuracy: 53 },
    { name: "PPSh-41", class: "SMG", dmg: 23, fireRate: 82, accuracy: 42 },
    { name: "MAC-10", class: "SMG", dmg: 24, fireRate: 120, accuracy: 34 },
    { name: "KSP 45", class: "SMG", dmg: 34, fireRate: 53, accuracy: 62 },
    { name: "LAPA", class: "SMG", dmg: 26, fireRate: 73, accuracy: 49 },
    { name: "Striker 45", class: "SMG", dmg: 28, fireRate: 70, accuracy: 55 },

    // --- SNIPERS ---
    { name: "DL Q33", class: "Sniper", dmg: 90, fireRate: 28, accuracy: 59 },
    { name: "Locus", class: "Sniper", dmg: 95, fireRate: 28, accuracy: 59 },
    { name: "LW3-Tundra", class: "Sniper", dmg: 91, fireRate: 28, accuracy: 68 },
    { name: "ZRG 20mm", class: "Sniper", dmg: 95, fireRate: 27, accuracy: 62 },
    { name: "Rytec AMR", class: "Sniper", dmg: 85, fireRate: 31, accuracy: 60 },
    { name: "Arctic .50", class: "Sniper", dmg: 83, fireRate: 31, accuracy: 52 },
    { name: "XPR-50", class: "Sniper", dmg: 55, fireRate: 41, accuracy: 50 },
    { name: "M21 EBR", class: "Sniper", dmg: 55, fireRate: 37, accuracy: 61 },
    { name: "Outlaw", class: "Sniper", dmg: 90, fireRate: 28, accuracy: 41 },
    { name: "Koshka", class: "Sniper", dmg: 90, fireRate: 27, accuracy: 62 },
    { name: "HDR", class: "Sniper", dmg: 91, fireRate: 24, accuracy: 70 }
];

const loadoutsData = [
    // --- AR LOADOUTS ---
    { gun: "Kilo 141", type: "Assault Rifle", style: "Flex / Slayer", attachments: ["Monolithic Suppressor", "No Stock", "OWC Laser - Tactical", "Large Extended Mag B", "Granulated Grip Tape"], perks: "Skulker | Quick Fix | Hardline" },
    { gun: "M13", type: "Assault Rifle", style: "High Fire-Rate Shredder", attachments: ["RTC Silencer Barrel", "No Stock", "OWC Laser - Tactical", "Large Extended Mag B", "Granulated Grip Tape"], perks: "Lightweight | Quick Fix | Dead Silence" },
    { gun: "Grau 5.56", type: "Assault Rifle", style: "Main AR / Beamer", attachments: ["Tactical Suppressor", "Tempus 26.4\" Archangel", "No Stock", "XRK Void II", "50 Round Mag"], perks: "Skulker | Toughness | Dead Silence" },
    { gun: "Krig 6", type: "Assault Rifle", style: "Consistent Mid-Range", attachments: ["Agency Suppressor", "16.2\" Task Force", "MIP Laser 5mW", "Field Agent Foregrip", "Large Extended Mag B"], perks: "Skulker | Cold-Blooded | Hardline" },
    { gun: "AK-47", type: "Assault Rifle", style: "BR & Passive MP", attachments: ["Monolithic Suppressor", "OWC Ranger Barrel", "No Stock", "OWC Laser - Tactical", "Large Extended Mag A"], perks: "Flak Jacket | Toughness | Alert" },
    { gun: "HVK-30", type: "Assault Rifle", style: "Large Caliber Meta", attachments: ["Monolithic Suppressor", "MIP Custom Light", "No Stock", "OWC Laser - Tactical", "Large Caliber Ammo"], perks: "Skulker | Quick Fix | Dead Silence" },
    { gun: "DR-H", type: "Assault Rifle", style: "3-Shot Otm Meta", attachments: ["Monolithic Suppressor", "No Stock", "OWC Laser - Tactical", "25 Round OTM Mag", "Granulated Grip Tape"], perks: "Lightweight | Quick Fix | Hardline" },
    { gun: "LK24", type: "Assault Rifle", style: "Passive Laser", attachments: ["Monolithic Suppressor", "OWC Ranger Barrel", "No Stock", "OWC Laser - Tactical", "Granulated Grip Tape"], perks: "Flak Jacket | Toughness | Dead Silence" },

    // --- SMG LOADOUTS ---
    { gun: "Fennec", type: "SMG", style: "Aggressive Close-Range", attachments: ["Monolithic Suppressor", "MIP Extended Light Barrel", "Steady Stock", "OWC Laser - Tactical", "Extended Mag A"], perks: "Lightweight | Gung-Ho | Dead Silence" },
    { gun: "Switchblade X9", type: "SMG", style: "Respawn Slayer", attachments: ["Monolithic Suppressor", "Extended Light Barrel", "MIP Laser 5mW", "Extended Mag A", "Granulated Grip Tape"], perks: "Lightweight | Quick Fix | Hardline" },
    { gun: "CBR4", type: "SMG", style: "Versatile Flex SMG", attachments: ["Monolithic Suppressor", "OWC Marksman", "YKM Light Stock", "OWC Laser - Tactical", "Granulated Grip Tape"], perks: "Skulker | Quick Fix | Dead Silence" },
    { gun: "QQ9", type: "SMG", style: "Fast ADS Run & Gun", attachments: ["Monolithic Suppressor", "RTC Recon Tac Barrel", "No Stock", "OWC Laser - Tactical", "45 Round Extended Mag"], perks: "Lightweight | Gung-Ho | Dead Silence" },
    { gun: "PP19 Bizon", type: "SMG", style: "No Recoil / Large Mag", attachments: ["Monolithic Suppressor", "MIP Extended Light Barrel", "No Stock", "OWC Laser - Tactical", "Granulated Grip Tape"], perks: "Skulker | Cold-Blooded | Hardline" },
    { gun: "CX-9", type: "SMG", style: "Melee-Speed Fire Rate", attachments: ["CX-11 V Barrel", "CX-FR Stock", "OWC Laser - Tactical", "50 Round Drums", "CX-9 Ace Grip"], perks: "Lightweight | Gung-Ho | Alert" },

    // --- SNIPER LOADOUTS ---
    { gun: "DL Q33", type: "Sniper", style: "Aggressive Quickscope", attachments: ["MIP Light Barrel (Short)", "YKM Combat Stock", "OWC Laser - Tactical", "FMJ Perk", "Maevwat Omega Mag"], perks: "Agile | Toughness | Dead Silence" },
    { gun: "Locus", type: "Sniper", style: "Max ADS Speed", attachments: ["YKM Lightweight Short Barrel", "YKM Combat Stock", "OWC Laser - Tactical", "Stopping Power Reload", "Stippled Grip Tape"], perks: "Agile | Toughness | Dead Silence" },
    { gun: "LW3-Tundra", type: "Sniper", style: "Top Meta Sniper", attachments: ["Tactical Suppressor", "28.2\" Extended Barrel", "Outlaw Stock", "Serpent Wrap", "7 Round Speed Mag"], perks: "Agile | Amped | Dead Silence" },
    { gun: "ZRG 20mm", type: "Sniper", style: "1-Shot Vehicle/Body", attachments: ["MIP Light Barrel", "YKM Combat Stock", "OWC Laser - Tactical", "Anti-Vehicle Mag", "Granulated Grip Tape"], perks: "Flak Jacket | Toughness | Hardline" },
    { gun: "Koshka", type: "Sniper", style: "Fast Blankscope", attachments: ["MIP Light Barrel", "Mobility Stock", "OWC Laser - Tactical", "Fast Return Barrel", "Stippled Grip Tape"], perks: "Agile | Toughness | Dead Silence" }
];

