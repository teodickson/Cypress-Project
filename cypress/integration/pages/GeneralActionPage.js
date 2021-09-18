class GeneralActionPage {
    clickElement(element) {
        cy.get(element).click()
    }

    clickElements(elements,index) {
        cy.get(elements).eq(index).click()
    }

    removeDefaultPopup() {
        this.clickElement('.shopee-popup__close-btn')
    }

    selectSuperMarket() {
        this.clickElements('.full-home-banners-wrapper > div:nth-child(2) a',0)
    }
}

export default GeneralActionPage