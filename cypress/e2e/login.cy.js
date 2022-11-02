describe("Login and Logout", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
  })
  it("Can login through the UI", function () {
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(2000)
    cy.get("*[type='button']").should("exist").contains("Sign out").click();
  });
});

describe("Login after 4 attempts", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
  })
  it("Can login through the UI", function () {

    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(2000)
    cy.get("*[type='button']").should("exist").contains("Sign out").click();
  });
});

describe("Login with Bad Name", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
  })
  it("Can login through the UI", function () {
    cy.get("input[type='email']").type("falso@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.get("*[role='alert']").should("exist")
  });
});