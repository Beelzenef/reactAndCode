import { getSaludo } from "../src/base-pruebas/02-template-string";

describe('Pruebas de Template string', () => {
    test('getSaludo debe devolver "Hola Elena"', () => {
        // Arrange
        const name = "Elena";

        // Act
        const msg = getSaludo(name);
        
        // Assert
        expect ( msg ).toBe(`Hola ${ name }`);
    })
}) 