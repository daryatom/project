let a = +prompt ('Введите А')
let b = +prompt ('Введите В')
let res 


if (a < 0 && b < 0) {
alert('Результат операции равен ' + (res = a * b))
} else if (a > 0 && b > 0) {
alert('Результат операции равен '+ (res = a / b))
    }
    else if (a > 0 && b < 0 || a < 0 && b > 0) {
        alert('Результат операции равен ' + (res = a + b))
        }
