// Array of all possible related ROMs
const allRelatedRoms = [
    {
        title: "FIFA 16 Mod FIFA 25 APK OBB DATA Offline Android Download",
        image: "https://ziphynet.com/images/fifa-16-mod-fifa-25.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/fifa-16-mod-fifa-25"
    },
    {
        title: "FIFA 25 APK OBB DATA (FIFA 2025) Offline Download",
        image: "https://ziphynet.com/images/fifa-14-mod-fifa-25.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/fifa-14-mod-fifa-25"
    },
    {
        title: "PES 2025 PPSSPP ISO (PES 25 PSP) Android Download - eFootball",
        image: "https://ziphynet.com/images/ppsspp-pes-2025.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/ppsspp-pes-2025"
    },
    {
        title: "FTS 25 Mod APK OBB DATA Download (First Touch Soccer 2025)",
        image: "https://ziphynet.com/images/fts-2025.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/fts-2025"
    },
    {
        title: "FIFA 2025 PPSSPP ISO File Download (FIFA 25)",
        image: "https://ziphynet.com/images/fifa-2025-ppsspp.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/fifa-2025-ppsspp"
    },
    {
        title: "GTA 5 Mod APK OBB Download For Android (GTA IV)",
        image: "https://ziphynet.com/images/gta-5.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-5"
    },
    {
        title: "GTA San Andreas Mod APK OBB Download For Android (GTA SA)",
        image: "https://ziphynet.com/images/gta-san.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-san"
    },
    {
        title: "GTA San Andreas Mod GTA 5 Apk Obb Download For Android",
        image: "https://ziphynet.com/images/gta-san-mod-gta-5.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-san-mod-gta-5"
    },
    {
        title: "GTA SA Remastered Graphics for GTA 5 Apk Download For Android",
        image: "https://ziphynet.com/images/gta-san-ram-gta-5.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-san-ram-gta-5"
    },
    {
        title: "GTA Liberty City Stories Apk + Obb Download For Android",
        image: "https://ziphynet.com/images/gta-liberty-city.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-liberty-city"
    },
    {
        title: "GTA Vice City Stories Apk + Obb Download For Android",
        image: "https://ziphynet.com/images/gta-vice-city.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-vice-city"
    },
    {
        title: "GTA Mzansi Apk Obb File Download For Android (Latest)",
        image: "https://ziphynet.com/images/gta-mzansi.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-mzansi"
    },
    {
        title: "GTA 4 Apk Obb Data File Download For Android (GTA IV)",
        image: "https://ziphynet.com/images/gta-4.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-4"
    },
    {
        title: "GTA San Andreas Definitive Edition Mod APK Download For Android",
        image: "https://ziphynet.com/images/gta-san-andreas-definitive-edition.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-san-andreas-definitive-edition"
    },
    {
        title: "GTA Vice City Definitive Edition Mod APK Download For Android",
        image: "https://ziphynet.com/images/gta-vice-city-definitive-edition.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-vice-city-definitive-edition"
    },
    {
        title: "GTA 3 Definitive Edition Mod APK Download For Android",
        image: "https://ziphynet.com/images/gta-3-definitive-edition.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-3-definitive-edition"
    },
    {
        title: "Asphalt 9 Legends Mod Apk Download (Unlimited Money) For Android",
        image: "https://ziphynet.com/images/asphalt-legend-9.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/asphalt-legend-9"
    },
    {
        title: "Gangstar Vegas Mod Apk Obb Download For Android (Unlimited Money/VIP 10)",
        image: "https://ziphynet.com/images/gangstar-vegas.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gangstar-vegas"
    },
    {
        title: "Racing Thunder 2 Apk Download For Android",
        image: "https://ziphynet.com/images/racing-thunder-2.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/racing-thunder-2"
    },
    {
        title: "Subway Surfers Mod Apk Download (Unlimited Coins/Key)",
        image: "https://ziphynet.com/images/subway.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/subway"
    },
    {
        title: "Bully Anniversary Edition Mod Apk Obb Download (Unlimited Money) For Android",
        image: "https://ziphynet.com/images/bully-anniversary-edition.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/bully-anniversary-edition"
    },
    {
        title: "Hitman Blood Money Mod Apk Download (Latest version) For Android",
        image: "https://ziphynet.com/images/hitman-blood-money.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/hitman-blood-money"
    },
    {
        title: "Tekken 8 Mod Apk Download For Android",
        image: "https://ziphynet.com/images/tekken-8-apk.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/tekken-8-apk"
    },
    {
        title: "Red Dead Redemption 2 Mod Apk Obb Download For Android (RDR2 Mobile)",
        image: "https://ziphynet.com/images/red-dead-redemption-2-apk.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/red-dead-redemption-2-apk"
    },
    {
        title: "GTA San Andreas Cheater Apk Download (GTA Sa Cheater) For Android",
        image: "https://ziphynet.com/images/gta-san-cheater.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-san-cheater"
    },
    {
        title: "NBA 2K24 Mod Apk Obb Download For Android (Offline)",
        image: "https://ziphynet.com/images/nba-2k24-apk.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/nba-2k24-apk"
    },
    {
        title: "NBA 2K23 Mod Apk Obb Download For Android (Offline)",
        image: "https://ziphynet.com/images/nba-2k23-apk.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/nba-2k23-apk"
    },
    // Add all your other ROMs here...
    // (Keep the same array structure as before)
];

// Function to get random ROMs from the array
function getRandomRoms(count) {
    const shuffled = [...allRelatedRoms];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// Function to display ROMs in the container
function displayRandomRoms() {
    const container = document.getElementById('relatedRomsContainer');
    const randomRoms = getRandomRoms(12); // Get 15 random ROMs
    
    container.innerHTML = ''; // Clear previous content
    
    randomRoms.forEach(rom => {
        const romCard = document.createElement('div');
        romCard.className = 'rom-card';
        romCard.innerHTML = `
            <a href="${rom.url}">
                <img src="${rom.image}" alt="${rom.title}">
                <div class="rom-content">
                    <h3>${rom.title}</h3>
                    
                </div>
            </a>
        `;
        container.appendChild(romCard);
    });
}

// Display ROMs when page loads
document.addEventListener('DOMContentLoaded', displayRandomRoms);