function countLetters(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}
function getRow(firstRow, secondRow, letterToFind) {
    const count1 = countLetters(firstRow, letterToFind);
    const count2 = countLetters(secondRow, letterToFind);

    if (count1 > count2) {
        return firstRow;
    } else if (count2 > count1) {
        return secondRow;
    } else {
        return "Однакова кількість літер або їх немає взагалі.";
    }
}

function runTask1() {
    const firstRow = prompt("Введіть перший рядок:", "Slow and steady wins the race") || "Slow and steady wins the race";
    const secondRow = prompt("Введіть другий рядок:", "You can say that again") || "You can say that again";
    const letter = prompt("Яку літеру будемо рахувати?", "a") || "a";

    const result = getRow(firstRow, secondRow, letter);
    alert(`Рядок з найбільшою кількістю літер "${letter}":\n\n${result}`);
}

function formattedPhone(phone) {
    let cleaned = phone.replace(/\D/g, '');

    if (cleaned.length === 10 && cleaned.startsWith('0')) {
        cleaned = '38' + cleaned;
    } else if (cleaned.length === 11 && cleaned.startsWith('8')) {
        cleaned = '3' + cleaned;
    }

    if (cleaned.length !== 12 || !cleaned.startsWith('380')) {
        return "Помилка: Формат номеру неправильний. Очікується номер типу +380971234567, 80971234567 або 0671234567.";
    }

    const countryCode = cleaned.slice(0, 2); 
    const operatorCode = cleaned.slice(2, 5); 
    const part1 = cleaned.slice(5, 8); 
    const part2 = cleaned.slice(8, 10); 
    const part3 = cleaned.slice(10, 12); 

    return `+${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
}

function runTask2() {
    const inputPhone = prompt("Введіть номер телефону для форматування:", "0671234567");
    if (inputPhone !== null) {
        const result = formattedPhone(inputPhone);
        alert(`Результат форматування:\n\n${result}`);
    }
}
