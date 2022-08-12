function greet() {
    console.log(`hello`)
}

greet()

let salute = function() {
    
}

salute()
console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`   // template literal
}

console.log(sayHello('rebecaa', 'hello'))

// 과제 : HI 라고 인사하는 fuction 을 정의하고 실행하라.
const sayHi = function() {
    console.log('HI')
}
const say = sayHi
sayHi()

//
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

// 이름이 없는 일회용 funtion은 ()로 묶어서 사용가능하다. 이 경우 위의 마지막 코드에 ;을 써야한다.
(function() {
    console.log('earth')
})()

let myFn = function(fn) { // 파라미터로 function을 받는경우 리턴값이 있는 fuction이어야 한다.
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg='no message') { // =' ' 기본값 파라미터
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')