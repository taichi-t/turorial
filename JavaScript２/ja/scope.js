'use strict'
//scope 有効範囲

const x = 2; 
//グローバルスコープ

function f(){
    // const x = 1;
    console.log(x);
}

f();
console.log(x);