import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";

const newEmail = faker.internet.email();

describe("Edit some user profile", () => {
  before(() => {
    cy.login();
    cy.visit("/");
    homePage.switchLightBtn.click();
  });

  it("Should search for a specific user and update email", () => {
    homePage.dashboardBtn.click();
    dashboardPage.userBtn.click();
    dashboardPage.userListBtn.click();
    dashboardPage.userInput.type("Glurxy");
    dashboardPage.userSandwitchBtn.click();
    dashboardPage.userSandwitchEditBtn.click();

    dashboardPage.useremailInput.clear().type(newEmail);
    dashboardPage.userSubmitBtn.click();
    cy.contains("Update success!").should("be.visible");
    dashboardPage.userInput.type("Glurxy");

    cy.contains(newEmail).should("exist");
  });
});
