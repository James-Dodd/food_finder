describe("Writing the first test", () => {
  it("First test", () => {
    cy.server()
    cy.route("GET", "http://localhost:4000/menu", "fixture:menu.json")
    cy.visit("/")
    cy.contains("Cat food (Medium)")
    cy.contains("Order")
  })
})
