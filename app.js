// ===== DATA =====
const SKINS = {
  consumer: [
    { name: 'P250 | Sand Dune', price: 12, emoji: '🔫', rarity: 'consumer' },
    { name: 'Glock | Sand Dune', price: 8, emoji: '🔫', rarity: 'consumer' },
    { name: 'MP9 | Sand Dune', price: 10, emoji: '🔫', rarity: 'consumer' },
    { name: 'P2000 | Ivory', price: 15, emoji: '🔫', rarity: 'consumer' },
    { name: 'UMP45 | Sand Dune', price: 11, emoji: '🔫', rarity: 'consumer' },
  ],
  industrial: [
    { name: 'AK-47 | Olive Plaid', price: 45, emoji: '🔫', rarity: 'industrial' },
    { name: 'M4A4 | Desert Storm', price: 38, emoji: '🔫', rarity: 'industrial' },
    { name: 'P90 | Storm', price: 42, emoji: '🔫', rarity: 'industrial' },
    { name: 'USP-S | Stainless', price: 55, emoji: '🔫', rarity: 'industrial' },
  ],
  milSpec: [
    { name: 'AK-47 | Redline', price: 180, emoji: '🔫', rarity: 'mil-spec' },
    { name: 'AWP | Phobos', price: 220, emoji: '🎯', rarity: 'mil-spec' },
    { name: 'M4A1-S | Nightmare', price: 195, emoji: '🔫', rarity: 'mil-spec' },
    { name: 'Glock | Wasteland Rebel', price: 150, emoji: '🔫', rarity: 'mil-spec' },
    { name: 'AUG | Triqua', price: 165, emoji: '🔫', rarity: 'mil-spec' },
  ],
  restricted: [
    { name: 'M4A4 | Howl', price: 890, emoji: '🔫', rarity: 'restricted' },
    { name: 'AK-47 | Fire Serpent', price: 1200, emoji: '🔫', rarity: 'restricted' },
    { name: 'AWP | Asiimov', price: 750, emoji: '🎯', rarity: 'restricted' },
    { name: 'Desert Eagle | Blaze', price: 680, emoji: '🔫', rarity: 'restricted' },
  ],
  classified: [
    { name: 'AK-47 | Wild Lotus', price: 3800, emoji: '🌸', rarity: 'classified' },
    { name: 'AWP | Dragon Lore', price: 8500, emoji: '🐉', rarity: 'classified' },
    { name: 'M4A4 | Poseidon', price: 2900, emoji: '🔱', rarity: 'classified' },
    { name: 'Glock | Fade', price: 1800, emoji: '🌈', rarity: 'classified' },
  ],
  covert: [
    { name: 'AK-47 | Gold Arabesque', price: 12000, emoji: '✨', rarity: 'covert' },
    { name: 'AWP | Medusa', price: 18000, emoji: '🐍', rarity: 'covert' },
    { name: 'M4A1-S | Hot Rod', price: 9500, emoji: '🔥', rarity: 'covert' },
  ],
  gold: [
    { name: '★ Butterfly Knife | Doppler', price: 45000, emoji: '🦋', rarity: 'gold' },
    { name: '★ Karambit | Fade', price: 38000, emoji: '🌈', rarity: 'gold' },
    { name: '★ M9 Bayonet | Marble Fade', price: 32000, emoji: '⚔️', rarity: 'gold' },
    { name: '★ Specialist Gloves | Fade', price: 28000, emoji: '🧤', rarity: 'gold' },
  ],
};

