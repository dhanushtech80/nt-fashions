// ===== NT-FASHIONS MAIN JS =====

// ---- CART STATE ----
let cart = JSON.parse(localStorage.getItem('nt_cart') || '[]');
let currentProduct = null;
let selectedSize = null;
let quantity = 1;

// ---- PRODUCTS DATA (with real images) ----
const products = [
  // ── SHIRTS ──
  {
    id: 1, category: 'shirts', name: 'Executive Oxford Shirt', brand: 'Raymond',
    img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80',
    price: 2499, originalPrice: 3999, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'sale', badgeType: 'sale'
  },
  {
    id: 2, category: 'shirts', name: 'Slim Fit Formal Shirt', brand: 'Van Heusen',
    img: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&q=80',
    price: 1899, originalPrice: 2799, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'new', badgeType: 'new'
  },
  {
    id: 3, category: 'shirts', name: 'Linen Casual Shirt', brand: 'Park Avenue',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    price: 1599, originalPrice: 2499, sizes: ['S','M','L','XL','XXL','XXXL'], badge: null
  },
  {
    id: 4, category: 'shirts', name: 'Printed Party Shirt', brand: 'Wrogn',
    img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80',
    price: 1299, originalPrice: 1999, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'sale', badgeType: 'sale'
  },

  // ── T-SHIRTS ──
  {
    id: 5, category: 'tshirts', name: 'Premium Cotton Tee', brand: 'Adidas',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    price: 999, originalPrice: 1499, sizes: ['S','M','L','XL','XXL','XXXL'], badge: null
  },
  {
    id: 6, category: 'tshirts', name: 'Polo Club T-Shirt', brand: 'Lacoste',
    img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80',
    price: 2999, originalPrice: 4499, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'sale', badgeType: 'sale'
  },
  {
    id: 7, category: 'tshirts', name: 'Graphic Print Tee', brand: 'H&M',
    img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
    price: 799, originalPrice: 1199, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'new', badgeType: 'new'
  },
  {
    id: 8, category: 'tshirts', name: 'Muscle Fit Tee', brand: 'Nike',
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
    price: 1499, originalPrice: 1999, sizes: ['S','M','L','XL','XXL','XXXL'], badge: null
  },

  // ── PANTS ──
  {
    id: 9, category: 'pants', name: 'Slim Chino Pants', brand: "Levi's",
    img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    price: 2299, originalPrice: 3499, sizes: ['28','30','32','34','36','38','40'], badge: null
  },
  {
    id: 10, category: 'pants', name: 'Formal Trousers', brand: 'Arrow',
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
    price: 1899, originalPrice: 2799, sizes: ['28','30','32','34','36','38','40'], badge: 'sale', badgeType: 'sale'
  },
  {
    id: 11, category: 'pants', name: 'Denim Jeans', brand: "Levi's 501",
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    price: 3499, originalPrice: 4999, sizes: ['28','30','32','34','36','38','40'], badge: 'new', badgeType: 'new'
  },
  {
    id: 12, category: 'pants', name: 'Cargo Track Pants', brand: 'Puma',
    img: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=600&q=80',
    price: 1599, originalPrice: 2299, sizes: ['28','30','32','34','36','38','40'], badge: null
  },

  // ── JERSEYS ──
  {
    id: 13, category: 'jerseys', name: 'CSK Fan Jersey', brand: 'IPL Official',
    img: 'https://tse3.mm.bing.net/th/id/OIP.W0b-Iz1eR4gpf-FfmbJUpgHaI4?rs=1&pid=ImgDetMain&o=7&rm=3',
    price: 1299, originalPrice: 1799, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'new', badgeType: 'new'
  },
  {
    id: 14, category: 'jerseys', name: 'MI Mumbai Jersey', brand: 'IPL Official',
    img: 'https://tse4.mm.bing.net/th/id/OIP.DXici-Yxt2Ks4tZj98opkQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    price: 1299, originalPrice: 1799, sizes: ['S','M','L','XL','XXL','XXXL'], badge: null
  },
  {
    id: 15, category: 'jerseys', name: 'RCB Fan Jersey', brand: 'IPL Official',
    img: 'https://tse2.mm.bing.net/th/id/OIP.2XTFWJfWsEJaVvOhYzpYmgHaI5?rs=1&pid=ImgDetMain&o=7&rm=3',
    price: 1299, originalPrice: 1799, sizes: ['S','M','L','XL','XXL','XXXL'], badge: null
  },
  {
    id: 16, category: 'jerseys', name: 'Team India Cricket', brand: 'BCCI',
    img: 'https://th.bing.com/th/id/OIP.Dp_adPqLALusfTYFBhBUOgHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    price: 2499, originalPrice: 3499, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'sale', badgeType: 'sale'
  },
  {
    id: 17, category: 'jerseys', name: 'Football Club Jersey', brand: 'FIFA',
    img: 'https://th.bing.com/th/id/OIP.j_XAmWsCIarUdoGyaW2cOwHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    price: 1899, originalPrice: 2699, sizes: ['S','M','L','XL','XXL','XXXL'], badge: null
  },
  {
    id: 18, category: 'jerseys', name: 'NBA Basketball Jersey', brand: 'NBA Official',
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5017d837-a39b-403f-a33e-0b64b2bb484a/travis-kelce-kansas-city-chiefs-mens-dri-fit-limited-football-jersey-jLzrPJ.png',
    price: 2199, originalPrice: 2999, sizes: ['S','M','L','XL','XXL','XXXL'], badge: 'new', badgeType: 'new'
  },

  // ── ACCESSORIES ──
  {
    id: 19, category: 'accessories', name: 'Chronograph Watch', brand: 'Fastrack',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    price: 3499, originalPrice: 5499, sizes: ['Free Size'], badge: 'sale', badgeType: 'sale'
  },
  {
    id: 20, category: 'accessories', name: 'Running Sneakers', brand: 'Nike Air',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    price: 5999, originalPrice: 8999, sizes: ['6','7','8','9','10','11'], badge: 'new', badgeType: 'new'
  },
  {
    id: 21, category: 'accessories', name: 'Leather Belt', brand: 'Woodland',
    img: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80',
    price: 899, originalPrice: 1499, sizes: ['S','M','L','XL'], badge: null
  },
  {
    id: 22, category: 'accessories', name: 'Sports Sunglasses', brand: 'Ray-Ban',
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    price: 4999, originalPrice: 7999, sizes: ['Free Size'], badge: 'sale', badgeType: 'sale'
  },
  {
    id: 23, category: 'accessories', name: 'Gym Bag', brand: 'Adidas',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    price: 1899, originalPrice: 2799, sizes: ['Free Size'], badge: null
  },
  {
    id: 24, category: 'accessories', name: 'Baseball Cap', brand: 'New Era',
    img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80',
    price: 799, originalPrice: 1299, sizes: ['Free Size'], badge: 'new', badgeType: 'new'
  },
];

