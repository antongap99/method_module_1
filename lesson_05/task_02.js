"use strict";

const NewString = (str) => {
    return str[0].toUpperCase() + str.slice(1);
} 
console.log('NewString: ', NewString('привет мир!'));