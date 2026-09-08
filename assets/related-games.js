// Array of all possible related ROMs
const allRelatedRoms = [
    {
        title: "God Of War Chains Of Olympus PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/god-of-war-chain.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/god-of-war-chain"
    },
    {
        title: "God Of War Ghost Of Sparta PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/god-of-war-ghost.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/god-of-war-ghost"
    },
    {
        title: "Tekken 5 Dark Resurrection PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/tekken-5.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/tekken-5"
    },
    {
        title: "Naruto Shippuden Ultimate Ninja Heroes PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/naruto-shippuden-ultimate-ninja-heroes.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/naruto-shippuden-ultimate-ninja-heroes"
    },
    {
        title: "Prince Of Persia Revelations PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/prince-of-persia-revelations.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/prince-of-persia-revelations"
    },
    {
        title: "Dragon Ball Z Shin Budokai 7 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/dragon-ball-7.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/dragon-ball-7"
    },
    {
        title: "Spider Man 3 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/spider-3-psp.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/spider-3-psp"
    },
    {
        title: "Downhill Domination PPSSPP ISO Zip File Download",
        image: "https://ziphynet.com/images/downhill-domination.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/downhill-domination"
    },
    {
        title: "Jump Force PPSSPP ISO Zip File Download Highly Compressed For Android",
        image: "https://ziphynet.com/images/jump-force.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/jump-force"
    },
    {
        title: "God Of War 2 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/god-of-war-2.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/god-of-war-2"
    },
    {
        title: "Tekken 7 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/tekken-7.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/tekken-7"
    },
    {
        title: "Resident Evil 4 PPSSPP ISO Zip File Download",
        image: "https://ziphynet.com/images/resident-evil-4.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/resident-evil-4"
    },
    {
        title: "GTA 5 PPSSPP ISO Zip File Download For Android (GTA V)",
        image: "https://ziphynet.com/images/gta-5-psp.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-5-psp"
    },
    {
        title: "GTA San Andreas PPSSPP ISO Zip File Download For Android (GTA SA)",
        image: "https://ziphynet.com/images/gta-san-psp.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-san-psp"
    },
    {
        title: "GTA Liberty City Stories PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/gta-liberty-city.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-liberty-city"
    },
    {
        title: "GTA Vice City Stories PPSSPP ISO Zip File Download For Android",
        image: "https://ziphynet.com/images/gta-vice-city-psp.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/gta-vice-city-psp"
    },
    {
        title: "GTA 4 PPSSPP ISO Zip File Download For Android (GTA IV)",
        image: "https://ziphynet.com/images/gta-4-psp.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/gta-4-psp"
    },
    {
        title: "WWE 2K24 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/wwe-2k24.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/wwe-2k24"
    },
    {
        title: "WWE 2K23 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/wwe-2k23.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/wwe-2k23"
    },
    {
        title: "WWE 2K22 PPSSPP ISO Zip File Download Highly Compressed For Android",
        image: "https://ziphynet.com/images/wwe-2k22.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/wwe-2k22"
    },
    {
        title: "Syphon Filter Logan's Shadow PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/syphon-filter-logans-shadow.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/syphon-filter-logans-shadow"
    },
    {
        title: "Soul Calibur Broken Destiny PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/soul-calibur.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/soul-calibur"
    },
    {
        title: "Mortal Kombat 11 PPSSPP ISO Zip File Download",
        image: "https://ziphynet.com/images/mortal-kombat-11.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/mortal-kombat-11"
    },
    {
        title: "Mortal Kombat 9 PPSSPP ISO Zip File Download",
        image: "https://ziphynet.com/images/mortal-kombat-9.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/mortal-kombat-9"
    },
    {
        title: "Mortal Kombat Shaolin Monks PPSSPP ISO Zip File Download",
        image: "https://ziphynet.com/images/mortal-kombat-shaolin-monks.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/mortal-kombat-shaolin-monks"
    },
    {
        title: "Naruto Shippuden Ultimate Ninja Storm 4 PPSSPP ISO Zip File Download",
        image: "https://ziphynet.com/images/naruto-storm-4.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/naruto-storm-4"
    },
    {
        title: "Spider Man 2 PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/spider-man-2.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/spider-man-2"
    },
    {
        title: "Mortal Kombat Unchained PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/mortal-kombat-unchained.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/mortal-kombat-unchained"
    },
    {
        title: "Assassin's Creed Bloodline PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/assassin-creed.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/assassin-creed"
    },
    {
        title: "Spider Man Web Of Shadow PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/spider-man-web-of-shadow.webp",
        downloads: "950K+",
        rating: "4.5/5",
        size: "1.5GB",
        url: "https://ziphynet.com/spider-man-web-of-shadow"
    },
    {
        title: "Tomb Raider Legend PPSSPP ISO - Download Highly Compressed",
        image: "https://ziphynet.com/images/tomb-raider.webp",
        downloads: "1.8M+",
        rating: "4.7/5",
        size: "1.2GB",
        url: "https://ziphynet.com/tomb-raider"
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
    const randomRoms = getRandomRoms(15); // Get 15 random ROMs
    
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