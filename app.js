const readline = require('readline');
const calculator = require('./calculator');

// Array di saluti finali
const farewells = [
    "Alla prossima!",
    "Grazie e ciao!",
    "È stato un piacere, a presto!",
    "Ci vediamo alla prossima operazione!"
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nella Super Calcolatrice Avanzata!");
console.log("Operazioni disponibili:");
console.log("1 - Addizione");
console.log("2 - Sottrazione");
console.log("3 - Moltiplicazione");
console.log("4 - Divisione");
console.log("5 - Potenza");
console.log("0 - Esci");

function askOperation() {
    rl.question('Seleziona l\'operazione (0 per uscire): ', (op) => {
        if (op === '0') {
            // Saluto casuale
            const idx = Math.floor(Math.random() * farewells.length);
            console.log(farewells[idx]);
            rl.close();
            return;
        }

        const ops = ['1','2','3','4','5'];
        if (!ops.includes(op)) {
            console.error("Operazione non valida, riprova.");
            return askOperation();
        }

        // Chiediamo i due numeri
        rl.question('Primo numero: ', (first) => {
            const num1 = parseFloat(first);
            if (isNaN(num1)) {
                console.error("Parametro invalido. Riprova.");
                return askOperation();
            }

            rl.question('Secondo numero: ', (second) => {
                const num2 = parseFloat(second);
                if (isNaN(num2)) {
                    console.error("Parametro invalido. Riprova.");
                    return askOperation();
                }

                try {
                    let result;
                    switch (op) {
                        case '1': result = calculator.add(num1, num2); break;
                        case '2': result = calculator.subtract(num1, num2); break;
                        case '3': result = calculator.multiply(num1, num2); break;
                        case '4': result = calculator.divide(num1, num2); break;
                        case '5': result = calculator.power(num1, num2); break;
                    }
                    console.log(`Risultato: ${result}`);
                } catch (err) {
                    console.error(err.message);
                }

                // Dopo ogni operazione, torniamo a chiedere
                askOperation();
            });
        });
    });
}

// Avviamo il ciclo
askOperation();
