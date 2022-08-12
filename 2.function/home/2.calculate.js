/* 과제:
1.calculate.js 를 callback 으로 refactoring 하라.
-, *, / 연산을 callback 으로 처리한다.
*/
function minus(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function calculate(a, b, op=multiply) {
    return op(a, b)
}
console.log(calculate('5', '7', minus))