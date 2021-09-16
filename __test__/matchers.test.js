describe('Comparadores comunes',()=>{
    const user = {
        name: "Ivan",
        last_name: "Rojo"
    };
    const user2={
        name:"Ivan",
        last_name:"Rojo"
    };
    const user3={
        name:"Ivan",
        last_name:"Rojo "
    };

    test('igualdad de elementos',()=>{
        expect(user).toEqual(user2);
    });
    test('No son exactamente igual',()=>{
        expect(user).not.toEqual(user3);
    });
});