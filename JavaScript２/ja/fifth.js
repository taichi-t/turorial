'use strict'

const score = 60;
const name = 'taguchi';

if(score >= 50){
    if(name === 'taguchi'){
    console.log('Good job!')
    }
}

// && なおかつ (AND)
// || もしくは (OR)
// ! ~ではない (NOT)

if (score >= 50 && name === 'taguchi'){
    console.log('Good job');
}

//論理演算子を使うを複雑な式も簡単にかける