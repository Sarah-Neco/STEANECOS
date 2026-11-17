
const games = [
  {
    id: 1, name: "Horizon: Beyond", genre: "Aventura",
    price: 79.90, oldPrice: 99.90, tag: "DESTAQUE",
    rating: "Muito positiva", score: "94%",
    short: "Uma jornada por paisagens desconhecidas.",
    description: "Atravesse cenários impressionantes, descubra lugares escondidos e conheça personagens em uma aventura de exploração. Este jogo fictício foi criado para demonstrar como as informações podem ser apresentadas de forma clara e organizada.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 2, name: "Emberfall", genre: "Ação",
    price: 49.90, oldPrice: 69.90, tag: "OFERTA",
    rating: "Muito positiva", score: "91%",
    short: "Ação e desafios em um mundo fantástico.",
    description: "Em Emberfall, cada cenário apresenta novos desafios e caminhos para explorar. Uma experiência de ação fictícia com foco em ritmo, descoberta e progressão.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 3, name: "Green Valley", genre: "Simulação",
    price: 29.90, oldPrice: 39.90, tag: "POPULAR",
    rating: "Extremamente positiva", score: "97%",
    short: "Crie, cuide e transforme seu próprio refúgio.",
    description: "Construa seu espaço, organize recursos e acompanhe o crescimento de uma comunidade em uma simulação tranquila. Um título fictício para demonstrar categorias e organização de catálogo.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 4, name: "Astral Tactics", genre: "Estratégia",
    price: 59.90, oldPrice: null, tag: "NOVO",
    rating: "Muito positiva", score: "89%",
    short: "Planeje seus movimentos. Mude o rumo da partida.",
    description: "Pense alguns passos à frente, organize suas unidades e escolha a melhor estratégia para cada cenário. Jogo fictício usado para demonstrar filtros e detalhes.",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 5, name: "Neon District", genre: "Ação",
    price: 39.90, oldPrice: 54.90, tag: "OFERTA",
    rating: "Muito positiva", score: "92%",
    short: "Explore uma cidade iluminada por neon.",
    description: "Uma experiência fictícia ambientada em uma cidade futurista, com exploração urbana e desafios em cada distrito.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519607748493-7f7ca9c4e3a8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 6, name: "Wild Trails", genre: "Aventura",
    price: 24.90, oldPrice: null, tag: "INDIE",
    rating: "Muito positiva", score: "90%",
    short: "Uma viagem por trilhas e lugares selvagens.",
    description: "Descubra trilhas, paisagens e pequenos mistérios em uma aventura independente fictícia.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80"
    ]
  }
];

let library = [3, 1];
let wishlist = [2];
let currentGame = 1;
let libraryFilter = "all";

const $ = id => document.getElementById(id);
const money = n => n.toLocaleString("pt-BR", {
  style: "currency", currency: "BRL"
});

function gameCard(g) {
  return `
    <article class="game-card" data-card="${g.id}">
      <div class="game-image" style="background-image:url('${g.image}')">
        <span class="game-badge">${g.tag}</span>
      </div>
      <div class="game-card-body">
        <div class="game-card-title">
          <b>${g.name}</b>
          <button class="heart ${wishlist.includes(g.id) ? "active" : ""}" data-heart="${g.id}">${wishlist.includes(g.id) ? "♥" : "♡"}</button>
        </div>
        <div class="game-meta">
          <span>${g.genre}</span>
          <span class="game-rating">★ ${g.score}</span>
        </div>
        <div class="price-line">
          <strong>${money(g.price)}</strong>
          <span>${g.oldPrice ? `<small>${money(g.oldPrice)}</small><b class="discount">-${Math.round((1-g.price/g.oldPrice)*100)}%</b>` : ""}</span>
        </div>
      </div>
    </article>`;
}

function bindCards(container) {
  container.querySelectorAll("[data-card]").forEach(el => {
    el.addEventListener("click", e => {
      if (e.target.closest("[data-heart]")) return;
      openDetails(Number(el.dataset.card));
    });
  });

  container.querySelectorAll("[data-heart]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleWishlist(Number(btn.dataset.heart));
    });
  });
}

