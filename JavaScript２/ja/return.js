'use strict';
 function sum(a,b,c){
    //  console.log(a + b + c);
     return a + b + c;
 }


 //returnをかくとそれ以降の処理は実行されない

//  sum(1,2,3);
//  sum(3,4,5);

 const total = sum(1,2,3) + sum(3,4,5);
 console.log(total);