let cart = document.querySelector('.cart');
let cartfield = document.querySelector('.cart-field');
let addButtons = document.getElementsByClassName('add');

for (let button of addButtons) {
  button.onclick = e => {
    let item = Number(cart.getAttribute('data-count') || 0);
    cart.setAttribute('data-count', item + 1);
    cart.classList.add('on');

    let parent = e.target.parentNode.parentNode.parentNode;
    let image = parent.querySelector('img');
    let span = document.createElement('span');
    span.className = 'image-carior';
    parent.insertBefore(span, parent.lastElementChild);

    let s_image = image.cloneNode(false);
    span.appendChild(s_image);
    span.classList.add('active');
    setTimeout(() => {
      span.classList.remove('active');
      span.removeChild(s_image);
    }, 500);

    let clone = parent.cloneNode(true);
    clone.querySelector('.add').style.display = "none";
    clone.querySelector('.add').removeAttribute('class');
    cartfield.appendChild(clone);
  }
}

cart.onclick = () => {
  cartfield.classList.toggle('display');
};
