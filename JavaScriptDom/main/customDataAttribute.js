'use strict';
{
    //custon data atttribute

    // const h1 = document.querySelector('h1');

    // console.log(h1.dataset.appId);
    // h1.dataset.message = 'this is custom message!';
    //if you get the custon data id from HTML, don't need the hyphen and 'data', and after second hyphen,  the first letter in the word shoul be capital letter.
    // like this; data-app-id => appId

    const h1 = document.querySelector('h1');

    console.log(h1.dataset.appId);
    h1.dataset.message = 'this is custom message!';

    //https://www.webprofessional.jp/how-why-use-html5-custom-data-attributes/
}