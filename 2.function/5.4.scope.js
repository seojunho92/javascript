//sayHi() function은 node js가 로딩되는순간 생성되어 바로사용 가능하지만. name 변수 경우는 순서대로 사용해야한다.
let name = 'neo'
sayHi()

function sayHi() {  // function declaration
    console.log('Hi', name)
}

sayHi()

//
//sayHello()  // ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() {   // fuction expression : function declaration 처럼 호출을 먼저할수 없다.
    console.log('Hello,', name)
}

sayHello()