

let teamGames = [
  {
    id: 1,
    title: "Call of Duty: Mobile",
    genre: "Action/FPS",
    rating: 4.5,
    image:
      "https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg",
    description:
      "Fast-paced multiplayer first-person shooter with battle royale and multiplayer modes. Features classic maps and weapons from the Call of Duty franchise.",
    member: "Rida",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 2,
    title: "Fortnite",
    genre: "Battle Royale",
    rating: 4,
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/fortnite/2x1_NSwitch_Fortnite_20250605.jpg",
    description:
      "Battle royale game where 100 players fight to be the last one standing. Features building mechanics, creative modes, and frequent content updates.",
    member: "Rida",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 3,
    title: "Valorant",
    genre: "Tactical FPS",
    rating: 4.5,
    image:
      "https://cdn.sortiraparis.com/images/80/66131/1103306-valorant-le-jeu-video-signe-riot-games-est-disponible.jpg",
    description:
      "Tactical 5v5 character-based shooter with unique agent abilities. Combines precise gunplay with strategic team coordination and map control.",
    member: "Rida",
    liked: true,
    dateAdded: "2025-07-17",
  },

  {
    id: 4,
    title: "PUBG Mobile",
    genre: "Battle Royale",
    rating: 4,
    image:
      "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/PUBG_2.0.jpg",
    description:
      "Battle royale shooter with realistic graphics and tactical gameplay. Features multiple maps, weapons, and vehicles for intense survival combat.",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 5,
    title: "Clash Royale",
    genre: "Strategy",
    rating: 4,
    image: "https://i.ytimg.com/vi/uWsQ5IWVilM/maxresdefault.jpg",
    description:
      "Real-time strategy card game featuring collectible cards and tower defense mechanics. Quick matches with deep strategic gameplay.",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 6,
    title: "FIFA 23",
    genre: "Sports",
    rating: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEJH84LMRi5trReCk45rqa7-t1yycGRD5kUv211vEjgEE2FZ4OOFzP1POZgT1xt-nwW0&usqp=CAU",
    description:
      "Authentic football simulation with realistic player movements, team management, and multiple game modes including Ultimate Team and Career Mode.",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-07-17",
  },

  {
    id: 7,
    title: "League of Legends",
    genre: "MOBA",
    rating: 4.5,
    image:
      "https://egamersworld.com/cdn-cgi/image/width=690,quality=75,format=webp/uploads/blog/1/17/1735564816859_1735564816859.webp",
    description:
      "Multiplayer online battle arena with over 160 unique champions. Strategic team-based gameplay with ranked competitive modes and esports scene.",
    member: "Ilyass",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 8,
    title: "Among Us",
    genre: "Social Deduction",
    rating: 3.5,
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs_image1600w.jpg",
    description:
      "Social deduction game where crewmates complete tasks while impostors sabotage and eliminate players. Simple yet engaging multiplayer experience.",
    member: "Ilyass",
    liked: false,
    dateAdded: "2025-07-17",
  },
  {
    id: 10,
    title: "Minecraft",
    genre: "Sandbox",
    rating: 5,
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft.jpg",
    description:
      "Open-world sandbox game with endless creativity. Build, explore, and survive in procedurally generated worlds with crafting and adventure elements.",
    member: "Rida",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 11,
    title: "Clash of Clans",
    genre: "Strategy",
    rating: 4,
    image:
      "https://fr.egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1%2F17%2F1740901857026_1740901857026.webp&w=1920&q=75",
    description:
      "Mobile strategy game focused on base building, troop management, and clan warfare. Features raids, defense strategies, and cooperative gameplay.",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-07-17",
  },
  {
    id: 12,
    title: "Rocket League",
    genre: "Sports/Racing",
    rating: 4.5,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
    description:
      "Unique vehicular soccer game combining driving mechanics with football. Features aerial maneuvers, customization, and competitive ranked play.",
    member: "Ilyass",
    liked: true,
    dateAdded: "2025-07-17",
  },
];
let showAsList = false;
let currentFilter = "all";

const teamMembers = {
  Ilyass: { emoji: "👨‍💻", role: "TeamMember", color: "Ilyass" },
  Ihab: { emoji: "👩‍💻", role: "TeamMember", color: "Ihab" },
  Rida: { emoji: "👨‍💻", role: "TeamMember", color: "Rida" },
};

function loadData() {
  const savedGames = localStorage.getItem("teamGames");
  if (savedGames) {
    teamGames = JSON.parse(savedGames);
  }

  const savedView = localStorage.getItem("showAsList");
  if (savedView) {
    showAsList = JSON.parse(savedView);
  }

  const savedFilter = localStorage.getItem("currentFilter");
  if (savedFilter) {
    currentFilter = savedFilter;
  }

  document.getElementById("memberFilter").value = currentFilter;
}

