import { getDataFromApi } from "../promise";

describe('Probar Async/Await',()=>{
    test('Realizar una petición a una api', async ()=>{
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(api).then(data=>{
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data=>{
            expect(data.name).toEqual("Rick Sanchez");
        });
    });
    test('Obtener error de una petición a una api',async ()=>{
        const apiError = 'https://httpstat.us/404';
        const peticion =  getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
    });
    // it('Realizar una peticion a una api', async()=>{
    //     const api = 'https://rickandmortyapi.com/api/character/';
    //     const getRick = 'https://rickandmortyapi.com/api/character/1';
    //     const dataApi = await(getDataFromApi(api));
    //     expect(dataApi.results.length).toBeGreaterThan(0);
    // })
    test("Resuelve un Hola",async()=>{
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});