// Fallback emoji per category (shown if image fails to load)
const fallbackEmoji = { shirts:'👔', tshirts:'👕', pants:'👖', jerseys:'🏏', accessories:'⌚' };

// ---- RENDER PRODUCTS ----
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  const discount = p => Math.round((1 - p.price / p.originalPrice) * 100);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge === 'sale' ? discount(p) + '% OFF' : 'NEW'}</span>` : ''}
      <div class="product-img-wrap">
        <img
          class="product-img"
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="product-img-fallback" style="display:none">${fallbackEmoji[p.category] || '🛍️'}</div>
        <div class="product-overlay">
          <button class="quick-view-btn" onclick="openProductModal(${p.id})">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sizes">
          ${p.sizes.slice(0,4).map(s => `<span class="size-chip">${s}</span>`).join('')}
          ${p.sizes.length > 4 ? `<span class="size-chip">+${p.sizes.length - 4}</span>` : ''}
        </div>
        <div class="product-price-row">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          <span class="price-original">₹${p.originalPrice.toLocaleString()}</span>
          <span class="price-discount">↓${discount(p)}%</span>
        </div>
        <button class="btn-cart" onclick="openProductModal(${p.id})">🛒 Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// ---- PRODUCT MODAL ----
function openProductModal(productId) {
  currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;
  selectedSize = null;
  quantity = 1;

  document.getElementById('modalTitle').textContent = currentProduct.name;
  document.getElementById('modalBrand').textContent = currentProduct.brand;
  document.getElementById('modalPrice').textContent = `₹${currentProduct.price.toLocaleString()}`;
  document.getElementById('modalQty').textContent = quantity;

  const sizeLabel = currentProduct.category === 'pants' ? 'Waist Size (inches)' : 
                    currentProduct.category === 'accessories' ? 'Size' : 'Clothing Size';
  document.getElementById('sizeLabel').textContent = sizeLabel;

  const sizeOptions = document.getElementById('sizeOptions');
  sizeOptions.innerHTML = currentProduct.sizes.map(s => `
    <button class="size-btn" onclick="selectSize('${s}', this)">${s}</button>
  `).join('');

  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

function selectSize(size, btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;
}

function changeQty(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById('modalQty').textContent = quantity;
}

function addToCartFromModal() {
  if (!selectedSize) {
    showToast('⚠️ Please select a size!');
    return;
  }
  addToCart(currentProduct, selectedSize, quantity);
  closeModal();
  openCart();
}

// ---- CART FUNCTIONS ----
function addToCart(product, size, qty = 1) {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, size, qty });
  }
  saveCart();
  updateCartBadge();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem('nt_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? 'flex' : 'none';
  });
}

function openCart() {
  renderCart();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCart() {
  const items = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    items.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <p>Your cart is empty</p>
        <p style="font-size:0.75rem;margin-top:8px;color:rgba(255,255,255,0.2)">Add some stylish items!</p>
      </div>`;
    subtotalEl.textContent = '₹0';
    totalEl.textContent = '₹0';
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal + shipping;

  items.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${item.img
          ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;object-position:center top;" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=font-size:1.8rem>${item.emoji||'🛍️'}</span>'">`
          : `<span style="font-size:1.8rem">${item.emoji||'🛍️'}</span>`
        }
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Size: ${item.size} | Qty: ${item.qty}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})">✕</button>
    </div>
  `).join('');

  subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
  document.getElementById('cartShipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  totalEl.textContent = `₹${total.toLocaleString()}`;
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showToast('🛒 Cart is empty!');
    return;
  }
  closeCart();
  window.location.href = 'pages/checkout.html';
}

// ---- FILTER ----
function setFilter(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(filter);
}

// ---- TOAST ----
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();

  // Close modal on overlay click
  document.getElementById('productModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
});