const controller = event => {
  const activeSection = document.querySelector('[data-active="active"]')
  const targetButton = event.target.closest('.menu-btn')

  activeSection.remove()

  if (targetButton.classList.contains('active-button')) {
    renderMain()
  }

  if (!targetButton.classList.contains('active-button')) {
    if (targetButton === profileButton) openProfile()
    if (targetButton === wishlistButton) openWishlist()
    if (targetButton === bagButton) openBag()
  }

  !targetButton.classList.contains('active-button')
    ? targetButton.classList.add('active-button')
    : targetButton.classList.remove('active-button')

  headerButtonsArray.forEach(button => {
    targetButton !== button && button.classList.contains('active-button')
      ? button.classList.remove('active-button')
      : 0
  })

  checkLiked()
}

headerButtonsArray.forEach(button =>
  button.addEventListener('click', controller)
)
