const URL = "http://192.168.1.41:8080/clase-10/clase-5%20(tarea%201)/";

context("Tarea 1 - Clase 5: Calculador de sueldos", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Comprueba que las tres calculadoras estén visibles", () => {
    cy.get("fieldset").should("be.visible");
  });

  it("Comprueba que los mensajes de error sean visibles al intentar calcular y no completar los formularios", () => {
    cy.get('.sueldo-anual[placeholder="Sueldo anual"]').should("have.attr", "placeholder", "Sueldo anual");
    cy.get('.sueldo-mensual[placeholder="Sueldo mensual"]').should("have.attr", "placeholder", "Sueldo mensual");
    cy.get('.sueldo-mensual-a-diario[placeholder="Sueldo mensual"]').should(
      "have.attr",
      "placeholder",
      "Sueldo mensual"
    );

    cy.get("button").each(($boton) => {
      cy.get($boton).click();
    });

    cy.get('.sueldo-anual[placeholder="El sueldo no puede ser menor que 0"]').should(
      "have.attr",
      "placeholder",
      "El sueldo no puede ser menor que 0"
    );
    cy.get('.sueldo-mensual[placeholder="El sueldo no puede ser menor que 0"]').should(
      "have.attr",
      "placeholder",
      "El sueldo no puede ser menor que 0"
    );
    cy.get('.sueldo-mensual-a-diario[placeholder="El sueldo no puede ser menor que 0"]').should(
      "have.attr",
      "placeholder",
      "El sueldo no puede ser menor que 0"
    );
  });

  it("Calcula el sueldo mensual", () => {
    cy.get(".sueldo-mensual-resultado").should("not.have.value");

    cy.get(".sueldo-anual").type("700000");
    cy.get(".calcular-sueldo-mensual").click();

    cy.get(".sueldo-mensual-resultado").should("have.value", "58333");
  });

  it("Calcula el sueldo anual", () => {
    cy.get(".sueldo-anual-resultado").should("not.have.value");

    cy.get(".sueldo-mensual").type("65000");
    cy.get(".calcular-sueldo-anual").click();

    cy.get(".sueldo-anual-resultado").should("have.value", "780000");
  });

  it("Calcula el sueldo diario", () => {
    cy.get(".sueldo-diario-resultado").should("not.have.value");

    cy.get(".sueldo-mensual-a-diario").type("65000");
    cy.get(".calcular-sueldo-diario").click();

    cy.get(".sueldo-diario-resultado").should("have.value", "2096");
  });
});
