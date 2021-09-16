import {getCharacter} from '../snapshot';
import rick from '../rick.json';

describe('Trabajando con instantaneas/Snapshot',()=>{
    test("Snapshot",()=>{
        expect(getCharacter(rick)).toMatchSnapshot();
    });
    test('Siempre fallara la instantanea',()=>{
        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random()*20),
        };
        expect(user).toMatchSnapshot();

    });
    test('Tenemos una excepcion dentro del codigo',()=>{
        const user ={
            id: Math.floor(Math.random()*20),
            nombre:"Ivan Rojo"
        };
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
})