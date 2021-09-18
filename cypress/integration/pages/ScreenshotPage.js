class ScreenshotPage{
    screenshotAsFileName(filename) {
        cy.screenshot(filename)
    }

    screenshotElement(element) {
        cy.get(element).screenshot()
    }
}