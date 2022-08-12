let foo = "I am a string"   // JS의 변수는 타입이없다.
foo = 'So am I'
foo = `back tick`

foo = 1
foo = 1.0

console.log(1 / 0)
console.log('a' / 1) // NaN(Not a Number)

foo = 1
console.log(isFinite(foo))  // 숫자인지 아닌지 검사
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-789123'   // - 를 구분자로 사용하여 앞의 부분만 숫자로 표현한다.
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))   // 정수만 나타낸다.
console.log(parseFloat(foo)) // 실수로 나타낸다.

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN  // NaN
console.log(a)

foo = 1n

const okay = true
const fail = false

let val = null

let val2 // undefined : 에러가 아닌 값이다. 따라서 값으로 넣어줄수도있다.
val2 = undefined
console.log(val2)

let id = Symbol('id')
console.log(typeof id)  // typeof : id 변수에 있는 type을 return 해준다.

val = 1
val = String(val) // number를 String 타입으로 바꿈.
console.log(typeof val)

val = '6' / '2'  // 자동으로 숫자 6 , 2 로 캐스팅되어 계산된다.
console.log(val)

val = false / true // false 는 0 , true 는 1 로 캐스팅된다.
console.log(val)

val = '1'
val = Number(val) // 문자를 숫자로 바꿈.
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''),Number(null), Number(false)) // 0으로 캐스팅된다.
console.log(Number('a'), Number(undefined), Number(NaN))

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) // ture : 값이 있다. 
console.log(Boolean(0), Boolean(''), Boolean(null),Boolean(undefined), Boolean(NaN)) // false : 값이 없다.