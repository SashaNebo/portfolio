// Render Product
window.addEventListener('click', event => {
  const activeSection = event.target.closest('[data-active="active"]')
  if (activeSection === null) return
  const selectedProduct = event.target.closest('[data-id]')
  if (selectedProduct === null) return

  if (activeSection.id === 'product' || event.target.closest('.wish-button') || event.target.closest('.bag-buttons-remove')) return

  const renderProduct = () => {
    let activeInfo
    const selectedId = +selectedProduct.dataset.id

    product.forEach(info => (info.id === selectedId ? (activeInfo = info) : 0))

    const renderProduct = `
    <div class="product" id="product" data-id="${activeInfo.id}" data-active="active">
      <div class="product-container">
        <div class="product-main">
          <ol class="product-menu">
            <li id='back'><span class='product-btn-back' href="">
                <svg class='icon' height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-94.52 -94.52 661.65 661.65" xml:space="preserve" stroke="#000000" stroke-width="47.2615">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <polygon points="472.615,20.96 0,20.96 0,40.25 453.325,40.25 453.325,359.037 125.995,359.037 185.684,299.347 172.045,285.708 89.072,368.682 172.045,451.655 185.684,438.017 125.995,378.327 472.615,378.327 "></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <span class='txt'>Back</span>
              </span>
            </li>
          </ol>
          <div class="product-main-img">
            <img src="${activeInfo.imgSrc[1]}" alt="">
            <img src="${activeInfo.imgSrc[2]}" alt="">
            <img src="${activeInfo.imgSrc[3]}" alt="">
            <img src="${activeInfo.imgSrc[4]}" alt="">
          </div>
        </div>
        <div class="product-sidebar">
          <div class="product-sidebar-container">
            <div class="product-sidebar-description">
              <div class="sidebar-description-category">
                Women's • adidas by Stella McCartney
              </div>
              <h1 class="sidebar-description-title">
                <span>${activeInfo.title}</span>
              </h1>
              <div class="sidebar-description-price">
                <p>${activeInfo.price}</p>
              </div>
            </div>
            <div class="sidebar-buy">
              <div class="sidebar-description-size">
                <div class="size-top">
                  <h2>Sizes</h2>
                  <p>Find your size</p>
                </div>
                <div class="size-selector">
                  <button class="size-selector-btn"><span>7</span></button>
                  <button class="size-selector-btn"><span>7.5</span></button>
                  <button class="size-selector-btn"><span>8</span></button>
                  <button class="size-selector-btn"><span>8.5</span></button>
                  <button class="size-selector-btn"><span>9</span></button>
                  <button class="size-selector-btn"><span>9.5</span></button>
                  <button class="size-selector-btn"><span>10</span></button>
                  <button class="size-selector-btn"><span>10.5</span></button>
                  <button class="size-selector-btn"><span>11</span></button>
                  <button class="size-selector-btn"><span>11.5</span></button>
                </div>
              </div>
            </div>
            <div class="add-to-bag">
              <button class='bag-btn' id="addToBagBtn">
                <span>add to bag</span>
              </button>
              <button class="add-to-wishlist wish-button">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `

    activeSection.remove()
    header.insertAdjacentHTML('afterend', renderProduct)

    const back = document.querySelector('#back')
    back.addEventListener('click', closeProduct)

    const addToBagBtn = document.querySelector('#addToBagBtn')
    addToBagBtn.addEventListener('click', addToBag)

    // Active remove
    const targetButton = event.target.closest('.active-button')
    const activeButton = document.querySelector('.active-button')

    if (!targetButton && activeButton) activeButton.classList.remove('active-button')

    checkLiked()
  }

  const closeProduct = event => {
    event.target.closest('[data-active="active"]').remove()
    renderMain()
  }

  if (activeSection.id === 'bag') {
    event.target.closest('[data-img]') ? renderProduct() : 0
  } else {
    renderProduct()
  }
})

const moveModal = event => {
  const modal = document.querySelector('#modal')
  if (!event.target.closest('.modal__box') || event.target.closest('.modal-close')) {
    modal.remove()
  } else if (event.target.closest('.view-bag-btn')) {
    modal.remove()
    document.querySelector('[data-active]').remove()
    openBag()
    bagButton.classList.add('active-button')
  } else if (event.target.closest('.join-free-btn')) {
    modal.remove()
    document.querySelector('[data-active]').remove()
    openProfile()
    profileButton.classList.add('active-button')
  }
}
