/* 과제 :
2.callback.js 의 짜장면 이야기를, => function 으로 refactoring 하라.
*/
chef1 = food => `달콤한 ${food}.\n`

chef2 = food => `매운 ${food}.\n`

waiter = (food, chef) => chef(food)

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))
         