function renderHome() {
  $("featuredGrid").innerHTML = games.slice(0,4).map(gameCard).join("");
  $("offersGrid").innerHTML = games.filter(g => g.oldPrice).slice(0,4).map(gameCard).join("");

  $("recommendedList").innerHTML = games.slice(1,4).map(g => `
    <div class="recommend-item" data-recommend="${g.id}">
      <div class="recommend-thumb" style="background-image:url('${g.thumb}')"></div>
      <div><b>${g.name}</b><small>${g.genre} · ${g.short}</small><em>★ ${g.score} avaliação positiva</em></div>
    </div>`).join("");

  document.querySelectorAll("[data-recommend]").forEach(el =>
    el.addEventListener("click", () => openDetails(Number(el.dataset.recommend)))
  );

  bindCards($("featuredGrid"));
  bindCards($("offersGrid"));
}

function renderExplore() {
  const q = $("searchInput").value.trim().toLowerCase();
  const genre = $("genreFilter").value;
  const sort = $("sortFilter").value;

  let arr = games.filter(g =>
    (g.name + " " + g.genre + " " + g.short).toLowerCase().includes(q) &&
    (!genre || g.genre === genre)
  );

  if (sort === "name") arr.sort((a,b) => a.name.localeCompare(b.name));
  if (sort === "price-low") arr.sort((a,b) => a.price-b.price);
  if (sort === "price-high") arr.sort((a,b) => b.price-a.price);

  $("exploreGrid").innerHTML = arr.length
    ? arr.map(gameCard).join("")
    : '<div class="empty-inline">Nenhum jogo encontrado. Tente mudar a busca ou os filtros.</div>';

  $("resultCount").textContent = `${arr.length} jogos encontrados`;
  $("activeFilters").textContent = [
    genre ? `Gênero: ${genre}` : "",
    q ? `Busca: “${q}”` : ""
  ].filter(Boolean).join(" · ");

  bindCards($("exploreGrid"));
}

function renderLibrary() {
  const q = $("librarySearch").value.trim().toLowerCase();
  let arr = games.filter(g => library.includes(g.id));

  if (libraryFilter === "recent") arr = arr.slice().reverse().slice(0,2);
  if (libraryFilter === "favorites") arr = arr.filter(g => wishlist.includes(g.id));

  arr = arr.filter(g => g.name.toLowerCase().includes(q));
  $("libraryCount").textContent = `${library.length} jogos`;

  $("libraryContent").innerHTML = arr.length
    ? arr.map(g => `
      <article class="library-row" data-library-game="${g.id}">
        <div class="library-thumb" style="background-image:url('${g.thumb}')"></div>
        <div><b>${g.name}</b><small>${g.genre} · Adicionado à sua coleção</small></div>
        <span class="library-status">● Na biblioteca</span>
      </article>`).join("")
    : '<div class="empty-inline">Não encontramos jogos nesta seção.</div>';

  document.querySelectorAll("[data-library-game]").forEach(el =>
    el.addEventListener("click", () => openDetails(Number(el.dataset.libraryGame)))
  );
}

function renderWishlist() {
  const arr = games.filter(g => wishlist.includes(g.id));
  $("wishlistGrid").innerHTML = arr.map(gameCard).join("");
  $("wishlistEmpty").classList.toggle("hidden", arr.length > 0);
  bindCards($("wishlistGrid"));
}

function navigate(page) {
  document.querySelectorAll(".page").forEach(p =>
    p.classList.toggle("active", p.id === page)
  );

  document.querySelectorAll(".nav-item").forEach(b =>
    b.classList.toggle("active", b.dataset.page === page)
  );

  document.querySelectorAll(".top-link").forEach(b =>
    b.classList.toggle("active", b.dataset.page === page)
  );

  if (page === "explore") renderExplore();
  if (page === "library") renderLibrary();
  if (page === "wishlist") renderWishlist();

  window.scrollTo({top:0, behavior:"smooth"});
}

