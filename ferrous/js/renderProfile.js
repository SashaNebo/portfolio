const openProfile = () => {
  const profileContentHTML = `
  <div class="profile" id='profile' data-active="active">
    <div class="aside"></div>
    <div class="sign-in" id='sign-in'>
    <div class="sign-in-container">
      <div class="sign-in-content">
        <div class="sign-in__wrap">
          <h1 class="sign-in__title">Sign in to Club</h1>
          <div class="sign-in__w-google">
            <button class='sign-in-google__button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" class="icon ">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
                  fill="#34A853">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                  fill="#FBBC05">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                  fill="#EA4335">
                </path>
              </svg>
              <span>
                Sign in with Google
              </span></button>
            <hr class="sign-in-google__hr">
          </div>
          <div class="sign-in__form-fields">
            <fieldset>
              <label for="" class="login">Username or Email</label>
              <input type="text" class="login">
            </fieldset>
            <fieldset>
              <label for="" class="password">Password
                <span>Forgot?</span>
              </label>
              <input type="text" class="password">
            </fieldset>
          </div>
          <button class="sign-in__button">Sign In</button>
          <p class="link-to-signUp">Don't have an account? <span id="signUpBtn">Sign up</span></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `
  header.insertAdjacentHTML('afterend', profileContentHTML)

  document
    .querySelector('#profile')
    .addEventListener('click', controllProfileSection)
}

const controllProfileSection = event => {
  const profileContainer = document.querySelector('#profile')
  const aside = document.querySelector('.aside')
  const profileSignInHTML = `
  <div class="sign-in" id='sign-in'>
    <div class="sign-in-container">
      <div class="sign-in-content">
        <div class="sign-in__wrap">
          <h1 class="sign-in__title">Sign in to Club</h1>
          <div class="sign-in__w-google">
            <button class='sign-in-google__button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" class="icon ">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
                  fill="#34A853">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                  fill="#FBBC05">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                  fill="#EA4335">
                </path>
              </svg>
              <span>
                Sign in with Google
              </span></button>
            <hr class="sign-in-google__hr">
          </div>
          <div class="sign-in__form-fields">
            <fieldset>
              <label for="" class="login">Username or Email</label>
              <input type="text" class="login">
            </fieldset>
            <fieldset>
              <label for="" class="password">Password
                <span>Forgot?</span>
              </label>
              <input type="text" class="password">
            </fieldset>
          </div>
          <button class="sign-in__button">Sign In</button>
          <p class="link-to-signUp">Don't have an account? <span id="signUpBtn">Sign up</span></p>
        </div>
      </div>
    </div>
  </div>
  `
  const profileSignUpHTML = `
  <div class="sign-up" id='sign-up'>
    <div class="sign-up-container">
      <div class="sign-up-content">
        <div class="sign-up-wrap">
          <h1 class="sign-up__title">Sign up to Club</h1>
          <button class='sign-up-google__button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" class="icon ">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                fill="#FBBC05">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                fill="#EA4335">
              </path>
            </svg>
            <span>
              Sign up with Google
            </span>
          </button>
          <hr class="sign-up-google__hr">
          <button class='sign-up-email__button'>
            <span>
              Continue with email
            </span>
          </button>
          <p class="sign-up__terms">
            By creating an account you agree with our
            <span class='terms'>Terms of Service</span>,
            <span class='terms'>Privacy Policy</span>,
            <br>and our default
            <span class='terms'>Notification Settings</span>
          </p>
          <p class="link-to-signIn">Don't have an account? <span id="signInBtn">Sign up</span></p>
        </div>
      </div>
    </div>
  </div>
  `

  const signInBtn = event.target.closest('#signInBtn')
  const signUpBtn = event.target.closest('#signUpBtn')

  if (signInBtn) {
    event.target.closest('#sign-up').remove()
    profileContainer.insertAdjacentHTML('beforeend', profileSignInHTML)
  }

  if (signUpBtn) {
    event.target.closest('#sign-in').remove()
    profileContainer.insertAdjacentHTML('beforeend', profileSignUpHTML)
  }

  signInBtn || signUpBtn ? aside.classList.toggle('aside-sign-up') : 0
}