function saveData() {
  localStorage.setItem("teamGames", JSON.stringify(teamGames));
  localStorage.setItem("showAsList", JSON.stringify(showAsList));
  localStorage.setItem("currentFilter", currentFilter);
}

function createStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return stars;
}

function getFilteredGames() {
  if (currentFilter === "all") {
    return teamGames;
  }
  return teamGames.filter((game) => game.member === currentFilter);
}

function showGames() {
  const container = document.getElementById("gamesContainer");
  const filteredGames = getFilteredGames();

  if (showAsList) {
    container.className = "games-container list-view";
  } else {
    container.className = "games-container";
  }

  let html = "";
  filteredGames.forEach((game) => {
    const member = teamMembers[game.member];
    let imageHtml;
    if (game.image)
      imageHtml = `<img src="${game.image}" alt="${game.title}" class="game-image">`;
    else imageHtml = `<div class="game-image-placeholder">🎮</div>`;

    html += `
                    <div class="game-card">
                        ${imageHtml}
                        <div class="game-content">
                            <div class="member-badge ${member.color}">
                                ${member.emoji} ${game.member} - ${member.role}
                            </div>
                            <div class="game-header">
                                <div class="game-info">
                                    <div class="game-title">${game.title}</div>
                                    <div class="game-genre">${game.genre}</div>
                                </div>
                                <button class="delete-btn" onclick="removeGame(${game.id})">🗑️</button>
                            </div>
                            
                            <div class="game-rating">
                                <div class="stars">${createStars(game.rating)}</div>
                                <span class="rating-number">${game.rating}</span>
                            </div>
                            
                            <div class="game-description">${game.description}</div>
                            
                            <div class="game-actions">
                                <button class="like-btn ${game.liked ? "liked" : ""}" onclick="toggleLike(${game.id})">
                                    ${game.liked ? "❤️ Liked by team" : "🤍 Like"}
                                </button>
                                <button class="details-btn" onclick="showDetails(${game.id})">📋 Details</button>
                            </div>
                        </div>
                    </div>
                `;
  });

  if (filteredGames.length === 0) {
    html = `
                    <div class="empty-state">
                        <h3>No games found for ${currentFilter}</h3>
                        <p>This member hasn't added any favorite games yet!</p>
                    </div>
                `;
  }

  container.innerHTML = html;
  updateStats();
}

function toggleLike(gameId) {
  const game = teamGames.find((g) => g.id === gameId);
  if (game) {
    game.liked = !game.liked;
    saveData();
    showGames();
  }
}

function removeGame(gameId) {
  const game = teamGames.find((g) => g.id === gameId);
  if (
    game &&
    confirm(`Do you really want to delete "${game.title}" from ${game.member}?`)
  ) {
    teamGames = teamGames.filter((g) => g.id !== gameId);
    saveData();
    showGames();
  }
}

function showDetails(gameId) {
  const game = teamGames.find((g) => g.id === gameId);
  if (game) {
    const member = teamMembers[game.member];
    const stars = createStars(game.rating);

    alert(
      `🎮 ${game.title}\n\n` +
        `${member.emoji} Added by: ${game.member} (${member.role})\n` +
        `🏷️ Genre: ${game.genre}\n` +
        `⭐ Rating: ${stars} (${game.rating}/10)\n` +
        `❤️ ${game.liked ? "Liked by team" : "Not voted yet"}\n` +
        `📅 Added on: ${game.dateAdded}\n\n` +
        `💭 Description:\n${game.description}`
    );
  }
}

function updateStats() {
  const filteredGames = getFilteredGames();
  const total = teamGames.length;
  const teamFavorites = teamGames.filter((game) => game.liked).length;

  document.getElementById("totalGames").textContent = filteredGames.length;
  document.getElementById("teamFavorites").textContent = teamFavorites;
}

function changeView() {
  showAsList = !showAsList;
  saveData();
  showGames();

  const button = document.getElementById("toggleViewBtn");
  button.textContent = showAsList ? "📱 Grid view" : "📋 List view";
}

function filterByMember() {
  const select = document.getElementById("memberFilter");
  currentFilter = select.value;
  saveData();
  showGames();
}

document.addEventListener("DOMContentLoaded", function () {
  loadData();

  document
    .getElementById("toggleViewBtn")
    .addEventListener("click", changeView);
  document
    .getElementById("memberFilter")
    .addEventListener("change", filterByMember);

  const toggleBtn = document.getElementById("toggleViewBtn");
  toggleBtn.textContent = showAsList ? "📱 Grid view" : "📋 List view";

  showGames();
});
