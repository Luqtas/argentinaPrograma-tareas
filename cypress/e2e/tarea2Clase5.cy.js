const URL = "http://192.168.1.41:8080/clase-10/clase-5%20(tarea%202)/";

context("Tarea 2 - Clase 5: Formulario de reserva", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Comprueba que el formulario sea visible", () => {
    cy.get(".contenedor-formulario").should("be.visible");
  });

  it("Intenta confirmar la reserva sin rellenar el formulario", () => {
    cy.get("input").then(($input) => {
      let listaInputs = $input;

      for (let i = 0; i < listaInputs.length; i++) {
        cy.wrap(listaInputs[i]).should("not.have.value");
      }
    });

    cy.get(".btn-primary").click();
  });

  it("Verifica que los mensajes de error se muestren al no rellenar el formulario", () => {
    cy.get(".invalid-feedback").then(($textoError) => {
      let listaErrores = $textoError;

      for (let i = 0; i < listaErrores.length; i++) {
        cy.wrap(listaErrores[i]).should("not.have.text");
      }
    });

    cy.get(".btn-primary").click();

    cy.get(".invalid-feedback").then(($textoError) => {
      let listaErrores = $textoError;

      for (let i = 0; i < listaErrores.length - 2; i++) {
        cy.wrap(listaErrores[i]).should("have.text", "Este campo debe tener 3 o mas caracteres");
      }

      cy.wrap(listaErrores[listaErrores.length - 2]).should("have.text", "El numero telefonico no puede ser 0");
    });
  });

  it("Comprueba que los mensajes de error se borran al ingresar un valor", () => {
    cy.get(".btn-primary").click();

    cy.get(".texto-error-nombre").should("have.text", "Este campo debe tener 3 o mas caracteres");

    cy.get(".nombre-usuario").type("Lucas");
    cy.get(".btn-primary").click();

    cy.get(".texto-error-nombre").should("not.have.text");
  });

  it("Completa el formulario", () => {
    cy.get(".nombre-usuario").type("Lucas");
    cy.get(".apellido-usuario").type("Gonzalez");
    cy.get(".numero-telefonico-usuario").type("1234567891");
    cy.get(".fecha-reserva").type("2023-04-30");

    cy.get("input").then(($input) => {
      let listaInputs = $input;
      let listaRespuestas = ["Lucas", "Gonzalez", "1234567891", "2023-04-30"];

      for (let i = 0; i < listaInputs.length; i++) {
        cy.wrap(listaInputs[i]).should("have.value", listaRespuestas[i]);
      }
    });

    cy.get(".btn-primary").click();
  });

  it("Comprueba que se haya dado una respuesta correcta", () => {
    cy.get(".informacion-reserva").should("not.have.text");

    cy.get(".nombre-usuario").type("Lucas");
    cy.get(".apellido-usuario").type("Gonzalez");
    cy.get(".numero-telefonico-usuario").type("1234567891");
    cy.get(".fecha-reserva").type("2023-04-30");

    cy.get(".btn-primary").click();

    cy.get(".informacion-reserva").should((respuesta) => {
      expect(respuesta.text()).to.contain("Hola Lucas Gonzalez");
      expect(respuesta.text()).to.contain("1234567891");
      expect(respuesta.text()).to.contain("2023-04-30");
    });
  });
});
