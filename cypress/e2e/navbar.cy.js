describe("Fix Navbar", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
    })
    it("Can login through the UI", function () {
        cy.get("input[type='email']").type("cypress@cypressauto.com");
        cy.get("input[type='password']").type("CypressTesting$1");
        cy.get("form").submit();
        cy.wait(5000)
        cy.get("button[type='button']").contains("Sign out").should("exist").click();

        cy.visit("https://test-dev--housh.netlify.app");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")


        cy.visit("https://test-dev--housh.netlify.app/profile/");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")

        cy.visit("https://test-dev--housh.netlify.app/register");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")

        cy.visit("https://test-dev--housh.netlify.app/login");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")

        cy.visit("https://test-dev--housh.netlify.app/apartment/noexiste");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")

        cy.visit("https://test-dev--housh.netlify.app/apartment/6");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")

        cy.visit("https://test-dev--housh.netlify.app/add/");
        cy.get("*[class='css-ykrtrz']").should("exist")
        cy.get("button[type='button']").contains("Destiny").should("exist")
        cy.get("button[type='button']").contains("Arrival").should("exist")
        cy.get("button[type='button']").contains("Departure").should("exist")
        cy.get("button[type='button']").contains("Travellers").should("exist")
        cy.get("div[align='left']").should("exist")
    });

    it("Click on image goes to principal page", function () {
        cy.visit("https://test-dev--housh.netlify.app/add/");
        cy.get("div[align='left']").should("exist").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/')

        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.get("div[align='left']").should("exist").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/')

        cy.visit("https://test-dev--housh.netlify.app/register/");
        cy.get("div[align='left']").should("exist").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/')

        cy.visit("https://test-dev--housh.netlify.app/apartment/no/");
        cy.get("div[align='left']").should("exist").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/')

        cy.visit("https://test-dev--housh.netlify.app/apartment/6/");
        cy.get("div[align='left']").should("exist").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/')

        cy.visit("https://test-dev--housh.netlify.app/profile/");
        cy.get("div[align='left']").should("exist").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/')
    });

    it("Click on image goes to principal page", function () {
        cy.get("input[type='email']").type("cypress@cypressauto.com");
        cy.get("input[type='password']").type("CypressTesting$1");
        cy.get("form").submit();
        cy.wait(5000)
        cy.get("button[type='button']").contains("Sign out").should("exist").click();

        cy.visit("https://test-dev--housh.netlify.app");
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("Register").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/register/')

        cy.visit("https://test-dev--housh.netlify.app");
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("Log in").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/login/')

        cy.visit("https://test-dev--housh.netlify.app");
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("Host your place").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/add/')

        cy.visit("https://test-dev--housh.netlify.app");
        cy.get("*[class='dropdown_activator']").click()
        cy.get("*[class='item_list']").children().contains("See profile").click({force:true})
        cy.url().should('eq', 'https://test-dev--housh.netlify.app/profile/')
    });
});