describe('Comprobar cadenas de texto',()=>{
    const text = "Un bonito texto en inglés";
    test('Contiene una palabra',()=>{
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el siguiente texto',()=>{
        expect(text).not.toMatch(/Un bonito texto en español/);
    });
    test('Comprobar el tamaño del texto',()=>{
        expect(text).toHaveLength(25);
    })
});