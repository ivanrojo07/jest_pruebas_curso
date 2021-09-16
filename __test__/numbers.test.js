import { numbers } from "../numbers";

describe('Comparaciones de numeros',()=>{
    test('Mayor que',()=>{
        expect(numbers(2,2)).toBeGreaterThan(3);
    });
    test('Mayor o igual que',()=>{
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });
    test('Menor que',()=>{
        expect(numbers(2,2)).toBeLessThan(5)
    });
    test('Menor o igual que',()=>{
        expect(numbers(2,2)).toBeLessThanOrEqual(4);
    });
    test('Numero flotantes',()=>{
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
});