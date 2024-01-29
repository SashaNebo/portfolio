const openBag = () => {
  const bagContainerHTML = `
   <div class="bag" id="bag" data-active="active">
    <div class="bag-container">
      <div class="bag-content">
        <div class="bag-left">
        <div class="w">
          <h1 class="bag-left-title">YOUR BAG</h1>
        </div>
          <div class="bag-left-info">
            <p class="bag-info-price"><span class="col">TOTAL: (${countBagButton()} items)</span><span class="price"> $${calcAmount()}</span></p>
            <p class="bag-info-yours">Items in your bag are not reserved — check out now to make them yours.</p>
          </div>
          <div class="bag-left-shipping">
            <p class="bag-shipping__el1">Want your order faster?</p>
            <p class="bag-shipping__el2">Choose Express Shipping at checkout.</p>
          </div>
          <div class="bag-left-items">
          </div>
          <div class="bag-bottom">
            <div class="bag-bottom-content">
              <div class="w">
                <div class="bag-bottom-el">
                  <span>
                    <svg width="19px" height="19px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M866.133333 258.133333L362.666667 761.6l-204.8-204.8L98.133333 618.666667 362.666667 881.066667l563.2-563.2z" fill="#000000"></path>
                      </g>
                    </svg>
                  </span>
                  <span class='txt'>Pay over time in interest-free installments with Affirm, Klarna or Afterpay</span>
                </div>
                <div class="bag-bottom-el">
                  <span>
                    <svg width="19px" height="19px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M21.68,42.22H37.17a1.68,1.68,0,0,0,1.68-1.68L44.7,19.12A1.68,1.68,0,0,0,43,17.44H17.61a1.69,1.69,0,0,0-1.69,1.68l-5,21.42a1.68,1.68,0,0,0,1.68,1.68h2.18"></path>
                        <path d="M41.66,42.22H38.19l5-17.29h8.22a.85.85,0,0,1,.65.3l3.58,6.3a.81.81,0,0,1,.2.53L52.51,42.22h-3.6"></path>
                        <ellipse cx="18.31" cy="43.31" rx="3.71" ry="3.76"></ellipse>
                        <ellipse cx="45.35" cy="43.31" rx="3.71" ry="3.76"></ellipse>
                        <line x1="23.25" y1="22.36" x2="6.87" y2="22.36" stroke-linecap="round"></line>
                        <line x1="20.02" y1="27.6" x2="8.45" y2="27.6" stroke-linecap="round"></line>
                        <line x1="21.19" y1="33.5" x2="3.21" y2="33.5" stroke-linecap="round"></line>
                      </g>
                    </svg>
                  </span>
                  <span class='txt'>Join adiClub to get unlimited free standard shipping</span>
                </div>
                <div class="bag-bottom-el">
                  <span>
                    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 8H12.01M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>
                  </span>
                  <span class='txt'>Free 30-Day Returns & Exchanges for Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bag-checkout">
          <div class="bag-checkout-content">
            <div class="bag-checkout-order-info">
              <h1 class="order-info__title">order summary</h1>
              <div class="w">
                <div class="order-info__el">
                  <span class="col">${countBagButton()} items</span><span class="price">$${calcAmount()}.00</span>
                </div>
                <div class="order-info__el">
                  <span>Sales Tax</span><span>-</span>
                </div>
                <div class="order-info__el">
                  <span>Delivery</span><span>Free</span>
                </div>
                <div class="order-info__el">
                  <span>Total</span><span class="price">$${calcAmount()}.00</span>
                </div>
              </div>
              <div class="order-info__promo"><span>
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1 13H23V1H1V13ZM0 14H24V0H0V14ZM16 5H17V3H16V5ZM17 11H16V8.999H17V11ZM16 8H17V6H16V8ZM6.59862 10.986L10.4174 4H11.4055L7.61568 10.986H6.59862ZM7.73971 4.42636C8.02291 4.71145 8.16348 5.15182 8.16348 5.74809C8.16348 6.34118 8.02291 6.78027 7.73971 7.066C7.45857 7.353 7.07614 7.49555 6.5938 7.49555C6.09492 7.49555 5.70422 7.35364 5.42308 7.06855C5.14057 6.78409 5 6.34373 5 5.74809C5 5.15436 5.14057 4.71527 5.42308 4.42891C5.70422 4.14382 6.08803 4.00064 6.56899 4.00064C7.06856 4.00064 7.45857 4.14255 7.73971 4.42636ZM6.56899 6.76818C6.71645 6.76818 6.83015 6.71473 6.91214 6.60591C7.0155 6.45764 7.06856 6.16873 7.06856 5.73855C7.06856 5.30836 7.0155 5.02073 6.91214 4.87627C6.83015 4.76491 6.71645 4.70955 6.56899 4.70955C6.42636 4.70955 6.31335 4.763 6.23273 4.87182C6.12524 5.01945 6.0708 5.30836 6.0708 5.73855C6.0708 6.16873 6.12524 6.45764 6.23273 6.60591C6.31335 6.71473 6.42636 6.76818 6.56899 6.76818ZM10.2589 7.92891C10.5414 7.64318 10.9259 7.5 11.4152 7.5C11.9065 7.5 12.2944 7.64318 12.5762 7.92891C12.8587 8.21527 13 8.65373 13 9.24745C13 9.84436 12.8587 10.2847 12.5762 10.5705C12.2944 10.8568 11.912 11 11.4303 11C10.9314 11 10.5414 10.8568 10.2589 10.5705C9.9764 10.2847 9.83514 9.84436 9.83514 9.24745C9.83514 8.65373 9.9764 8.21527 10.2589 7.92891ZM11.4048 10.2726C11.5516 10.2726 11.6646 10.2179 11.7425 10.111C11.8506 9.96273 11.9037 9.67382 11.9037 9.24364C11.9037 8.81218 11.852 8.52327 11.748 8.37627C11.666 8.26682 11.5516 8.21336 11.4048 8.21336C11.2581 8.21336 11.1457 8.26682 11.0672 8.37627C10.9604 8.52327 10.9066 8.81218 10.9066 9.24364C10.9066 9.67382 10.9604 9.96082 11.0672 10.1059C11.1492 10.2173 11.2622 10.2726 11.4048 10.2726Z"
                      fill="black" />
                  </svg>
                </span>
                <span class='txt'>USE A PROMO CODE</span>
              </div>
            </div>
            <div class="bag-checkout-buttons">
              <button class="bag-checkout-btn">
                <span class='txt'>checkout</span>
              </button>
            </div>
            <div class="bag-checkout-payments">
              <h6 class="payments-title">ACCEPTED PAYMENT METHODS</h6>
              <div class="payments-icons">
                <img src="img/svg/payment-checkout.avif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  header.insertAdjacentHTML('afterend', bagContainerHTML)

  const bagContainer = document.querySelector('.bag-left-items')
  product.forEach(item => {
    if (!item.inBag) return
    const bagProductHTML = `
      <div class="bag-items-content" data-id="${item.id}">
        <div class="bag-buttons">
              <div class="bag-buttons-remove">
                <svg width="16px" height="16px" viewBox="0 0 21.00 21.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>close [#1511]</title>
                    <desc>Created with Sketch.</desc>
                    <defs> </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"> </polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="bag-buttons-like wish-button">
                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </div>
            </div>
            <img src="${item.imgSrc[5]}" data-img="${item.id}"alt="">
            <div class="bag-items-content-right">
              <div class="content-items-in">
                <div class="bag-items-content__top">
                  <div class="w">
                    <div class="bag-items-content__top-name">${item.title}</div>
                    <div class="bag-items-content__top-price">${item.price}</div>
                  </div>
                    <div class="bag-items-content__color">${item.colors}</div>
                  <div class="bag-items-content__size">SIZE: 11 (US Men)</div>
                </div>
                <div class="bag-items-count">
                  <div class="bag-items-count__col"><span>${item.count}</span></div>
                  <div class="bag-items-count-btns">
                    <button class="bag-items-count-btns__minus" data-counter="minus">
                      <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="10.24">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <rect width="368" height="32" x="72" y="240" fill="var(--ci-primary-color, #000000)" class="ci-primary"></rect>
                        </g>
                      </svg>
                    </button>
                    <button class="bag-items-count-btns__plus" data-counter="plus">
                      <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>plus [#1512]</title>
                          <desc>Created with Sketch.</desc>
                          <defs> </defs>
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-379.000000, -240.000000)" fill="#000000">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                <polygon id="plus-[#1512]" points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"> </polygon>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
    bagContainer.insertAdjacentHTML('afterbegin', bagProductHTML)
    checkLiked()
  })

  const counterButtons = Array.from(document.querySelectorAll('[data-counter]'))
  counterButtons.forEach(b => b.addEventListener('click', quanityBagController))

  const buttonCheckout = document.querySelector('.bag-checkout-btn')
  buttonCheckout.addEventListener('click', renderCheckout)
}