const CASES = [
  {
    id: 1, name: 'Огненный кейс', emoji: '🔥', price: 199,
    oldPrice: 299, badge: 'hot', category: 'cheap',
    glowColor: 'rgba(239,68,68,0.15)',
    topDrop: '★ Karambit | Fade',
    items: [...SKINS.consumer, ...SKINS.consumer, ...SKINS.industrial, ...SKINS.milSpec, ...SKINS.restricted, SKINS.covert[0], SKINS.gold[1]],
  },
  {
    id: 2, name: 'Sapphire Case', emoji: '💎', price: 499,
    oldPrice: null, badge: 'new', category: 'cheap',
    glowColor: 'rgba(79,142,247,0.15)',
    topDrop: '★ Butterfly Knife | Doppler',
    items: [...SKINS.consumer, ...SKINS.industrial, ...SKINS.milSpec, ...SKINS.restricted, ...SKINS.classified, SKINS.covert[1], SKINS.gold[0]],
  },
  {
    id: 3, name: 'Dragon Case', emoji: '🐉', price: 999,
    oldPrice: 1499, badge: null, category: 'medium',
    glowColor: 'rgba(139,92,246,0.15)',
    topDrop: '★ M9 Bayonet | Marble Fade',
    items: [...SKINS.industrial, ...SKINS.milSpec, ...SKINS.milSpec, ...SKINS.restricted, ...SKINS.classified, ...SKINS.covert, SKINS.gold[2]],
  },
  {
    id: 4, name: 'Gold Rush', emoji: '👑', price: 2499,
    oldPrice: null, badge: 'hot', category: 'medium',
    glowColor: 'rgba(255,215,0,0.15)',
    topDrop: '★ Butterfly Knife | Doppler',
    items: [...SKINS.milSpec, ...SKINS.restricted, ...SKINS.restricted, ...SKINS.classified, ...SKINS.covert, ...SKINS.gold],
  },
  {
    id: 5, name: 'Phantom Case', emoji: '👻', price: 349,
    oldPrice: 499, badge: 'new', category: 'cheap',
    glowColor: 'rgba(6,182,212,0.15)',
    topDrop: '★ Specialist Gloves | Fade',
    items: [...SKINS.consumer, ...SKINS.consumer, ...SKINS.industrial, ...SKINS.milSpec, ...SKINS.restricted, SKINS.classified[0], SKINS.gold[3]],
  },
  {
    id: 6, name: 'VIP Premium', emoji: '💫', price: 4999,
    oldPrice: null, badge: 'vip', category: 'premium',
    glowColor: 'rgba(139,92,246,0.2)',
    topDrop: '★ Butterfly Knife | Doppler',
    items: [...SKINS.restricted, ...SKINS.classified, ...SKINS.classified, ...SKINS.covert, ...SKINS.gold, ...SKINS.gold],
  },
  {
    id: 7, name: 'Neon Case', emoji: '⚡', price: 749,
    oldPrice: 999, badge: null, category: 'medium',
    glowColor: 'rgba(34,197,94,0.15)',
    topDrop: '★ Karambit | Fade',
    items: [...SKINS.industrial, ...SKINS.milSpec, ...SKINS.milSpec, ...SKINS.restricted, ...SKINS.classified, SKINS.covert[2], SKINS.gold[0]],
  },
  {
    id: 8, name: 'Iceberg Case', emoji: '🧊', price: 1499,
    oldPrice: null, badge: 'new', category: 'medium',
    glowColor: 'rgba(96,165,250,0.15)',
    topDrop: '★ M9 Bayonet | Marble Fade',
    items: [...SKINS.milSpec, ...SKINS.milSpec, ...SKINS.restricted, ...SKINS.restricted, ...SKINS.classified, SKINS.covert[0], SKINS.gold[2]],
  },
];

const RARITY_COLORS = {
  consumer: '#b0c3d9',
  industrial: '#5e98d9',
  'mil-spec': '#4b69ff',
  restricted: '#8847ff',
  classified: '#d32ce6',
  covert: '#eb4b4b',
  gold: '#ffd700',
};

const RARITY_NAMES = {
  consumer: 'Consumer Grade',
  industrial: 'Industrial Grade',
  'mil-spec': 'Mil-Spec Grade',
  restricted: 'Restricted',
  classified: 'Classified',
  covert: 'Covert',
  gold: '★ Rare Special Item',
};

const RARITY_WEIGHTS = {
  consumer: 7992,
  industrial: 1598,
  'mil-spec': 361,
  restricted: 48,
  classified: 10,
  covert: 1,
};

// ===== STATE =====
let balance = 1000;
let openQty = 1;
let currentCase = null;
let inventory = [];
let isSpinning = false;
let selectedDepMethod = 'card';
let upgradeFrom = null;
let upgradeTo = null;

