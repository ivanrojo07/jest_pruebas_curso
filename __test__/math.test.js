import {sumar, multiplicar, restar, dividir } from '../math';
describe('calculos matematicos',()=>{
    test('Prueba de sumas',()=>{
        expect(sumar(1,1)).toBe(2);
    });
    test('Prueba de multiplicar',()=>{
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Prueba de resta',()=>{
        expect(restar(4,2)).toBe(2);
    });
    test('Prueba de división',()=>{
        expect(dividir(4,2)).toBe(2);
    });
});