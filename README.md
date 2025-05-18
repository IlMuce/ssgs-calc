# SSGS Calculator

Una semplice calcolatrice da riga di comando implementata in Node.js che supporta le operazioni di base:

- Addizione  
- Sottrazione  
- Moltiplicazione  
- Divisione (con gestione dell’errore di divisione per zero)  
- Potenza  

---

## Prerequisiti

- Node.js v18 o superiore  
- npm (gestore pacchetti di Node.js)  

---

## Installazione

1. Clona il repository:
   git clone https://github.com/IlMuce/ssgs-calc.git
   cd ssgs-calc
2. Installa le dipendenze:
    npm ci    # da usare per installazioni dopo aver clonato il repository

## Utilizzo

Esegui lo script principale per accedere all’interfaccia a riga di comando:

    node app.js

Segui le istruzioni a schermo per scegliere l’operazione e inserire i parametri.

## Esecuzione dei test

I test unitari sono scritti con Jest e coprono al 100% il modulo calculator.js.

    npm test

Se la coverage scende sotto il 100%, il comando terminerà con errore.

## Pipeline CI

Questo progetto è dotato di un workflow GitHub Actions che esegue automaticamente i test (con **Jest** e coverage al 100%) ad ogni **push** e **pull request** sul branch `main`.  
- **Cosa fa:** esegue `npm ci`, poi `npm test -- --coverage`  
- **File di configurazione:** `.github/workflows/ci.yml`