const URL = "http://192.168.1.41:8080/clase-10/clase%206%20(tarea%202)/";

context("Tarea 1 - Clase 6: Calculador de ingresos", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Comprueba que el formulario esté visible", () => {
    cy.get("button").each(($botones) => {
      cy.get($botones).should("be.visible");
    });

    cy.get("span").should("be.visible");
    cy.get(".sueldo-anual").should("be.visible");
  });

  it("Comprueba que el botón 'agregar' funcione correctamente.", () => {
    cy.get(".sueldo-anual").should("have.length", 1);
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".sueldo-anual").should("have.length", 2);
  });

  it("Intenta agregar más inputs habiendo 5 inputs en el formulario", () => {
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".boton-agregar-input").should("be.visible").click();

    cy.get("input").should("have.length", 5);
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get("input").should("have.length", 5);
  });

  it("Comprueba que el botón 'eliminar' funcione correctamente", () => {
    cy.get(".sueldo-anual").should("have.length", 1);
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".sueldo-anual").should("have.length", 3);

    cy.get(".boton-eliminar-input").should("be.visible").click();
    cy.get(".sueldo-anual").should("have.length", 2);

    cy.get(".boton-eliminar-input").should("be.visible").click();
    cy.get(".sueldo-anual").should("have.length", 1);
  });

  it("Intenta eliminar inputs sin haber agregado otros previamente", () => {
    cy.get(".sueldo-anual").should("have.length", 1);
    cy.get(".boton-eliminar-input").should("be.visible").click();
    cy.get(".sueldo-anual").should("have.length", 1);
  });

  it("Intenta calcular sin haber ingresado valores al formulario", () => {
    cy.get(".sueldo-anual").should("be.visible");
    cy.get(".boton-calcular").should("be.visible").click();
  });

  it("Comprueba que se muestren los mensajes de error al no rellenar el formulario y enviarlo", () => {
    cy.get(".sueldo-anual").should("be.visible");
    cy.get(".boton-calcular").should("be.visible").click();
    cy.get(".sueldo-anual").should("have.attr", "placeholder", "El sueldo anual no puede ser menor a 1000");
  });

  it("Calcula los ingresos con tres valores distintos y muestra la respuesta esperada", () => {
    cy.get(".sueldo-anual").should("be.visible");
    cy.get(".sueldo-anual").should("have.length", 1);

    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".boton-agregar-input").should("be.visible").click();

    cy.get(".sueldo-anual").should("have.length", 3);

    cy.get(".sueldo-anual").eq(0).type("200000").wait(500);
    cy.get(".sueldo-anual").eq(1).type("555000").wait(500);
    cy.get(".sueldo-anual").eq(2).type("1231230").wait(500);

    cy.get(".boton-calcular").click();

    cy.get(".respuesta-usuario").should("be.visible");
    cy.get(".respuesta-usuario")
      .contains(/\bEl mayor sueldo anual es de 1231230\b/)
      .should("exist");
    cy.get(".respuesta-usuario")
      .contains(/\bEl menor sueldo anual es de 200000\b/)
      .should("exist");
    cy.get(".respuesta-usuario")
      .contains(/\bEl promedio anual de sueldos es de 662076\b/)
      .should("exist");
    cy.get(".respuesta-usuario")
      .contains(/\bEl promedio mensual de sueldos es de 55173\b/)
      .should("exist");
  });

  it("Comprueba que el botón 'reiniciar' funcione correctamente", () => {
    cy.get(".boton-agregar-input").should("be.visible").click();
    cy.get(".boton-agregar-input").should("be.visible").click();

    cy.get(".sueldo-anual").should("have.length", 3);

    cy.get(".sueldo-anual").eq(0).type("200000").wait(500);
    cy.get(".sueldo-anual").eq(1).type("555000").wait(500);
    cy.get(".sueldo-anual").eq(2).type("1231230").wait(500);

    cy.get(".boton-calcular").click();
    cy.get(".respuesta-usuario").should("be.visible");

    cy.get(".boton-reiniciar").should("be.visible").click();
  });
});
