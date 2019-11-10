'use strict'
{
    const text = document.querySelector('input[type="text"]');
    const textarea = document.querySelector('textarea');

    console.log(text.value);
    console.log(textarea.value);
    //you can use the attibute of value when you get value from input.
    //also you can use the property of value when you get it from text area

    // text.focus();
    // text.select();
    text.disabled = true;
}