import { isTrue, isNull, isFalse, isUndefined } from "../true";


describe('Probar resultados null',()=>{
    test('null',()=>{
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultado undefined',()=>{
    test('undefined',()=>{
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Probar resultados true',()=>{
    test('true',()=>{
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados false',()=>{
    test('false',()=>{
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados undefined',()=>{
    test('undefined',()=>{
        expect(isUndefined()).toBeUndefined();
    });
});


describe('Probar resultados no verdaderos',()=>{
    test('falso o verdadero',()=>{
        expect(isFalse()).not.toBeTruthy();
    })
});