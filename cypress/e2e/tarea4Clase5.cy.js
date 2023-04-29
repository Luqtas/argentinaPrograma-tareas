const URL = "http://192.168.1.41:8080/clase-10/clase-5%20(tarea%204)/";

context("Tarea 4 - Clase 5: Calculador de edades familia", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Comprueba que haya 4 botones de cálculo", () => {
    cy.get(".botones-elegir-calculo").its("length").should("eq", 4);
  });

  it("Comprueba que los botones estén visibles", () => {
    cy.get(".botones-elegir-calculo").should("be.visible");
  });

  describe("Prueba calcular promedio", () => {
    it("Hace click en el botón 'calcular promedio'", () => {
      cy.get(".boton-promedio").click();
    });

    it("Comprueba que los botones para agregar y eliminar estén visibles", () => {
      cy.get(".boton-promedio").click();

      cy.get(".boton-agregar-input").should("be.visible");
      cy.get(".boton-eliminar-input").should("be.visible");
    });

    it("Comprueba que los inputs para calcular estén visibles", () => {
      cy.get(".boton-promedio").click();

      cy.get(".numeros-usuario").should("be.visible");
    });

    it("Comprueba que los botones para calcular y reiniciar estén visibles", () => {
      cy.get(".boton-promedio").click();

      cy.get(".boton-calcular").should("be.visible");
      cy.get(".boton-reiniciar").should("be.visible");
    });

    it("Comprueba que el botón agregar funcione correctamente", () => {
      cy.get(".boton-promedio").click();
      cy.get(".boton-agregar-input").click();

      cy.get(".numeros-usuario").its("length").should("eq", 3);
    });

    it("Comprueba que el botón 'eliminar' esté deshabilitado habiendo dos inputs", () => {
      cy.get(".boton-promedio").click();
      cy.get(".numeros-usuario").its("length").should("eq", 2);

      cy.get(".boton-eliminar-input").should("have.attr", "disabled");
    });

    it("Comprueba que el botón 'eliminar' funciona correctamente", () => {
      cy.get(".boton-promedio").click();
      cy.get(".boton-agregar-input").click();

      cy.get(".numeros-usuario").its("length").should("eq", 3);

      cy.get(".boton-eliminar-input").click();

      cy.get(".numeros-usuario").its("length").should("eq", 2);
    });

    it("Apreta botón calcular con los campos vacíos", () => {
      cy.get(".boton-promedio").click();
      cy.get(".boton-calcular").click();
    });

    it("Comprueba que el cálculo de 14 y 22 sea 18", () => {
      cy.get(".boton-promedio").click();

      cy.get(".numeros-usuario").then(($inputs) => {
        let listaInputs = $inputs;

        cy.wrap(listaInputs[0]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[0]).as("input").type("14");
        cy.wrap(listaInputs[0]).should("have.value", "14");

        cy.wrap(listaInputs[1]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[1]).as("input").type("22");
        cy.wrap(listaInputs[1]).should("have.value", "22");
      });

      cy.get(".boton-calcular").click();

      cy.get(".alert-success")
        .invoke("text")
        .then((text) => {
          const numero = parseInt(text.match(/\d+/)[0]);
          expect(numero).to.equal(18);
        });
    });

    it("Hace click en reiniciar", () => {
      cy.get(".boton-promedio").click();
      cy.get(".boton-reiniciar").click();
    });
  });

  describe("Prueba calcular mas pequeño", () => {
    it("Apreta botón calcular con los campos vacíos", () => {
      cy.get(".boton-mas-pequeño").click();
      cy.get(".boton-calcular").click();
    });

    it("Comprueba que el número más pequeño sea 14 entre 14 y 22", () => {
      cy.get(".boton-mas-pequeño").click();

      cy.get(".numeros-usuario").then(($inputs) => {
        let listaInputs = $inputs;

        cy.wrap(listaInputs[0]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[0]).as("input").type("14");
        cy.wrap(listaInputs[0]).should("have.value", "14");

        cy.wrap(listaInputs[1]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[1]).as("input").type("22");
        cy.wrap(listaInputs[1]).should("have.value", "22");
      });

      cy.get(".boton-calcular").click();

      cy.get(".alert-success")
        .invoke("text")
        .then((text) => {
          const numero = parseInt(text.match(/\d+/)[0]);
          expect(numero).to.equal(14);
        });
    });

    it("Hace click en reiniciar", () => {
      cy.get(".boton-mas-pequeño").click();
      cy.get(".boton-reiniciar").click();
    });
  });

  describe("Prueba calcular mas grande", () => {
    it("Apreta botón calcular con los campos vacíos", () => {
      cy.get(".boton-mas-grande").click();
      cy.get(".boton-calcular").click();
    });

    it("Comprueba que el número más grande sea 22 entre 14 y 22", () => {
      cy.get(".boton-mas-grande").click();

      cy.get(".numeros-usuario").then(($inputs) => {
        let listaInputs = $inputs;

        cy.wrap(listaInputs[0]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[0]).as("input").type("14");
        cy.wrap(listaInputs[0]).should("have.value", "14");

        cy.wrap(listaInputs[1]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[1]).as("input").type("22");
        cy.wrap(listaInputs[1]).should("have.value", "22");
      });

      cy.get(".boton-calcular").click();

      cy.get(".alert-success")
        .invoke("text")
        .then((text) => {
          const numero = parseInt(text.match(/\d+/)[0]);
          expect(numero).to.equal(22);
        });
    });

    it("Hace click en reiniciar", () => {
      cy.get(".boton-mas-grande").click();
      cy.get(".boton-reiniciar").click();
    });
  });

  describe("Prueba calcular mas frecuente", () => {
    it("Apreta botón calcular con los campos vacíos", () => {
      cy.get(".boton-frecuente").click();
      cy.get(".boton-calcular").click();
    });

    it("Comprueba que el número más repetido sea 22 entre 14 y 22", () => {
      cy.get(".boton-frecuente").click();
      cy.get(".boton-agregar-input").click();

      cy.get(".numeros-usuario").then(($inputs) => {
        let listaInputs = $inputs;

        cy.wrap(listaInputs[0]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[0]).as("input").type("14");
        cy.wrap(listaInputs[0]).should("have.value", "14");

        cy.wrap(listaInputs[1]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[1]).as("input").type("22");
        cy.wrap(listaInputs[1]).should("have.value", "22");

        cy.wrap(listaInputs[2]).should("have.attr", "type", "number");
        cy.wrap(listaInputs[2]).as("input").type("22");
        cy.wrap(listaInputs[2]).should("have.value", "22");
      });

      cy.get(".boton-calcular").click();

      cy.get(".alert-success")
        .invoke("text")
        .then((text) => {
          const numero = parseInt(text.match(/\d+/)[0]);
          expect(numero).to.equal(22);
        });
    });

    it("Hace click en reiniciar", () => {
      cy.get(".boton-frecuente").click();
      cy.get(".boton-reiniciar").click();
    });
  });
});
