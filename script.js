//   let teamGames = [
//   {
//     id: 1,
//     title: "The Legend of Zelda: Breath of the Wild",
//     genre: "Aventure",
//     rating: 10/2,
//     image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
//     description: "Un chef-d'œuvre en monde ouvert qui m'a rappelé pourquoi j'aime les jeux vidéo. Parfait pour la détente après le code !",
//     member: "rida",
//     liked: true,
//     dateAdded: "2025-01-10",
//   },
//   {
//     id: 2,
//     title: "Cities: Skylines",
//     genre: "Simulation",
//     rating: 9/2,
//     image: "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg",
//     description: "En tant que team lead, j'adore construire et organiser des villes. Ça m'aide à réfléchir à l'architecture de nos projets !",
//     member: "rida",
//     liked: true,
//     dateAdded: "2025-01-15",
//   },
//   {
//     id: 7,
//     title: "Human Resource Machine",
//     genre: "Programmation",
//     rating: 9/2,
//     image: "https://cdn.cloudflare.steamstatic.com/steam/apps/375820/header.jpg",
//     description: "Un jeu qui enseigne la programmation ! Parfait pour apprendre les algorithmes en s'amusant.",
//     member: "rida",
//     liked: true,
//     dateAdded: "2025-01-22",
//   },
//   {
//   "id": 3,
//   "title": "Elden Ring",
//   "genre": "Action RPG",
//   "rating": 9.7/2,
//   "image": "https://www.xbox.com/FR-CH/games/store/elden-ring/9P3J32CTXLRZ?id=Pubsalegame_Week43",
//   "description": "A brutal and mysterious open world. I enjoy the challenges it offers, just like the complex technical problems we face in our projects.",
//   "member": "rida",
//   "liked": true,
//   "dateAdded": "2025-07-17"
//  },
//   {
//   "id": 4,
//   "title": "Minecraft",
//   "genre": "Sandbox / Survival",
//   "rating": 9.5/2,
//   "image": "https://xboxwire.thesourcemediaassets.com/sites/2/2024/05/Hero-8c18da7c19a1a8811ddb.jpg",
//   "description": "Endless creativity and exploration. It reminds me how important freedom and experimentation are in both code and design.",
//   "member": "rida",
//   "liked": true,
//   "dateAdded": "2025-07-17"
// },
//   {
//     id: 5,
//     title: "Factorio",
//     genre: "Simulation",
//     rating: 10/2,
//     image: "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg",
//     description: "Optimiser des chaînes de production, c'est exactement comme optimiser du code backend. Addictif !",
//     member: "Ilyass",
//     liked: true,
//     dateAdded: "2025-01-08",
//   },
//   {
//     id: 6,
//     title: "Cyberpunk 2077",
//     genre: "RPG",
//     rating: 8/2,
//     image: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNNjLZGCfDvBwQnxckV.png",
//     description: "Un univers cyberpunk qui me donne des idées pour mes API. L'ambiance tech est parfaite !",
//     member: "Ilyass",
//     liked: false,
//     dateAdded: "2025-01-20",
//   },
//   {
//     id: 7,
//     title: "God of War",
//     genre: "Action/Aventure",
//     rating: 10/2,
//     image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/b4Q1XWtNdcbjFHCnKNUzpNwm.png",
//     description: "Une expérience narrative exceptionnelle qui montre l'importance du leadership et de la direction d'équipe.",
//     member: "rida",
//     liked: true,
//     dateAdded: "2025-01-10",
//   },
//   {
//     id: 8,
//     title: "Minecraft",
//     genre: "Créatif/Survie",
//     rating: 9/2,
//     image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Homepage_Discover-Minecraft_832x468.jpg",
//     description: "Construire et organiser des structures complexes, parfait pour planifier l'architecture de nos projets !",
//     member: "rida",
//     liked: true,
//     dateAdded: "2025-01-15",
//   }
// ];
//         let showAsList = false;
//         let currentFilter = "all";

//         const teamMembers = {
//             Ilyass: { emoji: "👨‍💻", role: "TeamMember", color: "ilyass" },
//             Ihab: { emoji: "👩‍💻", role: "TeamMember", color: "ihab" },
//             rida: { emoji: "👨‍💻", role: "TeamMember", color: "rida" },
//         };

