const header = document.querySelector('#header')
const headerButtonsArray = Array.from(document.querySelectorAll('.menu-btn'))

const profileButton = header.querySelector('#btnToProfile')
const wishlistButton = header.querySelector('#btnToWishList')
const bagButton = header.querySelector('#btnToBag')

if (localStorage.getItem('product')) {
  product = JSON.parse(localStorage.getItem('product'))
  countWishlistButton()
  countBagButton()
}

const saveToLocalStorage = () => {
  localStorage.setItem('product', JSON.stringify(product))
}
