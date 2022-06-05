const items = document.querySelector('.cart__items');
const cartItems = document.querySelector('.items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createList = async () => {
fetchProducts('computador')
  .then((products) => {
    products.results
      .forEach((element) => {
        cartItems.appendChild(createProductItemElement(element));
      });
  });
};  

const createCartList = async () => {
cartItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('item__add')) {
    const productDetails = getSkuFromProductItem(e.target.parentElement);
    fetchItem(productDetails)
      .then((product) => {
        items.appendChild(createCartItemElement(product));
      });
  }
});
};

const removeAllCart = () => {
  const removeBtn = document.querySelector('.empty-cart');
  removeBtn.addEventListener('click', () => {
    document.querySelector('ol').innerHTML = '';
  });
};

window.onload = () => {
  createList();
  createCartList();
  removeAllCart();
 };