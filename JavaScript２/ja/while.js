'use strict'

// let hp = 100;

// while (hp > 0){
//     console.log(`${hp} HP left !`);
//     hp -= 15;
// }

// let hp = -50;
 
// do {
//     console.log(`${hp} HP left !`);
//     hp -= 15;
// } while (hp > 0);

for (let i = 1; i<=10 ; i++){
    // if(i === 4){
    //     if(i % 3 === 0){
    //     continue;// i = 4　の時ループの処理がされずスキップされる。
    // }
    if(i === 4) {
        break;// break だと　以降の処理がスキップされる
    }
    console.log(i);
}