//         function loadData() {
//           const savedGames = localStorage.getItem("teamGames");
//           if (savedGames) {
//             teamGames = JSON.parse(savedGames);
//           }

//           const savedView = localStorage.getItem("showAsList");
//           if (savedView) {
//             showAsList = JSON.parse(savedView);
//           }

//           const savedFilter = localStorage.getItem("currentFilter");
//           if (savedFilter) {
//             currentFilter = savedFilter;
//           }
          
//           document.getElementById("memberFilter").value = currentFilter;
//         }

//         function saveData() {
//           localStorage.setItem("teamGames", JSON.stringify(teamGames));
//           localStorage.setItem("showAsList", JSON.stringify(showAsList));
//           localStorage.setItem("currentFilter", currentFilter);
//         }

//         function createStars(rating) {
//           let stars = "";
//           for (let i = 1; i <= 5; i++) {
//             if (i <= rating) {
//               stars += "★";
//             } else {
//               stars += "☆";
//             }
//           }
//           return stars;
//         }

//         function getFilteredGames() {
//           if (currentFilter === "all") {
//             return teamGames;
//           }
//           return teamGames.filter((game) => game.member === currentFilter);
//         }

//         function showGames() {
//           const container = document.getElementById("gamesContainer");
//           const filteredGames = getFilteredGames();

//           if (showAsList) {
//             container.className = "games-container list-view";
//           } else {
//             container.className = "games-container";
//           }

//           let html = "";
//           filteredGames.forEach((game) => {
//             const member = teamMembers[game.member];
//             let imageHtml;
//             if(game.image)
//               imageHtml = `<img src="${game.image}" alt="${game.title}" class="game-image">`;
//             else
//                imageHtml = `<div class="game-image-placeholder">🎮</div>`;

//             html += `
//                     <div class="game-card">
//                         ${imageHtml}
//                         <div class="game-content">
//                             <div class="member-badge ${member.color}">
//                                 ${member.emoji} ${game.member} - ${member.role}
//                             </div>
//                             <div class="game-header">
//                                 <div class="game-info">
//                                     <div class="game-title">${game.title}</div>
//                                     <div class="game-genre">${game.genre}</div>
//                                 </div>
//                                 <button class="delete-btn" onclick="removeGame(${game.id})">🗑️</button>
//                             </div>
                            
//                             <div class="game-rating">
//                                 <div class="stars">${createStars(game.rating)}</div>
//                                 <span class="rating-number">${game.rating}/10</span>
//                             </div>
                            
//                             <div class="game-description">${game.description}</div>
                            
//                             <div class="game-actions">
//                                 <button class="like-btn ${game.liked ? "liked" : ""}" onclick="toggleLike(${game.id})">
//                                     ${game.liked ? "❤️ Aimé par l'équipe" : "🤍 Aimer"}
//                                 </button>
//                                 <button class="details-btn" onclick="showDetails(${game.id})">📋 Détails</button>
//                             </div>
//                         </div>
//                     </div>
//                 `;
//           });

//           if (filteredGames.length === 0) {
//             html = `
//                     <div class="empty-state">
//                         <h3>Aucun jeu trouvé pour ${currentFilter}</h3>
//                         <p>Ce membre n'a pas encore ajouté de jeux favoris !</p>
//                     </div>
//                 `;
//           }

//           container.innerHTML = html;
//           updateStats();
//         }

//         function toggleLike(gameId) {
//           const game = teamGames.find((g) => g.id === gameId);
//           if (game) {
//             game.liked = !game.liked;
//             saveData();
//             showGames();
//           }
//         }

//         function removeGame(gameId) {
//           const game = teamGames.find((g) => g.id === gameId);
//           if (
//             game &&
//             confirm(
//               `Voulez-vous vraiment supprimer "${game.title}" de ${game.member} ?`
//             )
//           ) {
//             teamGames = teamGames.filter((g) => g.id !== gameId);
//             saveData();
//             showGames();
//           }
//         }

//         function showDetails(gameId) {
//           const game = teamGames.find((g) => g.id === gameId);
//           if (game) {
//             const member = teamMembers[game.member];
//             alert(
//               `🎮 ${game.title}\n${member.emoji} Ajouté par: ${game.member} (${member.role})\n🏷️ Genre: ${game.genre}\n⭐ Note: ${game.rating}/10\n❤️ ${game.liked ? "Aimé par l'équipe" : "Pas encore voté"}\n📅 Ajouté le: ${game.dateAdded}\n\n💭 Description: \n${game.description}`
//             );
//           }
//         }

