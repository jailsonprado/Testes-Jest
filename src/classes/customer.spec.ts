import {
   IndividualCustomer,
   EnterpriseCustomer
   } from './customer';
 
 const createIndividualCustomer = (
     firstName: string, 
     lastName: string, 
     cpf: string
     ): IndividualCustomer => {
        return new IndividualCustomer(firstName, lastName ,cpf);
 }

 const createEnterpriseCustomer = (
     name: string,  
     cnpj: string
     ): EnterpriseCustomer => {
        return new EnterpriseCustomer(name, cnpj);
 }

 afterEach(() => jest.clearAllMocks())
 
 describe('IndividualCustomer' ,() => {
   it('should have fisrtName, lastName, cpf', () => {
     // sut : System under test
     const sut = createIndividualCustomer('Jailson', 'Prado' , '111.111.111.50');
 
        expect(sut).toHaveProperty('firstName', 'Jailson');
        expect(sut).toHaveProperty('lastName', 'Prado');
        expect(sut).toHaveProperty('cpf', '111.111.111.50');
    
   });

   it('should have methods to get name and idn', () => {
     // sut : System under test
     const sut = createIndividualCustomer('Jailson', 'Prado' , '111.111.111.50');
 
        expect(sut.getName()).toBe('Jailson Prado');
        expect(sut.getIDN()).toBe('111.111.111.50')
   });

 
 })

 describe('EnterpriseCustomer' ,() => {
   it('should have name, cnpj', () => {
     // sut : System under test
     const sut = createEnterpriseCustomer('BrasBrasil', '11.111.11');
 
        expect(sut).toHaveProperty('name', 'BrasBrasil');
        expect(sut).toHaveProperty('cnpj', '11.111.11');
    
   });

   it('should have methods to get name and idn', () => {
     // sut : System under test
     const sut = createEnterpriseCustomer('BrasBrasil', '11.111.11');
 
        expect(sut.getName()).toBe('BrasBrasil');
        expect(sut.getIDN()).toBe('11.111.11');
   });

 
 })