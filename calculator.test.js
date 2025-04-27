describe('Operazioni base di addizione', () => {
    test('2 + 2 dovrebbe essere 4', () => {
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
    });

    test.skip('3 + 5 non dovrebbe essere 7 (test intenzionalmente errato)', () => {
        const result = calculator.add(3, 5);
        expect(result).toBe(7);
    });
});
