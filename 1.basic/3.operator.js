let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2))   // **은 제곱을 나타낸다. 4**2 = 16 , 4**(1/2) : 루트를 나타낸다.

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)

console.log(1 + '2', '1' + '2') // + 연산자는 캐스팅이 되지않는다. 따라서 붙이기가 된다.

// unary plus operator
console.log(1 + +'2') // 숫자인 문자앞에 +기호만 붙여주면 숫자로 변한다.

console.log(1 || 0, 0 || 1)  // or 처음으로 true인 값을 리턴하고 끝낸다.
console.log(1 && 0, 0 && 1)  // and 는 처음으로 false인 값을 리턴하고 끝낸다.
console.log(1 && 2, 2 && 1)  // 어디서도 false인 값이 없으면 마지막 값을 리턴하고 끝낸다.

//foo && do(foo) // foo 에 값이 있다 = true 면 and do(foo)를 실행한다.
//bar = baz || createBar() // baz에 값이 있으면 bar = baz 없으면 or bar = createBar()를 콜한다.

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1, false == 0, '' == false) // +연산자가 아닐경우는 문자가 숫자로 캐스팅이 되어 계산된다.
console.log(true > 1)

// equivalent
console.log(1 == '1', 1 != '1') // == : 타입은 따지지않고 캐스팅하여 content만 비교한다.

// identical
console.log(1 === '1', 1 !== '1') // === : 타입까지 비교한다.

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')  // 문자의 앞자리 유니코드부터 숫자값으로 비교한다. (사전식으로 생각한다.)

console.log(null > 0, null <0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)