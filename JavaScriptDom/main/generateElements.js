'use strict';

{
    const h1 = document.createElement('h1');
    h1.textContent = 'Title';
    document.body.appendChild(h1);
    // apendchild is to add elements on end of body as child elements.

    const p = document.createElement('p');
    p.textContent = 'Hello, hello, hello...';
    document.body.appendChild(p);
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Sub title';
    document.body.insertBefore(h2,p);

    //insertBefore is to add an element in where you want.
    //(h2, p) the first word is what elements do you add,  the second word means where do you wanna add before element.

    // const copy = p.cloneNode(true);
    const copy = p.cloneNode(false);
    //if you set up 'false' on the Parentheses, which means creating an empty element without copying a child-parent and a parents element
    document.body.insertBefore(copy, h2);

    document.body.removeChild(h2);
}