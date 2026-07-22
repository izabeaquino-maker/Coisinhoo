// VARIÁVEIS E ESTADO DO JOGO
let collectedItems = [];

// 1. INICIAR O JOGO
function startGame() {
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('bakery-screen').style.display = 'block';
}

// 2. COLETAR INGREDIENTES NA PADARIA
function collectItem(itemName, symbol) {
  if (!collectedItems.includes(itemName)) {
    collectedItems.push(itemName);
    
    // Deixa o item opaco e desabilita cliques repetidos
    const itemElem = document.getElementById(`item-${itemName}`);
    if (itemElem) {
      itemElem.style.opacity = '0.3';
      itemElem.style.pointerEvents = 'none';
    }
  }
}

// 3. SAIR DA PADARIA (FASE 1 -> FASE 2)
function exitBakery() {
  // Verifica se pegou os 4 ingredientes: leite, trigo, ovo e manteiga
  if (collectedItems.length === 4) {
    showAchievement("assaltante de padaria");

    // Aguarda o pop-up da conquista antes de mudar de fase
    setTimeout(() => {
      document.getElementById('bakery-screen').style.display = 'none';
      document.getElementById('kitchen-screen').style.display = 'block';
    }, 2500);
  } else {
    alert("Você ainda precisa pegar todos os ingredientes do bolo! (Leite 🥛, Trigo 🌾, Ovo 🥚 e Manteiga 🧈)");
  }
}

// 4. MISTURAR O BOLO NA COZINHA (FASE 2 -> FASE 3)
function mixCake() {
  const bowl = document.getElementById('bowl');
  const cake = document.getElementById('cake');
  const dialog = document.getElementById('kitchen-dialog');

  if (bowl) bowl.style.display = 'none';
  if (cake) cake.style.display = 'block';
  if (dialog) dialog.innerText = "O bolo está pronto! ✨";

  showAchievement("Bolo de leite ninho com maracuja...embora o de chocolate com maracuja seja melhor");

  // Corta para a festa final
  setTimeout(() => {
    document.getElementById('kitchen-screen').style.display = 'none';
    document.getElementById('party-screen').style.display = 'block';
  }, 4000);
}

// 5. EXIBIR POP-UP DE CONQUISTA
function showAchievement(text) {
  const box = document.getElementById('achievement-box');
  const textElem = document.getElementById('achievement-text');

  if (box && textElem) {
    textElem.innerText = text;
    box.style.display = 'block';

    setTimeout(() => {
      box.style.display = 'none';
    }, 3500);
  }
}
