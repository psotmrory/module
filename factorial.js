function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Число повинно бути невід'ємним цілим.");
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

module.exports = factorial;

// Для інтерактивного тестування в терміналі
if (require.main === module) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Введіть невід\'ємне ціле число: ', (input) => {
        try {
            const number = parseInt(input, 10);
            console.log(`Факторіал числа ${number} дорівнює ${factorial(number)}`);
        } catch (error) {
            console.error(`Помилка: ${error.message}`);
        }
        rl.close();
    });
}
