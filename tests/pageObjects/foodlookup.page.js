const { test, expect } = require("@playwright/test");

exports.FoodLookupPage = class FoodLookupPage {
  constructor(page) {
    this.page = page;
    this.foodURL = "http://localhost:3000";
    this.searchField = page.getByPlaceholder("Search foods...");
    this.desc = page.locator("//table//tbody//tr//td").nth(0);
    this.kcal = page.locator("//table//tbody//tr//td").nth(1);
    this.protein = page.locator("//table//tbody//tr//td").nth(2);
    this.fat = page.locator("//table//tbody//tr//td").nth(3);
    this.carbs = page.locator("//table//tbody//tr//td").nth(4);
    this.SelectedDesc = page
      .locator("//html//body//div//div//div//table//tbody//tr//td[1]")
      .nth(1);
    this.SelectedKCal = page
      .locator("//html//body//div//div//div//table//tbody//tr//td[2]")
      .nth(0);
    this.SelectedProtein = page
      .locator("//html//body//div//div//div//table//tbody//tr//td[3]")
      .nth(0);
    this.SelectedFat = page
      .locator("//html//body//div//div//div//table//tbody//tr//td[4]")
      .nth(0);
    this.SelectedCarbs = page
      .locator("//html//body//div//div//div//table//tbody//tr//td[5]")
      .nth(0);
  }

  async gotoURL(page) {
    await page.goto("http://localhost:3000");
  }

  async verifySearch() {
    await expect(this.searchField).toBeVisible();
  }
};
