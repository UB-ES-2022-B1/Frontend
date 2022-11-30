describe("Login and Logout", () => {
    before(() => {
    // runs before each test in the block
        cy.clearCookies()
        cy.visit("https://test-dev--housh.netlify.app");
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("Log in").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/login/')
    })
    it("Can login through the UI", function () {
        cy.get("input[type='email']").type("cypress@cypressauto.com");
        cy.get("input[type='password']").type("CypressTesting$1");
        cy.get("form").submit();
        cy.wait(5000)
        cy.get("button[type='button']").contains("Home").should("exist").click({force:true});

        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("See profile").click({force:true})

        cy.get("[class='chakra-text css-0']").contains('Email address').siblings().should((elem) => {
        expect(elem.text()).to.equal('cypress@cypressauto.com');
        });
    });
});

describe("Login after 4 attempts", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app");
        cy.clearCookies()
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("Log in").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/login/')
  })
  it.skip("4 bad attempts", function () {

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("falso");
    cy.get("form").submit();
    cy.wait(2000)
    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();
    cy.wait(2000)
    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();
    cy.wait(2000)
    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();
    cy.wait(2000)
    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Sign out").should("exist").click();
  });
});

describe.skip("Login with Bad Name", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app");
        cy.clearCookies()
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("Log in").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/login/')
  })
  it("Try to login with bad name", function () {
    cy.get("input[type='email']").clear().type("falso@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.get("*[role='alert']").should("exist").contains("User not exists")
  });
});

describe.skip("Login with Blocked User", () => {
    beforeEach(() => {
      // runs before each test in the block
      cy.visit("https://test-dev--housh.netlify.app");
      cy.clearCookies()
      cy.get("*[class='dropdown_activator']").click()
      cy.get("*[class='item_list']").children().contains("Log in").click({force:true})
      cy.url().should('eq', 'https://test-dev--housh.netlify.app/login/')
  })
    it("Try to login with blocked user", function () {
      cy.get("input[type='email']").clear().type("blocked@blocked.com");
      cy.get("input[type='password']").type("Blocked$1");
      cy.get("form").submit();
      cy.get("*[role='alert']").should("exist").contains("Block user")
    });
});