//         function updateStats() {
//           const filteredGames = getFilteredGames();
//           const total = teamGames.length;
//           const teamFavorites = teamGames.filter((game) => game.liked).length;

//           document.getElementById("totalGames").textContent = filteredGames.length;
//           document.getElementById("teamFavorites").textContent = teamFavorites;
//         }

//         function changeView() {
//           showAsList = !showAsList;
//           saveData();
//           showGames();

//           const button = document.getElementById("toggleViewBtn");
//           button.textContent = showAsList ? "📱 Vue grille" : "📋 Vue liste";
//         }

//         function filterByMember() {
//           const select = document.getElementById("memberFilter");
//           currentFilter = select.value;
//           saveData();
//           showGames();
//         }

//         document.addEventListener("DOMContentLoaded", function () {
//           loadData();

//           document.getElementById("toggleViewBtn").addEventListener("click", changeView);
//           document.getElementById("memberFilter").addEventListener("change", filterByMember);

//           const toggleBtn = document.getElementById("toggleViewBtn");
//           toggleBtn.textContent = showAsList ? "📱 Vue grille" : "📋 Vue liste";

//           showGames();
//         });



// Our team's game collection

// Our team's game collection
let teamGames = [
  // rida's favorite games (Team Lead)
  {
    id: 1,
    title: "Call of Duty: Mobile",
    genre: "Action/FPS",
    rating: 9,
    image:
      "https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg",
    description:
      "One of the most popular mobile games in both Morocco and USA. Great for team battles and competitive gaming!",
    member: "rida",
    liked: true,
    dateAdded: "2025-01-10",
  },
  {
    id: 2,
    title: "Fortnite",
    genre: "Battle Royale",
    rating: 8,
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/fortnite/2x1_NSwitch_Fortnite_20250605.jpg",
    description:
      "Extremely popular worldwide, including Morocco and USA. Perfect for team building and strategic thinking!",
    member: "rida",
    liked: true,
    dateAdded: "2025-01-15",
  },
  {
    id: 3,
    title: "Valorant",
    genre: "Tactical FPS",
    rating: 9,
    image:
      "https://cdn.sortiraparis.com/images/80/66131/1103306-valorant-le-jeu-video-signe-riot-games-est-disponible.jpg",
    description:
      "Rising in popularity in Morocco's gaming scene. As team lead, I love the strategic team coordination required!",
    member: "rida",
    liked: true,
    dateAdded: "2025-01-22",
  },

  // Ihab's favorite games (Frontend Dev)
  {
    id: 4,
    title: "PUBG Mobile",
    genre: "Battle Royale",
    rating: 8,
    image:
      "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/PUBG_2.0.jpg",
    description:
      "Hugely popular mobile game in Morocco. The UI design and mobile interface inspire my frontend work!",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-01-12",
  },
  {
    id: 5,
    title: "Clash Royale",
    genre: "Strategy",
    rating: 8,
    image: "https://i.ytimg.com/vi/uWsQ5IWVilM/maxresdefault.jpg",
    description:
      "Popular mobile strategy game worldwide. The card-based UI design is brilliant for mobile UX inspiration!",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-01-18",
  },
  {
    id: 6,
    title: "FIFA 23",
    genre: "Sports",
    rating: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEJH84LMRi5trReCk45rqa7-t1yycGRD5kUv211vEjgEE2FZ4OOFzP1POZgT1xt-nwW0&usqp=CAU",
    description:
      "Football is huge in Morocco! FIFA is extremely popular among Moroccan and American gamers alike.",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-01-20",
  },

  // Ilyass's favorite games (Backend Dev)
  {
    id: 7,
    title: "League of Legends",
    genre: "MOBA",
    rating: 9,
    image:
      "https://egamersworld.com/cdn-cgi/image/width=690,quality=75,format=webp/uploads/blog/1/17/1735564816859_1735564816859.webp",
    description:
      "Massive esports scene in both Morocco and USA. The server architecture and backend systems fascinate me!",
    member: "Ilyass",
    liked: true,
    dateAdded: "2025-01-08",
  },
  {
    id: 8,
    title: "Among Us",
    genre: "Social Deduction",
    rating: 7,
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs_image1600w.jpg",
    description:
      "Became a global phenomenon during pandemic. Popular in Morocco too. Love analyzing the multiplayer networking!",
    member: "Ilyass",
    liked: false,
    dateAdded: "2025-01-20",
  },
  {
    id: 10,
    title: "Minecraft",
    genre: "Sandbox",
    rating: 10,
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft.jpg",
    description:
      "Universal appeal across all ages in both Morocco and USA. Great for creativity and problem-solving!",
    member: "rida",
    liked: true,
    dateAdded: "2025-01-30",
  },
  {
    id: 11,
    title: "Clash of Clans",
    genre: "Strategy",
    rating: 8,
    image:
      "https://fr.egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1%2F17%2F1740901857026_1740901857026.webp&w=1920&q=75",
    description:
      "Long-standing mobile strategy game popular worldwide. The clan system promotes teamwork!",
    member: "Ihab",
    liked: true,
    dateAdded: "2025-02-01",
  },
  {
    id: 12,
    title: "Rocket League",
    genre: "Sports/Racing",
    rating: 9,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
    description:
      "Unique car-soccer game that's gained popularity in Morocco's gaming community. Great for team coordination!",
    member: "Ilyass",
    liked: true,
    dateAdded: "2025-02-05",
  },
];
let showAsList = false;
let currentFilter = "all";

