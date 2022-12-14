describe.skip("change-profile", () => {
    beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.visit("https://test-dev--housh.netlify.app");
  })

  it("change info", function () {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").click();
    cy.get("*[class='dropdown_activator']").click()
    cy.get("*[class='item_list']").children().contains("See profile").click({force:true})

    cy.url().should('eq', 'https://test-dev--housh.netlify.app/profile/')

    cy.get("[class='chakra-text css-0']").contains('Legal name').parent().siblings().last().children().
    filter("button").click({force:true});
    cy.get("input[label='First name']").type(makeid(6) + "Cypresstest");
    cy.get("form").filter(':visible').submit();
    cy.visit("https://test-dev--housh.netlify.app/profile/")

    cy.get("[class='chakra-text css-0']").contains('Password').parent().siblings().last().children().
    filter("button").click({force:true});
    cy.get("input[label='Current password']").type("CypressTesting$1");
    cy.get("input[label='New password']").type("CypressTesting$2");
    cy.get("form").filter(':visible').submit();
    cy.visit("https://test-dev--housh.netlify.app/profile/")

    cy.get("[class='chakra-text css-0']").contains('Password').parent().siblings().last().children().
    filter("button").click({force:true});
    cy.get("input[label='Current password']").type("CypressTesting$2");
    cy.get("input[label='New password']").type("CypressTesting$1");
    cy.get("form").filter(':visible').submit();
    cy.visit("https://test-dev--housh.netlify.app/profile/")
  });
});