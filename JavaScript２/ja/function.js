'use strict'

function showAd(massage = 'Ad'){//仮引数
    console.log('----------');
    console.log(`${massage}`);
    console.log('----------');
}
showAd('Header Ad'); //実引数
console.log('Tom is great!');
console.log('Bob is great!');
// showAd('Ad')
showAd()
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');