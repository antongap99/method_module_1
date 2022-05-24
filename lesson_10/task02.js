"use strict";

import {listIPv4} from './ipv4.js';
console.log(listIPv4.length);

let ips = new Set([...listIPv4]);


let sizeIps = (list) =>{
    return list.size;
}
console.log(sizeIps(ips));





