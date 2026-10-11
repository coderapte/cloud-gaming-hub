const games = [
  { name: "Subway Surfers", category: "action", description: "Dash through the tracks", icon: "🚇", tone: "tone-violet", source: "Poki", url: "https://poki.com/en/g/subway-surfers", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q=80,width=500,height=320,fit=cover,f=auto/1c920b9279c2bedec567c1b58129ae8f/subway-surfers-logo.png" },
  { name: "Smash Karts", category: "racing", description: "Kart battles with friends", icon: "🏎️", tone: "tone-blue", source: "CrazyGames", url: "https://www.crazygames.com/game/smash-karts", thumbnail: "https://imgs.crazygames.com/smash-karts_16x9/20260210123937/smash-karts_16x9-cover?height=623&metadata=none&quality=70" },
  { name: "Drive Mad", category: "racing", description: "Balance your car to the finish", icon: "🚙", tone: "tone-coral", source: "Poki", url: "https://poki.com/en/g/drive-mad", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q=80,width=500,height=320,fit=cover,f=auto/591d984dcac4fb694f3f8195bb8f6118/drive-mad-logo.png" },
  { name: "Monkey Mart", category: "chill", description: "Run a busy little shop", icon: "🐒", tone: "tone-green", source: "Poki", url: "https://poki.com/en/g/monkey-mart", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D363%2Cheight%3D204%2Cfit%3Dcover%2Cf%3Dauto/4c99063cc6f70aa0b4fc523dfc9acfe5/c/monkey-mart-banana-stand.png" },
  { name: "Moto X3M", category: "racing", description: "Race, flip, and dodge traps", icon: "🏍️", tone: "tone-gold", source: "CrazyGames", url: "https://www.crazygames.com/game/moto-x3m", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D363%2Cheight%3D204%2Cfit%3Dcover%2Cf%3Dauto/ccd9e5b5742db52719db793c3dc6db48/c/moto-x3m-atv-beach-slope.png" },
  { name: "Stickman Hook", category: "action", description: "Swing through each level", icon: "🪝", tone: "tone-pink", source: "Poki", url: "https://poki.com/en/g/stickman-hook", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D363%2Cheight%3D204%2Cfit%3Dcover%2Cf%3Dauto/5f0e2dce53bd9929e0d4feaee103b81a/c/stickman-hook-level-cleared.png" },
  { name: "2048", category: "puzzle", description: "Slide tiles and reach 2048", icon: "🔢", tone: "tone-indigo", source: "Creator", url: "https://play2048.co/", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D1200%2Cheight%3D1200%2Cfit%3Dcover%2Cf%3Dpng/cb8c967c-4a78-4ffa-8506-cbac69746f4f/2048.png" },
  { name: "Drift Boss", category: "racing", description: "Time each turn just right", icon: "🚘", tone: "tone-mint", source: "Poki", url: "https://poki.com/en/g/drift-boss", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D363%2Cheight%3D204%2Cfit%3Dcover%2Cf%3Dauto/8117d934ac67ffc90c6dc639f293eab8/c/drift-boss-main-menu.png" },
  { name: "Shell Shockers", category: "action", description: "Eggs, arenas, and silly battles", icon: "🥚", tone: "tone-orange", source: "CrazyGames", url: "https://www.crazygames.com/game/shellshockersio", thumbnail: "https://imgs.crazygames.com/shellshockersio_16x9/20260203211252/shellshockersio_16x9-cover?height=623&metadata=none&quality=70" },
  { name: "Retro Bowl", category: "action", description: "Build your retro football team", icon: "🏈", tone: "tone-lilac", source: "Poki", url: "https://poki.com/en/g/retro-bowl", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D363%2Cheight%3D204%2Cfit%3Dcover%2Cf%3Dauto/50263b0ff141f0a253152ce2f3e8ccac/c/retro-bowl-offensive-play-routes-first-quarter.png" },
  { name: "Level Devil", category: "puzzle", description: "A tricky platform game", icon: "😈", tone: "tone-red", source: "Poki", url: "https://poki.com/en/g/level-devil", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D363%2Cheight%3D204%2Cfit%3Dcover%2Cf%3Dauto/518a82e77f462ce36d475d67d7fdbdea/c/level-devil-level-3.png" },
  { name: "Aquapark.io", category: "action", description: "Race down a giant waterslide", icon: "🌊", tone: "tone-cyan", source: "Poki", url: "https://poki.com/en/g/aquapark-io", thumbnail: "https://imgs.crazygames.com/aquapark-io-yky_16x9/20251204081022/aquapark-io-yky_16x9-cover?height=623&metadata=none&quality=70" },
  { name: "Hextris", category: "puzzle", description: "Match blocks around a hexagon", icon: "⬡", tone: "tone-violet", source: "Creator", url: "https://hextris.github.io/hextris/", thumbnail: "https://ultimatemen.github.io/Images/hextris.jpg" },
  { name: "Clumsy Bird", category: "action", description: "Guide a bird through the gaps", icon: "🐦", tone: "tone-blue", source: "Creator", url: "https://ellisonleao.github.io/clumsy-bird/", thumbnail: "https://www.epicplay.in/blogs/clumsy-bird-flappy-bird-alternative.jpg" },
  { name: "Mk.js", category: "action", description: "A tiny browser fighting game", icon: "🥊", tone: "tone-red", source: "Creator", url: "https://mk.mgechev.com/", thumbnail: "https://blog.mgechev.com/images/tfjs-cnn/cover.png" },
  { name: "Asteroids", category: "action", description: "Fly, dodge, and clear the field", icon: "☄️", tone: "tone-coral", source: "External", url: "https://www.asteroids.es/en/", thumbnail: "https://plays.org/screenshots/asteroids.png" },
  { name: "Tower of Hanoi", category: "puzzle", description: "Move every disk to the last tower", icon: "🗼", tone: "tone-green", source: "Math Is Fun", url: "https://www.mathsisfun.com/games/tower-of-hanoi/", thumbnail: "https://mathbook.vn/images/towers_of_hanoi.png" },
  { name: "Pac-Man Doodle", category: "action", description: "Google’s playable anniversary doodle", icon: "🟡", tone: "tone-gold", source: "Google", url: "https://www.google.com/logos/2010/pacman10-i.html", thumbnail: "https://cdn.wikimg.net/en/strategywiki/images/a/ab/Google_pac_man.jpg" },
  { name: "Breakout", category: "action", description: "Bounce the ball and clear the bricks", icon: "🧱", tone: "tone-pink", source: "Creator", url: "https://toivjon.github.io/html5-breakout/", thumbnail: "https://raw.githubusercontent.com/terror/breakout/master/screenshots/game.PNG" },
  { name: "HexGL", category: "racing", description: "Race through a neon 3D track", icon: "🏁", tone: "tone-indigo", source: "Creator", url: "https://hexgl.bkcore.com/", thumbnail: "https://linuxmasterclub.com/wp-content/uploads/2021/05/HexGL.-Start-of-the-game.png" },
  { name: "Canvas Tetris", category: "puzzle", description: "Fit the falling blocks together", icon: "🟪", tone: "tone-mint", source: "Creator", url: "https://dionyziz.com/graphics/canvas-tetris/", thumbnail: "https://cloudfront.codeproject.com/game/876475/tetris.png" },
  { name: "Pool Shooter", category: "puzzle", description: "Match three or more pool balls", icon: "🎱", tone: "tone-cyan", source: "HTMLGames", url: "pool-shooter.html", embedded: true },
  { name: "Snaker.io", category: "action", description: "Grow your snake and outlast rivals", icon: "🐍", tone: "tone-green", source: "OnlineGames.io", url: "https://cloud.onlinegames.io/games/2026/more/snaker-io/game.html", thumbnail: "https://www.onlinegames.io/media/posts/1261/responsive/snaker-io-xs.webp" },
  { name: "Steal Brainrots Multiplayer", category: "action", description: "Collect brainrots in a multiplayer game", icon: "🧠", tone: "tone-pink", source: "OnlineGames.io", url: "https://cloud.onlinegames.io/games/2026/unity/steal-brainrots-multiplayer/game.html", thumbnail: "https://www.onlinegames.io/media/posts/1340/steal-brainrots-multiplayer-2.webp" },
  { name: "Space Waves", category: "action", description: "Guide an arrow through tricky obstacles", icon: "🌌", tone: "tone-indigo", source: "CrazyGames", url: "https://www.crazygames.com/game/space-waves", thumbnail: "https://geometry-online.io/data/image/game/space-waves/space-waves-game.png" },
  { name: "Mech Arena", category: "action", description: "Official page · requires app or PC launcher", icon: "🤖", tone: "tone-blue", source: "Plarium", url: "https://plarium.com/en/game/mech-arena/", thumbnail: "https://cdn-www.bluestacks.com/bs-images/Screenshot-2025-06-18-0950411.png" },
  { name: "Roblox", category: "action", description: "Official Roblox website · may launch the Roblox app", icon: "🟥", tone: "tone-red", source: "Roblox", url: "https://www.roblox.com/", thumbnail: "https://images.bannerbear.com/direct/4mGpW3zwpg0ZK0AxQw/requests/000/093/462/336/PwAV5rMNq6OA8400YkBm274Op/61babcdcb2e34bc53b25e145bb95b27272b2d629.jpg" }
];

const grid = document.querySelector("#game-grid");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll(".filter")];
let selectedCategory = "all";

function makeCard(game, index) {
  const card = document.createElement("a");
  card.className = "game-card";
  card.href = game.url;
  if (!game.embedded) {
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  }
  card.setAttribute("aria-label", game.embedded ? `Play ${game.name} on this site` : `Play ${game.name} on ${game.source}; opens in a new tab`);
  card.dataset.category = game.category;
  card.dataset.search = `${game.name} ${game.category} ${game.description} ${game.source}`.toLowerCase();

  const art = document.createElement("div");
  art.className = `game-art ${game.tone}`;

  if (game.thumbnail) {
    art.classList.add("has-thumbnail");
    const thumbnail = document.createElement("img");
    thumbnail.className = "game-thumbnail";
    thumbnail.src = game.thumbnail;
    thumbnail.alt = "";
    thumbnail.loading = "lazy";
    thumbnail.decoding = "async";
    thumbnail.addEventListener("error", () => {
      thumbnail.remove();
      art.classList.remove("has-thumbnail");
    }, { once: true });
    art.append(thumbnail);
  }

  const number = document.createElement("span");
  number.className = "game-index";
  number.textContent = `NO. ${String(index + 1).padStart(2, "0")}`;

  const type = document.createElement("span");
  type.className = "game-type";
  type.textContent = game.category.toUpperCase();

  const icon = document.createElement("span");
  icon.className = "art-symbol";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = game.icon;
  art.append(number, type, icon);

  const info = document.createElement("div");
  info.className = "game-info";

  const copy = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = game.name;
  const description = document.createElement("p");
  description.textContent = game.description;
  copy.append(title, description);

  const badge = document.createElement("span");
  badge.className = "source-badge";
  badge.textContent = game.source;
  info.append(copy, badge);
  card.append(art, info);
  return card;
}

games.forEach((game, index) => grid.append(makeCard(game, index)));

function updateCatalog() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of grid.children) {
    const matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
    const matchesSearch = card.dataset.search.includes(searchTerm);
    card.hidden = !(matchesCategory && matchesSearch);
    if (!card.hidden) visibleCount++;
  }

  emptyState.hidden = visibleCount !== 0;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;
    for (const item of filterButtons) item.classList.toggle("active", item === button);
    updateCatalog();
  });
}

searchInput.addEventListener("input", updateCatalog);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.blur();
    updateCatalog();
  }
});

