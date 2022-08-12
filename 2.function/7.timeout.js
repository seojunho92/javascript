function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) // 첫번째 파라미터를 두번째 파라미터의 시간만큼 뒤에 꺼낸다.

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox') // greet function의 파라미터값 2개를 지정해줄수있다.

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)