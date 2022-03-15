describe('Primitive values', () => {
    it('should test jest assertions', () => {
        const number = 10;

        expect(number).toEqual(10);
        expect(number).toBe(10);

        expect(number).not.toBeNull(); // Verificando se valor nao eh NULL
     // expect(number).toBeNull(); // Verificando se valor eh igual a NUll

        expect(number).not.toBeFalsy(); // Nao eh falso
        expect(number).toBeTruthy(); // eh true?

        expect(number).toBeGreaterThan(9) // eh maior do que = (9)
        expect(number).toBeGreaterThanOrEqual(10) // eh maior ou igual a 10 = (10)

        expect(number).toBeLessThan(11) // eh menor do que = (11)
        expect(number).toBeLessThanOrEqual(11) // eh menor ou igual a = (11)

        expect(number).toBeCloseTo(10, 1); //esta perto de 

        expect(number).toHaveProperty('toString'); // verificando metodos contidos na const Number


    })
    
})

describe('Objects', () => {
    it('should test jest assertions with objects', () => {
        const person = {name: 'John', age: 30};
        const anotherPerson = { ...person };

        expect(person).toEqual(anotherPerson);
        expect(person).toHaveProperty('age') // ele tem a properties age?
        expect(person).not.toHaveProperty('lastName') // ele tem nao tem lastName?
        expect(person).toHaveProperty('age', 30) // verificando se age eh igual a 30

        expect(person.name).toBe('John'); // entrando no OBJ
    })
})