import { arrayColors, arrayFruits } from "../arrays";

describe('Comprobaremos que existe un elemento',()=>{
    test('¿Contiene una banana?',()=>{
        expect(arrayFruits()).toContain('banana');
    });
    test('¿No contiene un platano?',()=>{
        expect(arrayFruits()).not.toContain('platano');
    });
});

describe('Tamaño de un arreglo',()=>{
    test('Comprobar el tamaño de un arreglo',()=>{
        expect(arrayFruits()).toHaveLength(6);
    });
});

describe('Colores',()=>{
    test('Comprobar si el color existe',()=>{
        expect(arrayColors()).toContain('azul');
    });
});