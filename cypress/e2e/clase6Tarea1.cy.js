const URL = "http://192.168.1.41:8080/clase-10/clase%206%20(tarea%201)/";

context("Tarea 1 - Clase 6: Formularios de invitación", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Comprueba que el primer formulario esté visible", () => {
    cy.get(".contenedor-cantidad-invitados").should("be.visible");
  });

  it("Envia el primer formulario sin rellenar el campo", () => {
    cy.get(".cantidad-invitados").should("be.visible");
    cy.get(".cantidad-invitados").should("contains.value", "");
    cy.get(".boton-enviar").should("be.visible").click();
  });

  it("Comprueba que se muestre el mensaje error en el primer formulario", () => {
    cy.get(".error-cantidad-invitados").should("not.be.visible");
    cy.get(".cantidad-invitados").should("contains.value", "");
    cy.get(".boton-enviar").should("be.visible").click();

    cy.get(".error-cantidad-invitados").should("be.visible");
    cy.get(".error-cantidad-invitados").should("have.text", "El valor ingresado no puede ser 0");
  });

  it("Comprueba que se muestre el segundo formulario al enviar el primero correctamente", () => {
    cy.get(".contenedor-formulario-datos").should("not.be.visible");
    cy.get(".cantidad-invitados").should("be.visible").type("3");
    cy.get(".boton-enviar").should("be.visible").click();
    cy.get(".contenedor-formulario-datos").should("be.visible");
  });

  it("Envia el segundo formulario sin haber rellenado los campos", () => {
    cy.get(".contenedor-formulario-datos").should("not.be.visible");
    cy.get(".cantidad-invitados").should("be.visible").type("1");
    cy.get(".boton-enviar").should("be.visible").click();

    cy.get(".contenedor-formulario-datos").should("be.visible");
    cy.get(".contenedor-formulario-datos input").should("have.value", "");
    cy.get(".boton-enviar-datos").should("be.visible").click();
  });

  it("Comprueba que se muestre el mensaje error en el segundo formulario", () => {
    cy.get(".contenedor-formulario-datos").should("not.be.visible");
    cy.get(".cantidad-invitados").should("be.visible").type("1");
    cy.get(".boton-enviar").should("be.visible").click();

    cy.get(".contenedor-formulario-datos").should("be.visible");
    cy.get(".contenedor-formulario-datos input").should("have.value", "");
    cy.get(".boton-enviar-datos").should("be.visible").click();

    cy.get(".contenedor-formulario-datos").within(() => {
      cy.get(".invalid-feedback").should("be.visible");

      cy.get(".invalid-feedback").eq(0).should("have.text", "El campo no puede contener menos de 3 caracteres");
      cy.get(".invalid-feedback").eq(1).should("have.text", "El campo no puede contener menos de 3 caracteres");
      cy.get(".invalid-feedback").eq(2).should("have.text", "La edad del invitado no puede ser menor a 1 año");
    });
  });

  it("Envia el formulario con dos invitados y comprueba respuesta correcta", () => {
    cy.get(".cantidad-invitados").should("be.visible").type("2");
    cy.get(".boton-enviar").should("be.visible").click();

    cy.get(".contenedor-formulario-datos").should("be.visible");
    cy.get(".nombre-invitado").should("be.visible").type("Lucas");
    cy.get(".apellido-invitado").should("be.visible").type("Gonzalez");
    cy.get(".edad-invitado").should("be.visible").type("22");

    cy.get(".dato-invitado").eq(0).should("have.value", "Lucas");
    cy.get(".dato-invitado").eq(1).should("have.value", "Gonzalez");
    cy.get(".dato-invitado").eq(2).should("have.value", "22");
    cy.get(".boton-enviar-datos").should("be.visible").click();

    cy.get(".nombre-invitado").should("be.visible").type("Lionel");
    cy.get(".apellido-invitado").should("be.visible").type("Messi");
    cy.get(".edad-invitado").should("be.visible").type("35");
    cy.get(".boton-enviar-datos").should("be.visible").click();

    cy.get(".respuesta-final")
      .contains(/\bEl invitado de menor edad es Lucas Gonzalez con 22 años\b/)
      .should("exist");

    cy.get(".respuesta-final")
      .contains(/\bEl invitado de mayor edad es Lionel Messi con 35 años\b/)
      .should("exist");

    cy.get(".respuesta-final")
      .contains(/\bEl promedio de edad de los invitados es de 28 años\b/)
      .should("exist");
  });
});
