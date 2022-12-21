import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe('Pruebas de desestructuración de arrays', () => {
    test('retornaArreglo debería devolver letras y numeros', () => {
        
        // Act
        const [letras, numeros] = retornaArreglo();
        
        // Assert
        expect( letras ).toBe( 'ABC' );
        expect( numeros ).toBe( 123 );
    })

    test('retornaArreglo debería devolver strings y numbers', () => {
        
        // Act
        const [letras, numeros] = retornaArreglo();
        
        // Assert
        expect( typeof letras ).toBe( 'string' );
        expect( typeof numeros ).toBe( 'number' );
    })
}) 