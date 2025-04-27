// calculator.test.js

const calculator = require('./calculator');

describe('Calcolatrice: operazioni aritmetiche di base', () => {
    test('add(2, 2) → 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test('add(3, 5) → 8 (test corretto)', () => {
        expect(calculator.add(3, 5)).toBe(8);
    });

    test('subtract(5, 3) → 2', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiply(4, 3) → 12', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('divide(10, 2) → 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide by zero lancia un errore', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Impossibile dividere per zero.');
    });

    test('power(2, 3) → 8', () => {
        expect(calculator.power(2, 3)).toBe(8);
    });

    test('power(5, 0) → 1', () => {
        expect(calculator.power(5, 0)).toBe(1);
    });
    test.skip('3 + 5 non dovrebbe essere 7 (test intenzionalmente errato)', () => {
        const result = calculator.add(3, 5);
        expect(result).toBe(7);
    });
});
