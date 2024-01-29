const renderCheckout = event => {
  const activeSection = event.target.closest('[data-active="active"]')

  const checkoutContainerHTML = `
  <div class="checkout" id="checkout" data-active="active">
    <div class="checkout-container">
      <div class="checkout-content">
        <h1 class="checkout-title">checkout</h1>
        <h3 class="checkout-subtitle">(${countBagButton()} item${
    countBagButton() > 1 ? 's' : ''
  }) $${calcAmount()}.00</h3>
        <div class="checkout-data">
          <div class="checkout-data-user">
            <div class="data-user-contact">
              <h3 class="user-contact__title">contact</h3>
              <h6 class="user-contact__email">user1234@gmail.com</h6>
            </div>
            <div class="data-user-address">
              <h2 class="user-address-title">address</h2>
              <h2 class="user-address-subtitle">Delivery address</h2>
              <div class="user-address-name">
                <input type="text" placeholder='First name'>
                <input type="text" placeholder='Last name'>
              </div>
              <div class="user-address-address">
                <input type="text" placeholder='Find delivery address'>
                <div>Start typing your street address or zip code for suggestions</div>
              </div>
              <div class="user-address-number">
                <input type="text" placeholder='Phone Number'>
                <div>E.g. (123) 456-7890</div>
              </div>
            </div>
            <div class="data-user-agreement">
              <div class="user-agreement-box">
                <form action="agreement" class="user-agreement-form">
                  <input type="checkbox" class="agreement__input" id='agreement1'>
                  <label for="agreement1" class="agreement__label">Save address and contact information for future orders</label>
                </form>
              </div>
              <div class="user-agreement-box">
                <form action="agreement" class="user-agreement-form">
                  <input type="checkbox" class="agreement__input" id='agreement2'>
                  <label for="agreement2" class="agreement__label">Billing and delivery address are the same</label>
                </form>
              </div>
              <div class="user-agreement-box">
                <form action="agreement" class="user-agreement-form">
                  <input type="checkbox" class="agreement__input" id='agreement3'>
                  <label for="agreement3" class="agreement__label">I'm 13+ years old.</label>
                </form>
              </div>
            </div>
            <button class="data-user-button"><span>next</span></button>
            <div class="data-user-delivery">
              <span class="delivery__el">Delivery Options</span>
            </div>
            <div class="data-user-payment">
              <h2 class="user-payment__title">payment</h2>
              <img src="img/svg/payment-checkout.avif" alt="" class="user-payment-img">
            </div>
          </div>

          <div class="checkout-data-product">
            <div class="data-product-order">
              <div class="product-order-top">
                <h2 class="order-top__title">your order</h2>
                <span class="order-top__edit">edit</span>
              </div>
              <div class="product-order-w">
                <span class="order-w__item">${countBagButton()} item${
    countBagButton() > 1 ? 's' : ''
  }</span>
                <span class="order-w__price">$${calcAmount()}.00</span>
              </div>
              <div class="product-order-w">
                <span class="order-w__item">Original price</span>
                <span class="order-w__price">$${calcAmount()}.00</span>
              </div>
              <div class="product-order-w">
                <span class="order-w__item">Sales Tax</span>
                <span class="order-w__price">-</span>
              </div>
              <div class="product-order-w">
                <span class="order-w__item">Delivery</span>
                <span class="order-w__price">Free</span>
              </div>
              <div class="product-order-w">
                <span class="order-w__item">Sale</span>
                <span class="order-w__price">-</span>
              </div>
              <div class="product-order-bottom">
                <h5 class="order-bottom__title">Total</h5>
                <span class="order-bottom__price">$${calcAmount()}.00</span>
              </div>
            </div>
            <div class="data-product-promo">
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1 13H23V1H1V13ZM0 14H24V0H0V14ZM16 5H17V3H16V5ZM17 11H16V8.999H17V11ZM16 8H17V6H16V8ZM6.59862 10.986L10.4174 4H11.4055L7.61568 10.986H6.59862ZM7.73971 4.42636C8.02291 4.71145 8.16348 5.15182 8.16348 5.74809C8.16348 6.34118 8.02291 6.78027 7.73971 7.066C7.45857 7.353 7.07614 7.49555 6.5938 7.49555C6.09492 7.49555 5.70422 7.35364 5.42308 7.06855C5.14057 6.78409 5 6.34373 5 5.74809C5 5.15436 5.14057 4.71527 5.42308 4.42891C5.70422 4.14382 6.08803 4.00064 6.56899 4.00064C7.06856 4.00064 7.45857 4.14255 7.73971 4.42636ZM6.56899 6.76818C6.71645 6.76818 6.83015 6.71473 6.91214 6.60591C7.0155 6.45764 7.06856 6.16873 7.06856 5.73855C7.06856 5.30836 7.0155 5.02073 6.91214 4.87627C6.83015 4.76491 6.71645 4.70955 6.56899 4.70955C6.42636 4.70955 6.31335 4.763 6.23273 4.87182C6.12524 5.01945 6.0708 5.30836 6.0708 5.73855C6.0708 6.16873 6.12524 6.45764 6.23273 6.60591C6.31335 6.71473 6.42636 6.76818 6.56899 6.76818ZM10.2589 7.92891C10.5414 7.64318 10.9259 7.5 11.4152 7.5C11.9065 7.5 12.2944 7.64318 12.5762 7.92891C12.8587 8.21527 13 8.65373 13 9.24745C13 9.84436 12.8587 10.2847 12.5762 10.5705C12.2944 10.8568 11.912 11 11.4303 11C10.9314 11 10.5414 10.8568 10.2589 10.5705C9.9764 10.2847 9.83514 9.84436 9.83514 9.24745C9.83514 8.65373 9.9764 8.21527 10.2589 7.92891ZM11.4048 10.2726C11.5516 10.2726 11.6646 10.2179 11.7425 10.111C11.8506 9.96273 11.9037 9.67382 11.9037 9.24364C11.9037 8.81218 11.852 8.52327 11.748 8.37627C11.666 8.26682 11.5516 8.21336 11.4048 8.21336C11.2581 8.21336 11.1457 8.26682 11.0672 8.37627C10.9604 8.52327 10.9066 8.81218 10.9066 9.24364C10.9066 9.67382 10.9604 9.96082 11.0672 10.1059C11.1492 10.2173 11.2622 10.2726 11.4048 10.2726Z"
                  fill="black" />
              </svg>
              <span>use a promo code</span>
            </div>

            <div class="data-product-items">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  activeSection.remove()
  header.insertAdjacentHTML('afterend', checkoutContainerHTML)
  bagButton.classList.remove('active-button')

  const renderCheckoutProduct = () => {
    const checkoutContainer = document.querySelector('.data-product-items')

    product.forEach(item => {
      if (!item.inBag) return
      const checkoutProductHTML = `
      <div class="product-item-content">
        <img src="${item.imgSrc[0]}" alt="" class='item-content__img'>
        <div class="item-content-info">
          <h6 class="item-content-info__title">${item.title}</h6>
          <p class="item-content-info__price">${item.price}</p>
          <div class="item-content-info__size">Size: ${item.size}</div>
          <div class="item-content-info__color">Color: ${item.colors}</div>
          <div class="item-content-info__quantity">Quantity: ${item.count}</div>
        </div>
      </div>
      `

      checkoutContainer.insertAdjacentHTML('beforeend', checkoutProductHTML)
    })
  }
  renderCheckoutProduct()
}
