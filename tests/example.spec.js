// @ts-check
const { test, expect } = require("@playwright/test");
const { FoodLookupPage } = require("./pageObjects/foodlookup.page");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test("Search Cheese blue", async ({ page }) => {
  // Define page object
  const FoodLookup = new FoodLookupPage(page);
  // Open Webpage
  await page.goto(FoodLookup.foodURL);
  // Verify Element
  await expect(FoodLookup.searchField).toBeVisible();
  // Input value
  FoodLookup.searchField.fill("Cheese, blue");
  // Press Enter
  FoodLookup.verifySearch();
  // Verify Values
  await expect(FoodLookup.desc).toContainText("Cheese, blue");
  await expect(FoodLookup.kcal).toContainText("353");
  await expect(FoodLookup.protein).toContainText("21.4");
  await expect(FoodLookup.fat).toContainText("27.25");
  await expect(FoodLookup.carbs).toContainText("2.34");
  // Select food element
  await FoodLookup.desc.click();
  // Wait
  await delay(2000);
  // Verify Select Food Table Values
  await expect(FoodLookup.SelectedDesc).toContainText("Cheese, blue");
  await expect(FoodLookup.SelectedKCal).toContainText("353");
  await expect(FoodLookup.SelectedProtein).toContainText("21.4");
  await expect(FoodLookup.SelectedFat).toContainText("27.25");
  await expect(FoodLookup.SelectedCarbs).toContainText("2.34");
  // Close Browser
  await page.close();
});

test("Search Butter with salt", async ({ page }) => {
  // Define page object
  const FoodLookup = new FoodLookupPage(page);
  // Open Webpage
  await page.goto(FoodLookup.foodURL);
  // Verify Element
  await expect(FoodLookup.searchField).toBeVisible();
  // Input value
  FoodLookup.searchField.fill("Butter, with salt");
  // Press Enter
  FoodLookup.verifySearch();
  // Verify Values
  await expect(FoodLookup.desc).toContainText("Butter, with salt");
  await expect(FoodLookup.kcal).toContainText("717");
  await expect(FoodLookup.protein).toContainText("0.85");
  await expect(FoodLookup.fat).toContainText("75.43");
  await expect(FoodLookup.carbs).toContainText("0.06");
  // Select food element
  await FoodLookup.desc.click();
  // Wait
  await delay(2000);
  // Verify Select Food Table Values
  await expect(FoodLookup.SelectedDesc).toContainText("Butter, with salt");
  await expect(FoodLookup.SelectedKCal).toContainText("717");
  await expect(FoodLookup.SelectedProtein).toContainText("0.85");
  await expect(FoodLookup.SelectedFat).toContainText("75.43");
  await expect(FoodLookup.SelectedCarbs).toContainText("0.06");
  // Close Browser
  await page.close();
});
