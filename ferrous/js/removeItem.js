window.addEventListener('click', event => {
  const removeItem = () => {
    const activeSection = event.target.closest('[data-active="active"]')
    const currentProduct = event.target.closest('[data-id]')

    const removeButton = event.target.closest('.bag-buttons-remove')
    const wishlistButton = event.target.closest('.wish-button')

    if (activeSection.id === 'bag') {
      if (removeButton || wishlistButton.classList.contains('active')) {
        product.forEach(item => {
          if (item.id === +currentProduct.dataset.id) {
            item.inBag = false
            item.count = 1
          }
        })
        activeSection.remove()
        openBag()
      }
    }

    if (activeSection.id === 'wishlist') {
      if (!wishlistButton.classList.contains('active')) {
        activeSection.remove()
        openWishlist()
        checkLiked()
      }
    }
  }

  event.target.closest('.bag-buttons-remove') ||
  event.target.closest('.wish-button')
    ? removeItem()
    : 0

  saveToLocalStorage()
})