// Team members
const teamMembers = {
  Ilyass: { emoji: "👨‍💻", role: "TeamMember", color: "ilyass" },
  Ihab: { emoji: "👩‍💻", role: "TeamMember", color: "ihab" },
  rida: { emoji: "👨‍💻", role: "TeamMember", color: "rida" },
};

//load all infos
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

  // Update the selector with the current value
  document.getElementById("memberFilter").value = currentFilter;
}

// Save data
function saveData() {
  localStorage.setItem("teamGames", JSON.stringify(teamGames));
  localStorage.setItem("showAsList", JSON.stringify(showAsList));
  localStorage.setItem("currentFilter", currentFilter);
}

// Create stars for rating
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

// Filter games by selected member
function getFilteredGames() {
  if (currentFilter === "all") {
    return teamGames;
  }
  // else
  // {

  // }for(loop)get member
  return teamGames.filter((game) => game.member === currentFilter);
}

// Display team games
function showGames() {
  const container = document.getElementById("gamesContainer");
  const filteredGames = getFilteredGames();

  // Change style according to view
  if (showAsList) {
    container.className = "games-container list-view";
  } else {
    container.className = "games-container";
  }

  // Create HTML for each game
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
                                <span class="rating-number">${game.rating}/10</span>
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

  // Display message if no games for this member
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

// Like/unlike a game (team vote)
function toggleLike(gameId) {
  const game = teamGames.find((g) => g.id === gameId);
  if (game) {
    game.liked = !game.liked;
    saveData();
    showGames();
  }
}

// Remove a game
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

// Show game details
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

// Update team statistics
function updateStats() {
  const filteredGames = getFilteredGames();
  const total = teamGames.length;
  const teamFavorites = teamGames.filter((game) => game.liked).length;

  document.getElementById("totalGames").textContent = filteredGames.length;
  document.getElementById("teamFavorites").textContent = teamFavorites;
}

// Change view (grid/list)
function changeView() {
  showAsList = !showAsList;
  saveData();
  showGames();

  const button = document.getElementById("toggleViewBtn");
  button.textContent = showAsList ? "📱 Grid view" : "📋 List view";
}

// Filter by member
function filterByMember() {
  const select = document.getElementById("memberFilter");
  currentFilter = select.value;
  saveData();
  showGames();
}

// When the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Load data
  loadData();

  // Configure buttons and events
  document
    .getElementById("toggleViewBtn")
    .addEventListener("click", changeView);
  document
    .getElementById("memberFilter")
    .addEventListener("change", filterByMember);

  // Configure view button text
  const toggleBtn = document.getElementById("toggleViewBtn");
  toggleBtn.textContent = showAsList ? "📱 Grid view" : "📋 List view";

  // Display games
  showGames();

  console.log("🎮 Team collection loaded!");
  console.log("👥 Members: rida (Frontend), Ihab (Frontend), Ilyass (Backend)");
  console.log(
    `📊 ${teamGames.length} games total in our collaborative collection`
  );
});
