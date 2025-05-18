const calculator = require('../src/calculator');

describe('Calcolatrice: operazioni aritmetiche di base', () => {
    // Addizione
    test('add(2, 2) → 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test('add(-1, 1) → 0 (somma con negativi)', () => {
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('add(2.5, 1.3) → 3.8 (somma con numeri decimali)', () => {
        expect(calculator.add(2.5, 1.3)).toBeCloseTo(3.8);
    });

    test.skip('3 + 5 non dovrebbe essere 7 (test intenzionalmente errato)', () => {
        const result = calculator.add(3, 5);
        expect(result).toBe(7);
    });

    // Sottrazione
    test('subtract(5, 3) → 2', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtract(3, 5) → -2 (risultato negativo)', () => {
        expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('subtract(5.5, 2.2) → 3.3 (decimali)', () => {
        expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
    });

    // Moltiplicazione
    test('multiply(4, 3) → 12', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('multiply(0, 100) → 0 (moltiplicazione per zero)', () => {
        expect(calculator.multiply(0, 100)).toBe(0);
    });

    test('multiply(-2, -3) → 6 (due negativi)', () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('multiply(2.5, 4) → 10 (decimali)', () => {
        expect(calculator.multiply(2.5, 4)).toBeCloseTo(10);
    });

    // Divisione
    test('divide(10, 2) → 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide(-9, 3) → -3 (con negativi)', () => {
        expect(calculator.divide(-9, 3)).toBe(-3);
    });

    test('divide(5, 2) → 2.5 (decimali)', () => {
        expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
    });

    test('divide by zero lancia un errore', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Impossibile dividere per zero.');
    });

    // Potenza
    test('power(2, 3) → 8', () => {
        expect(calculator.power(2, 3)).toBe(8);
    });

    test('power(5, 0) → 1 (qualsiasi numero elevato a zero)', () => {
        expect(calculator.power(5, 0)).toBe(1);
    });

    test('power(2, -2) → 0.25 (esponente negativo)', () => {
        expect(calculator.power(2, -2)).toBeCloseTo(0.25);
    });

    test('power(-2, 3) → -8 (base negativa, esponente dispari)', () => {
        expect(calculator.power(-2, 3)).toBe(-8);
    });
});
