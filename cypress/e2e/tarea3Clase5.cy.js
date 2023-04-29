const URL = "http://192.168.1.41:8080/clase-10/clase-5%20(tarea%203)/";

context("Tarea 4 - Clase 5: Calculador de edades familia", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Se asegura de que haya un input para las horas, minutos y segundos", () => {
    cy.get("input").should("be.visible", true);
  });

  it("Se asegura de que haya un botón para calcular el tiempo total", () => {
    cy.get(".boton-calcular-total").should("be.visible", true);
  });

  it("Intenta calcular sin llenar los inputs", () => {
    cy.get(".boton-calcular-total").click();
  });

  it("Comprueba que se muestre el texto de error cuando no se llenan los inputs", () => {
    cy.get(".invalid-feedback").then(($mensajeError) => {
      let listaErrores = $mensajeError;

      cy.wrap(listaErrores[0]).should("not.have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[1]).should("not.have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[2]).should("not.have.text", "El campo no puede estar vacio");
    });

    cy.get(".boton-calcular-total").click();

    cy.get(".invalid-feedback").then(($mensajeError) => {
      let listaErrores = $mensajeError;

      cy.wrap(listaErrores[0]).should("have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[1]).should("have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[2]).should("have.text", "El campo no puede estar vacio");
    });
  });

  it("Comprueba que se borren los textos de error cuando se resuelve el error", () => {
    cy.get(".boton-calcular-total").click();

    cy.get(".invalid-feedback").then(($mensajeError) => {
      let listaErrores = $mensajeError;

      cy.wrap(listaErrores[0]).should("have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[1]).should("have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[2]).should("have.text", "El campo no puede estar vacio");
    });

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("3");
      cy.wrap(listaInputs[1]).as("input").type("45");
      cy.wrap(listaInputs[2]).as("input").type("18");
    });

    cy.get(".boton-calcular-total").click();
    cy.get(".invalid-feedback").then(($mensajeError) => {
      let listaErrores = $mensajeError;

      cy.wrap(listaErrores[0]).should("not.have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[1]).should("not.have.text", "El campo no puede estar vacio");
      cy.wrap(listaErrores[2]).should("not.have.text", "El campo no puede estar vacio");
    });
  });

  it("Completa el cálculo", () => {
    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("3");
      cy.wrap(listaInputs[1]).as("input").type("45");
      cy.wrap(listaInputs[2]).as("input").type("18");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("2");
      cy.wrap(listaInputs[1]).as("input").type("12");
      cy.wrap(listaInputs[2]).as("input").type("40");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("1");
      cy.wrap(listaInputs[1]).as("input").type("2");
      cy.wrap(listaInputs[2]).as("input").type("55");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("3");
      cy.wrap(listaInputs[1]).as("input").type("33");
      cy.wrap(listaInputs[2]).as("input").type("1");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("4");
      cy.wrap(listaInputs[1]).as("input").type("10");
      cy.wrap(listaInputs[2]).as("input").type("12");
    });

    cy.get(".boton-calcular-total").click();
  });

  it("Comprueba que el resultado sea correcto", () => {
    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("3");
      cy.wrap(listaInputs[1]).as("input").type("45");
      cy.wrap(listaInputs[2]).as("input").type("18");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("2");
      cy.wrap(listaInputs[1]).as("input").type("12");
      cy.wrap(listaInputs[2]).as("input").type("40");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("1");
      cy.wrap(listaInputs[1]).as("input").type("2");
      cy.wrap(listaInputs[2]).as("input").type("55");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("3");
      cy.wrap(listaInputs[1]).as("input").type("33");
      cy.wrap(listaInputs[2]).as("input").type("1");
    });

    cy.get(".boton-calcular-total").click();

    cy.get("input").then(($input) => {
      let listaInputs = $input;

      cy.wrap(listaInputs[0]).as("input").type("4");
      cy.wrap(listaInputs[1]).as("input").type("10");
      cy.wrap(listaInputs[2]).as("input").type("12");
    });

    cy.get(".boton-calcular-total").click();

    cy.get(".contenedor-mensaje-final")
      .contains(/\b14\b/)
      .should("exist");

    cy.get(".contenedor-mensaje-final")
      .contains(/\b44\b/)
      .should("exist");

    cy.get(".contenedor-mensaje-final").contains(/\b6\b/).should("exist");
  });
});
