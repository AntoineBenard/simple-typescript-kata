import Calculator from './calculator';

describe('Calculator', () => {
   let calculator: any;

   beforeAll(() => {
      calculator = new Calculator();
   });
   it('should sum numbers', () => {
      // Arrange
      const expectedResult = calculator.sum([1, 1, 3]);
      expect(expectedResult).toBe(5);
   });
});