function openDetails(id) {
  const g = games.find(x => x.id === id);
  if (!g) return;

  currentGame = id;
  $("detailTitle").textContent = g.name;
  $("breadcrumbTitle").textContent = g.name;
  $("detailTags").innerHTML = `<span>${g.genre}</span><span>Windows</span><span>${g.tag}</span>`;
  $("detailCover").style.backgroundImage = `url('${g.image}')`;
  $("detailCoverTitle").textContent = g.name;
  $("purchaseArt").style.backgroundImage = `url('${g.thumb}')`;
  $("detailDescription").textContent = g.description;
  $("detailShort").textContent = g.short;
  $("detailPrice").textContent = money(g.price);
  $("detailGenre").textContent = g.genre;
  $("screenshotsRow").innerHTML = g.screens.map(src =>
    `<div class="screenshot" style="background-image:url('${src}')"></div>`
  ).join("");

  updateDetailButtons();
  navigate("details");
}

function updateDetailButtons() {
  $("addLibraryButton").textContent = library.includes(currentGame)
    ? "✓ Adicionado à biblioteca"
    : "Adicionar à biblioteca";

  $("favoriteButton").textContent = wishlist.includes(currentGame)
    ? "♥ Remover da lista de desejos"
    : "♡ Adicionar à lista de desejos";
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id)
    ? wishlist.filter(x => x !== id)
    : [...wishlist, id];

  renderHome();
  renderWishlist();
  renderLibrary();

  if (currentGame === id) updateDetailButtons();

  showToast(wishlist.includes(id)
    ? "Adicionado à lista de desejos."
    : "Removido da lista de desejos.");
}

function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => t.classList.remove("show"), 2400);
}

document.querySelectorAll("[data-page]").forEach(btn =>
  btn.addEventListener("click", () => navigate(btn.dataset.page))
);

document.querySelectorAll("[data-open-game]").forEach(btn =>
  btn.addEventListener("click", () => openDetails(Number(btn.dataset.openGame)))
);

document.querySelectorAll("[data-category]").forEach(btn =>
  btn.addEventListener("click", () => {
    $("genreFilter").value = btn.dataset.category;
    navigate("explore");
    renderExplore();
  })
);

$("searchInput").addEventListener("input", renderExplore);
$("genreFilter").addEventListener("change", renderExplore);
$("sortFilter").addEventListener("change", renderExplore);

$("globalSearch").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    $("searchInput").value = e.target.value;
    navigate("explore");
    renderExplore();
  }
});

$("librarySearch").addEventListener("input", renderLibrary);

document.querySelectorAll("[data-library-filter]").forEach(btn =>
  btn.addEventListener("click", () => {
    libraryFilter = btn.dataset.libraryFilter;
    document.querySelectorAll("[data-library-filter]").forEach(b =>
      b.classList.toggle("active", b === btn)
    );
    renderLibrary();
  })
);

$("addLibraryButton").addEventListener("click", () => {
  if (!library.includes(currentGame)) {
    library.push(currentGame);
    showToast("Jogo adicionado à biblioteca!");
  } else {
    showToast("Este jogo já está na biblioteca.");
  }
  renderLibrary();
  updateDetailButtons();
});

$("favoriteButton").addEventListener("click", () => toggleWishlist(currentGame));

document.querySelectorAll("[data-setting]").forEach(input =>
  input.addEventListener("change", () => {
    const setting = input.dataset.setting;

    if (setting === "compact")
      document.body.classList.toggle("compact", input.checked);

    if (setting === "motion")
      document.body.classList.toggle("reduce-motion", input.checked);

    if (setting === "recommendations")
      $("recommendedList").parentElement.style.display = input.checked ? "block" : "none";

    if (setting === "ratings")
      document.body.classList.toggle("hide-ratings", !input.checked);

    showToast("Preferência atualizada.");
  })
);

renderHome();
renderExplore();
renderLibrary();
renderWishlist();
