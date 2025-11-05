// cypress/support/selectors.js

export const loginSelectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
  logoutMenu: '#react-burger-menu-btn',
  logoutButton: '[data-test="logout-sidebar-link"]'
}

export const checkoutSelectors = {
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  cancelButton: '[data-test="cancel"]',
  overviewTitle: '[data-test="title"]'
}

export const productSelectors = {
  sortDropdown: '[data-test="product-sort-container"]',
  itemPrice: '#inventory_container .inventory_item_price',
  itemName: '.inventory_item_name',
  addBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
  addBikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
  cartLink: '[data-test="shopping-cart-link"]',
  checkoutButton: '[data-test="checkout"]',
  completeMessage: '[data-test="complete-header"]'
}
