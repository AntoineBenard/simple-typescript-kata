import Calculator from './calculator';

describe('Calculator', () => {
   let calculator: any;

   beforeAll(() => {
      calculator = new Calculator();
   });

   it('should sum numbers', () => {
      // Arrange
      const expectedResult = 5;

      // Act
      const result = calculator.sum([1, 1, 3]);

      // Assert
      expect(result).toBe(expectedResult);
   });

   it('should sum return 0 if empty params', () => {
      // Arrange
      const expectedResult = 0;

      // Act
      const result = calculator.sum([]);

      // Assert
      expect(result).toBe(expectedResult);
   });
});