const addToBag = event => {
  let activeInfo
  const currentProduct = event.target.closest('[data-id]')
  const currentId = +currentProduct.dataset.id

  product.forEach(info => {
    info.id === currentId ? (activeInfo = info) : 0
  })

  const createBagArray = () => {
    product.forEach(item => {
      if (item === activeInfo) {
        !item.inBag ? (item.inBag = true) : item.count++
      }
    })
  }

  const renderBagModal = () => {
    const bagModalHTML = `
    <div class="modal" id='modal'>
      <div class="modal__box">
        <div class="modal-close">
          <svg width="16px" height="16px" viewBox="0 0 21.00 21.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>close [#1511]</title>
              <desc>Created with Sketch.</desc>
              <defs> </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"> </polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h1 class="modal__title">SUCCESSFULLY ADDED TO BAG!</h1>
        <div class="modal-content">
          <div class="modal-content-left">
            <img class='content-left__img' src="${activeInfo.imgSrc[1]}" alt="">
            <div class="content-left-info">
              <h6 class="title">${activeInfo.title}</h6>
              <p class="price">${activeInfo.price}</p>
              <p class="color">Color: Black / Black / Black</p>
              <p class="size">Size: M 11.5 / W 12.5</p>
              <p class="col">Quantity: 1</p>
            </div>
          </div>
          <div class="modal-content-right">
            <p class="txt">Your bag</p>
            <p class="col">${activeInfo.count} items</p>
            <div class="w-cost">
              <span class="txt">Total Product Cost:</span><span class="price">$${calcAmount()}.00</span>
            </div>
            <div class="w-delivery">
              <span class="txt">Total Delivery Cost:</span><span class="price">free</span>
            </div>
            <div class="total">
              <span class="txt">Total:</span><span class="price">$${calcAmount()}.00</span>
            </div>

            <h4 class="content-right-suptitle">Members get unlimited free shipping</h4>
            <button class="content-right__btn join-free-btn"><span>join for free</span></button>
            <button class="content-right__btn view-bag-btn"><span>view bag</span></button>
            <div class="w">
              <span class="txt">Buy now and pay later</span>
              <svg width="55px" height="17px" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet" xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg">
                <path fill="#003087"
                  d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z">
                </path>
                <path fill="#003087"
                  d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z">
                </path>
                <path fill="#003087"
                  d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z">
                </path>
                <path fill="#009cde"
                  d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z">
                </path>
                <path fill="#009cde"
                  d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z">
                </path>
                <path fill="#009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"></path>
              </svg>
              <span class="link">Learn more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   `

    header.insertAdjacentHTML('afterend', bagModalHTML)

    const modal = document.querySelector('#modal')
    modal.addEventListener('click', moveModal)
  }

  createBagArray()
  renderBagModal()
  countBagButton()
  calcAmount()
  saveToLocalStorage()
}

const countBagButton = () => {
  const countBag = product.reduce((counter, item) => {
    item.inBag ? (counter += item.count) : 0
    return counter
  }, 0)

  countBag > 0 ? (bagButton.textContent = `cart ${countBag}`) : (bagButton.textContent = `cart`)

  return countBag
}

const calcAmount = () => {
  const amount = product.reduce((acc, info) => {
    if (info.inBag) {
      let price = ''
      let priceA = info.price.split('')
      priceA.forEach((char, i) => (i > 0 ? (price += char) : 0))
      acc += +price * info.count
    }
    return acc
  }, 0)

  return amount
}

const quanityBagController = event => {
  const activeSection = event.target.closest('[data-active="active"]')
  const currentProduct = event.target.closest('[data-id]')
  const counterButton = event.target.closest('[data-counter]')

  product.forEach(item => {
    if (item.id === +currentProduct.dataset.id) {
      if (counterButton.dataset.counter === 'plus') {
        item.count++
        activeSection.remove()
        openBag()
      }

      if (counterButton.dataset.counter === 'minus') {
        if (item.count > 1) {
          item.count--
          activeSection.remove()
          openBag()
        }
      }
    }
  })
  saveToLocalStorage()
}
