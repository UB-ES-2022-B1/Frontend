describe("delete-house", () => {
    beforeEach(() => {
        // runs before each test in the block
        cy.clearCookies();
        cy.visit("https://test-dev--housh.netlify.app");
    })
    it("delete house", function () {
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.get("input[type='email']").type("cypress@cypressauto.com");
        cy.get("input[type='password']").type("CypressTesting$1");
        cy.get("form").submit();
        cy.wait(5000)
        cy.get("button[type='button']").contains("Home").click();
        cy.wait(2000);
        cy.get("*[class='item_list']").children().contains("My households").click({force:true});
        cy.wait(5000);
        cy.get("*[aria-label='Compartir']").first().siblings("button").click({force:true});
        cy.wait(3000);
        cy.get("button[type='button']").contains("Delete").click({force:true});

    });
});