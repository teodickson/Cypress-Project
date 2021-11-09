// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import GeneralActionPage from '../../cypress/integration/pages/GeneralActionPage';

describe('Automation Test for Shopee Website', () => {
  const action = new GeneralActionPage()
  const BASEURL = "https://shopee.sg/"

  beforeEach(function() {
	  cy.visit(BASEURL)
    action.removeDefaultPopup()
	  cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata  //To access properties of this, use a function instead of an arrow function
	  })
  })
  
  it('Verify user is able to see searchbox', () => {
    cy.get('form[role="search"]').find('input').should("have.class","shopee-searchbar-input__input")
    cy.get('.shopee-searchbar-input__input').should('be.visible')
  })

  it('Validate banner wrapper texts', function() {
    cy.get('.full-home-banners-wrapper > div > a').each(($element,index) => {
        expect($element).to.contain(this.testdata.banner_wrapper[index]);
    })
    .then(($list) => {
        expect($list).to.have.length(10);
    })
  })

  it('Verify current url is correct', function() {
    action.selectSuperMarket()
    cy.url().should('eq', BASEURL + 'supermarket')
  })
  
  it('User is able to enter text on search box', function() {
	  cy.get('.shopee-searchbar-input__input').type('laptop').type('{enter}')
	  cy.get('.shopee-search-filter-status__text',{timeout:5500}).should('be.visible')
  })
})

describe('Fixture json test', () => {
    it('Verify first user is John', () => {//
        cy.fixture('users').then( user => {
            expect(user[0].name).to.eq("John")
          })
    })
})

