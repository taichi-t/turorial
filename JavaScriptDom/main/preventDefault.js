'use strict'
{
const a = document.querySelector('a');
const span = document.querySelector('span');

a.addEventListener('click', e =>{
    e.preventDefault();
    a.classList.add('hidden');
    span.classList.remove('hidden');
});

//'preventDefault' is to prevent the characteristic process of an element. 
//for instance, 'a' tag is to jump site to site, so in this case, that is prevented.
}
