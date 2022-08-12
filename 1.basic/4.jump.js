if(true){}
if(false){} else {}

if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

if(-1) {console.log('!')}

console.log(true ? 1 : 0);

let val

switch('boo') {
    case 'bar': val = 'bar'; break  // 한줄에 명령문이 2개일경우는 ;을 사용한다.
    case 'baz': val = 'baz'
    default: val = 'all right.'
}

console.log(val)