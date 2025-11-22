/// <reference types="cypress" />

// describe("Home Page", () => {
//   it("Loads products and navigates to product detail", () => {
//     cy.visit("http://localhost:5173/");
//     cy.contains("Products").should("exist");
//     cy.get("a").contains("View Details").first().click();
//     cy.url().should("include", "/product/");
//     cy.get("button").contains("Add to Cart").should("exist");
//   });

//   it("Adds product to cart", () => {
//     cy.visit("http://localhost:5173/product/1");
//     cy.get("button").contains("Add to Cart").click();
//     cy.get("a").contains("Cart (1)").should("exist");
//   });
// });
