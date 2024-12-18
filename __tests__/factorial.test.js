const factorial = require('../factorial');

describe('Тести для функції factorial', () => {
    test('Факторіал 0 повинен бути 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Перевірка факторіалу для позитивних чисел', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    });

    test('Перевірка факторіалу для великого числа', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('Факторіал негативного числа повинен викликати помилку', () => {
        expect(() => factorial(-1)).toThrow("Число повинно бути невід'ємним цілим.");
    });

    test('Факторіал дробового числа повинен викликати помилку', () => {
        expect(() => factorial(2.5)).toThrow("Число повинно бути невід'ємним цілим.");
    });
});
