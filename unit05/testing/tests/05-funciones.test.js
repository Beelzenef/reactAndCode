import { getUser } from "../src/base-pruebas/05-funciones";
import { getUserActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas de Functiones', () => {
    test('getUser debería devolver El_Papi', () => {
        // Arrange
        const username = 'El_Papi1502';
        
        // Act
        const user = getUser();
        
        // Assert
        expect( user.username ).toBe( username );
    })

    test('getUser debería devolver Elena', () => {
        // Arrange
        const username = 'Elena';
        
        // Act
        const us = getUserActivo(username);
        
        // Assert
        expect( us.username ).toBe( username );
    })

    test('getUser debería devolver Elena', () => {
        // Arrange
        const nameExpected = 'Elena';
        const userExpected = {
            uid: 'ABC567',
            username: nameExpected
        }
        
        // Act
        const us = getUserActivo(nameExpected);
        
        // Assert
        expect( us ).toStrictEqual( userExpected );
    })
}) 