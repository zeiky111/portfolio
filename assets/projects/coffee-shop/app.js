const menu = [
  {id:1,name:'Espresso',price:2.5},
  {id:2,name:'Cappuccino',price:3.5},
  {id:3,name:'Latte',price:3.8},
  {id:4,name:'Cold Brew',price:4.0},
  {id:5,name:'Blueberry Muffin',price:2.2}
];

const itemsEl = document.getElementById('items');
const cartItemsEl = document.getElementById('cartItems');
const totalEl = document.getElementById('total');

let cart = [];

function renderMenu(){
  itemsEl.innerHTML = '';
  menu.forEach(it=>{
    const div = document.createElement('div'); div.className='item';
    div.innerHTML = `<div class="meta"><strong>${it.name}</strong><div style="color:#9fb0c9">$${it.price.toFixed(2)}</div></div><button class="btn">Add</button>`;
    div.querySelector('button').addEventListener('click', ()=> addToCart(it));
    itemsEl.appendChild(div);
  });
}

function addToCart(item){
  const existing = cart.find(c=>c.id===item.id);
  if(existing) existing.qty++;
  else cart.push({...item,qty:1});
  renderCart();
}

function renderCart(){
  cartItemsEl.innerHTML='';
  let total=0;
  cart.forEach(c=>{
    total += c.price*c.qty;
    const el = document.createElement('div'); el.style.marginBottom='8px';
    el.innerHTML = `<div style="display:flex;justify-content:space-between"><div>${c.name} × ${c.qty}</div><div>$${(c.price*c.qty).toFixed(2)}</div></div>`;
    cartItemsEl.appendChild(el);
  });
  totalEl.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', ()=>{
  if(cart.length===0){ alert('Cart is empty'); return; }
  alert('Order placed — demo only'); cart = []; renderCart();
});

renderMenu();
renderCart();
