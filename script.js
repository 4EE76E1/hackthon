  // Collection de jeux de notre équipe

  // Collection de jeux de notre équipe
let teamGames = [
  // Jeux favoris de rida (Team Lead)
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Aventure",
    rating: 10,
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    description: "Un chef-d'œuvre en monde ouvert qui m'a rappelé pourquoi j'aime les jeux vidéo. Parfait pour la détente après le code !",
    member: "rida", // ✅ Changé de "Alex" à "rida"
    liked: true,
    dateAdded: "2025-01-10",
  },
  {
    id: 2,
    title: "Cities: Skylines",
    genre: "Simulation",
    rating: 9,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg",
    description: "En tant que team lead, j'adore construire et organiser des villes. Ça m'aide à réfléchir à l'architecture de nos projets !",
    member: "rida", // ✅ Changé de "Alex" à "rida"
    liked: true,
    dateAdded: "2025-01-15",
  },
  {
    id: 7,
    title: "Human Resource Machine",
    genre: "Programmation",
    rating: 9,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/375820/header.jpg",
    description: "Un jeu qui enseigne la programmation ! Parfait pour apprendre les algorithmes en s'amusant.",
    member: "rida", // ✅ Changé de "Alex" à "rida"
    liked: true,
    dateAdded: "2025-01-22",
  },

  // Jeux favoris d'Ihab (Frontend Dev)
  {
    id: 3,
    title: "Journey",
    genre: "Aventure Artistique",
    rating: 10,
    image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/AC2QRLJvE8qKbDI1L99FqGC2.png",
    description: "L'art visuel de ce jeu m'inspire énormément pour mes designs frontend. Les couleurs et animations sont magnifiques !",
    member: "Ihab", // ✅ Changé de "Sarah" à "Ihab"
    liked: true,
    dateAdded: "2025-01-12",
  },
  {
    id: 4,
    title: "Monument Valley",
    genre: "Puzzle",
    rating: 9,
    image: "https://images.squarespace-cdn.com/content/v1/54b7c0e5e4b0563739bd854a/1421254993537-HDVN6L6YSXDUGZ6DHP0F/image-asset.jpeg",
    description: "Ce jeu mobile a révolutionné ma vision du design UI/UX. Chaque niveau est une leçon d'ergonomie !",
    member: "Ihab", // ✅ Changé de "Sarah" à "Ihab"
    liked: true,
    dateAdded: "2025-01-18",
  },

  // Jeux favoris d'Ilyass (Backend Dev)
  {
    id: 5,
    title: "Factorio",
    genre: "Simulation",
    rating: 10,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg",
    description: "Optimiser des chaînes de production, c'est exactement comme optimiser du code backend. Addictif !",
    member: "Ilyass", // ✅ Déjà correct
    liked: true,
    dateAdded: "2025-01-08",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    genre: "RPG",
    rating: 8,
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNNjLZGCfDvBwQnxckV.png",
    description: "Un univers cyberpunk qui me donne des idées pour mes API. L'ambiance tech est parfaite !",
    member: "Ilyass", // ✅ Déjà correct
    liked: false,
    dateAdded: "2025-01-20",
  },
  {
    id: 7,
    title: "God of War",
    genre: "Action/Aventure",
    rating: 10,
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/b4Q1XWtNdcbjFHCnKNUzpNwm.png",
    description: "Une expérience narrative exceptionnelle qui montre l'importance du leadership et de la direction d'équipe.",
    member: "rida",
    liked: true,
    dateAdded: "2025-01-10",
  },
  {
    id: 8,
    title: "Minecraft",
    genre: "Créatif/Survie",
    rating: 9,
    image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Homepage_Discover-Minecraft_832x468.jpg",
    description: "Construire et organiser des structures complexes, parfait pour planifier l'architecture de nos projets !",
    member: "rida",
    liked: true,
    dateAdded: "2025-01-15",
  }
];
        let showAsList = false;
        let currentFilter = "all";

        // Membres de l'équipe
        const teamMembers = {
            Ilyass: { emoji: "👨‍💻", role: "Backend Dev", color: "ilyass" },
            Ihab: { emoji: "👩‍💻", role: "Frontend Dev", color: "ihab" },
            rida: { emoji: "👨‍💻", role: "Front End Dev", color: "rida" },
        };

        // Charger les données sauvegardées
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
          
          // Mettre à jour le sélecteur avec la valeur actuelle
          document.getElementById("memberFilter").value = currentFilter;
        }

        // Sauvegarder les données
        function saveData() {
          localStorage.setItem("teamGames", JSON.stringify(teamGames));
          localStorage.setItem("showAsList", JSON.stringify(showAsList));
          localStorage.setItem("currentFilter", currentFilter);
        }

        // Créer les étoiles pour la note
        function createStars(rating) {
          let stars = "";
          for (let i = 1; i <= 10; i++) {
            if (i <= rating) {
              stars += "★";
            } else {
              stars += "☆";
            }
          }
          return stars;
        }

        // Filtrer les jeux selon le membre sélectionné
        function getFilteredGames() {
          if (currentFilter === "all") {
            return teamGames;
          }
          return teamGames.filter((game) => game.member === currentFilter);
        }

        // Afficher les jeux de l'équipe
        function showGames() {
          const container = document.getElementById("gamesContainer");
          const filteredGames = getFilteredGames();

          // Changer le style selon la vue
          if (showAsList) {
            container.className = "games-container list-view";
          } else {
            container.className = "games-container";
          }

          // Créer le HTML pour chaque jeu
          let html = "";
          filteredGames.forEach((game) => {
            const member = teamMembers[game.member];
            const imageHtml = game.image
              ? `<img src="${game.image}" alt="${game.title}" class="game-image">`
              : `<div class="game-image-placeholder">🎮</div>`;

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
                                    ${game.liked ? "❤️ Aimé par l'équipe" : "🤍 Aimer"}
                                </button>
                                <button class="details-btn" onclick="showDetails(${game.id})">📋 Détails</button>
                            </div>
                        </div>
                    </div>
                `;
          });

          // Afficher un message si aucun jeu pour ce membre
          if (filteredGames.length === 0) {
            html = `
                    <div class="empty-state">
                        <h3>Aucun jeu trouvé pour ${currentFilter}</h3>
                        <p>Ce membre n'a pas encore ajouté de jeux favoris !</p>
                    </div>
                `;
          }

          container.innerHTML = html;
          updateStats();
        }

        // Aimer/ne plus aimer un jeu (vote d'équipe)
        function toggleLike(gameId) {
          const game = teamGames.find((g) => g.id === gameId);
          if (game) {
            game.liked = !game.liked;
            saveData();
            showGames();
          }
        }

        // Supprimer un jeu
        function removeGame(gameId) {
          const game = teamGames.find((g) => g.id === gameId);
          if (
            game &&
            confirm(
              `Voulez-vous vraiment supprimer "${game.title}" de ${game.member} ?`
            )
          ) {
            teamGames = teamGames.filter((g) => g.id !== gameId);
            saveData();
            showGames();
          }
        }

        // Montrer les détails d'un jeu
        function showDetails(gameId) {
          const game = teamGames.find((g) => g.id === gameId);
          if (game) {
            const member = teamMembers[game.member];
            alert(
              `🎮 ${game.title}\n${member.emoji} Ajouté par: ${game.member} (${member.role})\n🏷️ Genre: ${game.genre}\n⭐ Note: ${game.rating}/10\n❤️ ${game.liked ? "Aimé par l'équipe" : "Pas encore voté"}\n📅 Ajouté le: ${game.dateAdded}\n\n💭 Avis personnel:\n${game.description}`
            );
          }
        }

        // Mettre à jour les statistiques de l'équipe
        function updateStats() {
          const filteredGames = getFilteredGames();
          const total = teamGames.length;
          const teamFavorites = teamGames.filter((game) => game.liked).length;

          // Trouve le membre le plus actif
          const memberCounts = {};
          teamGames.forEach((game) => {
            memberCounts[game.member] = (memberCounts[game.member] || 0) + 1;
          });
          
          // Gérer le cas où il n'y a pas de jeux
          let activeMember = "Aucun";
          if (Object.keys(memberCounts).length > 0) {
            activeMember = Object.keys(memberCounts).reduce(
              (a, b) => (memberCounts[a] > memberCounts[b] ? a : b),
              Object.keys(memberCounts)[0]
            );
          }

          document.getElementById("totalGames").textContent = filteredGames.length;
          document.getElementById("teamFavorites").textContent = teamFavorites;
          document.getElementById("activeMember").textContent = activeMember;
        }

        // Changer la vue (grille/liste)
        function changeView() {
          showAsList = !showAsList;
          saveData();
          showGames();

          const button = document.getElementById("toggleViewBtn");
          button.textContent = showAsList ? "📱 Vue grille" : "📋 Vue liste";
        }

        // Filtrer par membre
        function filterByMember() {
          const select = document.getElementById("memberFilter");
          currentFilter = select.value;
          saveData();
          showGames();
        }

        // Quand la page se charge
        document.addEventListener("DOMContentLoaded", function () {
          // Charger les données
          loadData();

          // Configurer les boutons et événements
          document.getElementById("toggleViewBtn").addEventListener("click", changeView);
          document.getElementById("memberFilter").addEventListener("change", filterByMember);

          // Configurer le texte du bouton de vue
          const toggleBtn = document.getElementById("toggleViewBtn");
          toggleBtn.textContent = showAsList ? "📱 Vue grille" : "📋 Vue liste";

          // Afficher les jeux
          showGames();

          console.log("🎮 Collection d'équipe chargée !");
          console.log("👥 Membres: rida (Frontend), Ihab (Frontend), Ilyass (Backend)");
          console.log(`📊 ${teamGames.length} jeux au total dans notre collection collaborative`);
        });