// ===== BALANCE =====
function updateBalance(val) {
  balance = Math.max(0, val);
  const el = document.getElementById('balance');
  el.textContent = formatMoney(balance);
  el.style.transform = 'scale(1.1)';
  setTimeout(() => el.style.transform = '', 200);
}
function formatMoney(n) {
  return n.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ===== NOTIFICATION =====
function notify(msg, type = 'info') {
  const el = document.getElementById('notification');
  el.textContent = msg;
  el.className = `notification show ${type}`;
  setTimeout(() => { el.className = 'notification'; }, 3200);
}

// ===== RENDER CASES =====
function renderCases(filter = 'all') {
  const grid = document.getElementById('casesGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? CASES : CASES.filter(c => c.category === filter);
  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.onclick = () => openCaseModal(c);
    card.innerHTML = `
      ${c.badge ? `<div class="case-badge badge-${c.badge}">${c.badge === 'new' ? '🆕 Новый' : c.badge === 'hot' ? '🔥 Хит' : '👑 VIP'}</div>` : ''}
      <div class="case-card-top">
        <div class="case-card-glow" style="--glow-color:${c.glowColor}"></div>
        <div class="case-emoji">${c.emoji}</div>
        <div class="case-name">${c.name}</div>
        <div class="case-price-row">
          <div class="case-price">₽ ${c.price.toLocaleString()}</div>
          ${c.oldPrice ? `<div class="case-old-price">₽ ${c.oldPrice.toLocaleString()}</div>` : ''}
        </div>
      </div>
      <div class="case-card-bottom">
        <div class="case-top-drop">Топ: <span>${c.topDrop}</span></div>
        <button class="case-open-btn">Открыть</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCases(filter, btn) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCases(filter);
}

// ===== OPEN CASE MODAL =====
function openCaseModal(c) {
  currentCase = c;
  openQty = 1;
  isSpinning = false;

  document.getElementById('modalCaseName').textContent = c.name;
  document.getElementById('modalCaseImg').textContent = c.emoji;
  document.getElementById('modalCasePrice').textContent = `₽ ${c.price.toLocaleString()}`;
  document.getElementById('openPrice').textContent = `₽ ${c.price.toLocaleString()}`;
  document.getElementById('qtyVal').textContent = 1;

  renderItemsList(c.items);
  buildRoulette(c.items);
  document.getElementById('rouletteWrap').style.display = 'block';
  document.getElementById('resultBlock').style.display = 'none';
  document.getElementById('openBtn').disabled = false;
  document.getElementById('caseModal').classList.add('open');
}

function closeCaseModal() {
  document.getElementById('caseModal').classList.remove('open');
  isSpinning = false;
}
function closeModal(e) {
  if (e.target === document.getElementById('caseModal')) closeCaseModal();
}

// ===== ROULETTE =====
function buildRoulette(items) {
  const track = document.getElementById('rouletteTrack');
  track.style.transition = 'none';
  track.style.transform = 'translateX(0)';
  track.innerHTML = '';

  const pool = [];
  for (let i = 0; i < 60; i++) pool.push(weightedRandom(items));

  pool.forEach(item => {
    const div = document.createElement('div');
    div.className = `roulette-item ri-${item.rarity}`;
    div.innerHTML = `
      <div class="ri-emoji">${item.emoji}</div>
      <div class="ri-name">${item.name}</div>
      <div class="ri-price" style="color:${RARITY_COLORS[item.rarity]}">₽ ${item.price.toLocaleString()}</div>
    `;
    track.appendChild(div);
  });

  return pool;
}

function weightedRandom(items) {
  const weights = items.map(it => RARITY_WEIGHTS[it.rarity] || 100);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[0];
}

// ===== START OPEN =====
function startOpen() {
  if (isSpinning) return;
  const cost = currentCase.price * openQty;
  if (balance < cost) { notify('Недостаточно баланса! Пополните счёт.', 'error'); return; }

  isSpinning = true;
  updateBalance(balance - cost);
  document.getElementById('openBtn').disabled = true;
  document.getElementById('resultBlock').style.display = 'none';

  const pool = buildRoulette(currentCase.items);
  const winIdx = 45 + Math.floor(Math.random() * 5);
  pool[winIdx] = weightedRandom(currentCase.items);

  const itemW = 118; // 110 + 8 gap
  const offset = winIdx * itemW - (370 - 55) + Math.random() * 60 - 30;

  setTimeout(() => {
    const track = document.getElementById('rouletteTrack');
    track.style.transition = 'transform 6s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    track.style.transform = `translateX(-${offset}px)`;
  }, 50);

  setTimeout(() => {
    const won = pool[winIdx];
    showResult(won);
    addToInventory(won);
    addLiveFeedItem(won);
    isSpinning = false;
  }, 6200);
}

// ===== SHOW RESULT =====
function showResult(item) {
  document.getElementById('rouletteWrap').style.display = 'none';
  const rb = document.getElementById('resultBlock');
  rb.style.display = 'block';
  document.getElementById('resultRarityBar').style.background = RARITY_COLORS[item.rarity];
  document.getElementById('resultSkinImg').textContent = item.emoji;
  document.getElementById('resultName').textContent = item.name;
  document.getElementById('resultRarity').textContent = RARITY_NAMES[item.rarity];
  document.getElementById('resultRarity').style.color = RARITY_COLORS[item.rarity];
  document.getElementById('resultPrice').textContent = `₽ ${item.price.toLocaleString()}`;
  document.getElementById('openBtn').disabled = false;
  document.getElementById('openBtn').dataset.lastItem = JSON.stringify(item);

  if (item.rarity === 'gold' || item.rarity === 'covert') {
    notify(`🎉 Редкий дроп: ${item.name}!`, 'success');
  }
}

function sellItem() {
  const item = JSON.parse(document.getElementById('openBtn').dataset.lastItem || '{}');
  if (item.price) {
    updateBalance(balance + item.price);
    notify(`Продано: ${item.name} за ₽ ${item.price.toLocaleString()}`, 'success');
    removeLastFromInventory(item);
    openAgain();
  }
}

function openAgain() {
  document.getElementById('resultBlock').style.display = 'none';
  buildRoulette(currentCase.items);
  document.getElementById('rouletteWrap').style.display = 'block';
}

// ===== QUANTITY =====
function changeQty(delta) {
  if (isSpinning) return;
  openQty = Math.max(1, Math.min(5, openQty + delta));
  document.getElementById('qtyVal').textContent = openQty;
  const price = currentCase ? currentCase.price * openQty : 0;
  document.getElementById('openPrice').textContent = `₽ ${price.toLocaleString()}`;
}

// ===== ITEMS LIST =====
function renderItemsList(items) {
  const grid = document.getElementById('itemsGrid');
  grid.innerHTML = '';
  const unique = [];
  const seen = new Set();
  items.forEach(it => {
    if (!seen.has(it.name)) { seen.add(it.name); unique.push(it); }
  });
  unique.sort((a, b) => a.price - b.price);
  unique.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item-card';
    div.style.borderColor = RARITY_COLORS[item.rarity] + '55';
    div.innerHTML = `
      <div class="item-emoji">${item.emoji}</div>
      <div class="item-name">${item.name}</div>
      <div class="item-price" style="color:${RARITY_COLORS[item.rarity]}">₽ ${item.price.toLocaleString()}</div>
      <div class="item-chance">${getRarityChance(item.rarity)}</div>
    `;
    grid.appendChild(div);
  });
}

function getRarityChance(r) {
  const map = { consumer: '79.92%', industrial: '15.98%', 'mil-spec': '3.61%', restricted: '0.48%', classified: '0.10%', covert: '0.01%', gold: '0.001%' };
  return map[r] || '';
}

// ===== INVENTORY =====
function addToInventory(item) {
  const clone = { ...item, id: Date.now() + Math.random() };
  inventory.push(clone);
  renderInventory();
}
function removeLastFromInventory(item) {
  const idx = inventory.findLastIndex ? inventory.findLastIndex(it => it.name === item.name)
    : [...inventory].reverse().findIndex(it => it.name === item.name);
  if (idx >= 0) inventory.splice(idx, 1);
  renderInventory();
}
function renderInventory() {
  const grid = document.getElementById('inventoryGrid');
  document.getElementById('invTotal').textContent = `${inventory.length} предметов`;
  if (!inventory.length) {
    grid.innerHTML = '<p class="empty-inv">Откройте кейс, чтобы получить скины 🎁</p>';
    return;
  }
  grid.innerHTML = '';
  [...inventory].reverse().forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'inv-item';
    div.style.borderColor = RARITY_COLORS[item.rarity] + '44';
    div.innerHTML = `
      <div class="inv-item-emoji">${item.emoji}</div>
      <div class="inv-item-name">${item.name}</div>
      <div class="inv-item-price" style="color:${RARITY_COLORS[item.rarity]}">₽ ${item.price.toLocaleString()}</div>
      <button class="inv-sell-btn" onclick="sellFromInventory(${inventory.length - 1 - i})">Продать</button>
    `;
    grid.appendChild(div);
  });
}
function sellFromInventory(idx) {
  const item = inventory[idx];
  if (!item) return;
  updateBalance(balance + item.price);
  notify(`Продано: ${item.name} за ₽ ${item.price.toLocaleString()}`, 'success');
  inventory.splice(idx, 1);
  renderInventory();
}
function sellAll() {
  if (!inventory.length) { notify('Инвентарь пуст!', 'error'); return; }
  const total = inventory.reduce((s, it) => s + it.price, 0);
  updateBalance(balance + total);
  notify(`Продан весь инвентарь за ₽ ${total.toLocaleString()}`, 'success');
  inventory = [];
  renderInventory();
}

// ===== LIVE FEED =====
const userNames = ['Player#4821','xXAimGodXx','cs2pro','SkinLord','NightHunter','NoScope360','GoldRush','ShadowBlade'];
function addLiveFeedItem(item) {
  const container = document.getElementById('liveItems');
  const div = document.createElement('div');
  div.className = 'live-item';
  div.style.borderColor = RARITY_COLORS[item.rarity] + '44';
  div.innerHTML = `
    <span style="font-size:18px">${item.emoji}</span>
    <div>
      <div class="live-item-user">${userNames[Math.floor(Math.random() * userNames.length)]}</div>
      <div class="live-item-name" style="color:${RARITY_COLORS[item.rarity]}">${item.name}</div>
    </div>
    <div class="live-item-price">₽ ${item.price.toLocaleString()}</div>
  `;
  container.insertBefore(div, container.firstChild);
  if (container.children.length > 8) container.removeChild(container.lastChild);
}

function startAutoLiveFeed() {
  const allItems = Object.values(SKINS).flat();
  setInterval(() => {
    const item = weightedRandom(allItems);
    addLiveFeedItem(item);
  }, 2500);
}

// ===== UPGRADE =====
let upgFromItem = null;
let upgToItem = null;

function selectUpgSkin() {
  if (!inventory.length) { notify('Инвентарь пуст! Откройте кейс.', 'error'); return; }
  upgFromItem = inventory[inventory.length - 1];
  const card = document.getElementById('upgFrom');
  card.innerHTML = `
    <div style="text-align:center;padding:20px">
      <div style="font-size:48px">${upgFromItem.emoji}</div>
      <div style="font-size:13px;color:var(--text2);margin-top:8px">${upgFromItem.name}</div>
    </div>
  `;
  document.getElementById('upgFromPrice').textContent = `₽ ${upgFromItem.price.toLocaleString()}`;
  updateUpgradeChance();
}

function selectTargetSkin() {
  const allItems = Object.values(SKINS).flat();
  const expensive = allItems.filter(it => it.price > (upgFromItem?.price || 0) * 1.2);
  if (!expensive.length) { notify('Выберите сначала скин для апгрейда', 'error'); return; }
  upgToItem = expensive[Math.floor(Math.random() * expensive.length)];
  const card = document.getElementById('upgTo');
  card.innerHTML = `
    <div style="text-align:center;padding:20px">
      <div style="font-size:48px">${upgToItem.emoji}</div>
      <div style="font-size:13px;color:var(--text2);margin-top:8px">${upgToItem.name}</div>
    </div>
  `;
  document.getElementById('upgToPrice').textContent = `₽ ${upgToItem.price.toLocaleString()}`;
  updateUpgradeChance();
}

function updateUpgradeChance() {
  const btn = document.getElementById('upgradeBtn');
  if (!upgFromItem || !upgToItem) { document.getElementById('upgradeChance').textContent = 'ШАНС: 0%'; btn.disabled = true; return; }
  const chance = Math.min(85, Math.max(5, Math.round((upgFromItem.price / upgToItem.price) * 100)));
  document.getElementById('upgradeChance').textContent = `ШАНС: ${chance}%`;
  const inner = document.getElementById('upgradeWheelInner');
  const deg = chance / 100 * 360;
  inner.style.background = `conic-gradient(var(--green) ${deg}deg, var(--red) ${deg}deg 360deg)`;
  btn.disabled = false;
}

function doUpgrade() {
  if (!upgFromItem || !upgToItem) return;
  const chance = Math.min(85, Math.max(5, Math.round((upgFromItem.price / upgToItem.price) * 100)));
  document.getElementById('upgradeBtn').disabled = true;
  const inner = document.getElementById('upgradeWheelInner');
  inner.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
  inner.style.transform = `rotate(${720 + Math.random() * 360}deg)`;

  setTimeout(() => {
    inner.style.transition = '';
    inner.style.transform = '';
    const success = Math.random() * 100 < chance;
    if (success) {
      const idx = inventory.findIndex(it => it.name === upgFromItem.name);
      if (idx >= 0) inventory.splice(idx, 1);
      inventory.push({ ...upgToItem, id: Date.now() });
      renderInventory();
      notify(`✅ Апгрейд успешен! Получено: ${upgToItem.name}`, 'success');
      addLiveFeedItem(upgToItem);
    } else {
      const idx = inventory.findIndex(it => it.name === upgFromItem.name);
      if (idx >= 0) inventory.splice(idx, 1);
      renderInventory();
      notify(`❌ Апгрейд не удался. Скин сгорел.`, 'error');
    }
    upgFromItem = null;
    upgToItem = null;
    document.getElementById('upgFrom').innerHTML = '<div class="upgrade-placeholder">Выберите скин</div>';
    document.getElementById('upgTo').innerHTML = '<div class="upgrade-placeholder">Выберите цель</div>';
    document.getElementById('upgFromPrice').textContent = '₽ 0';
    document.getElementById('upgToPrice').textContent = '₽ 0';
    document.getElementById('upgradeChance').textContent = 'ШАНС: 0%';
    document.getElementById('upgradeWheelInner').style.background = 'conic-gradient(var(--green) 0deg, var(--red) 0deg 360deg)';
    document.getElementById('upgradeBtn').disabled = true;
  }, 3200);
}

// ===== DEPOSIT =====
function openDeposit() { document.getElementById('depositModal').classList.add('open'); }
function closeDepositModal(e) {
  if (!e || e.target === document.getElementById('depositModal'))
    document.getElementById('depositModal').classList.remove('open');
}
function setDeposit(amount) {
  document.getElementById('depositInput').value = amount;
  document.querySelectorAll('.dep-amt').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}
function selectMethod(btn, method) {
  document.querySelectorAll('.dep-method').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedDepMethod = method;
}
function confirmDeposit() {
  const val = parseFloat(document.getElementById('depositInput').value);
  if (!val || val < 10) { notify('Минимальная сумма пополнения: ₽ 10', 'error'); return; }
  updateBalance(balance + val);
  notify(`✅ Баланс пополнен на ₽ ${val.toLocaleString()}`, 'success');
  document.getElementById('depositModal').classList.remove('open');
  document.getElementById('depositInput').value = '';
}

// ===== AUTH =====
function openAuth() { document.getElementById('authModal').classList.add('open'); }
function closeAuthModal(e) {
  if (!e || e.target === document.getElementById('authModal'))
    document.getElementById('authModal').classList.remove('open');
}
function steamLogin() {
  notify('Переход на страницу Steam...', 'info');
  setTimeout(() => closeAuthModal(), 1000);
}

// ===== BURGER =====
function toggleMenu() {
  const nav = document.querySelector('.nav');
  const hr = document.querySelector('.header-right');
  if (nav.style.display === 'flex') {
    nav.style.display = '';
    hr.style.display = '';
  } else {
    nav.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:var(--bg2);padding:16px;border-bottom:1px solid var(--border);z-index:99';
    hr.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:calc(64px + 160px);left:0;right:0;background:var(--bg2);padding:16px;border-bottom:1px solid var(--border);z-index:99;gap:8px';
  }
}

// ===== INIT =====
renderCases();
startAutoLiveFeed();

// Initial live feed items
const initItems = [
  SKINS.gold[0], SKINS.covert[0], SKINS.classified[0],
  SKINS.restricted[0], SKINS.covert[1], SKINS.gold[1],
];
initItems.forEach(item => setTimeout(() => addLiveFeedItem(item), Math.random() * 1000));

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCaseModal();
    closeDepositModal();
    closeAuthModal();
  }
});
