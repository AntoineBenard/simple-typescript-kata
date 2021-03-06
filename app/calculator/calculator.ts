export default class Calculator {
   public result: number;

   public sum(numbers: number[]): number {
      this.result = numbers.reduce(
         (previousNumber, currentNumber) => previousNumber + currentNumber,
         0,
      );

      return this.result;
   }
}
