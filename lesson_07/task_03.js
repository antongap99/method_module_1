"use strict";

{

    const  addPrefix = (names, prefix) => {
        const result = [];
        for (const elem of names) {
            result.push(prefix + ' ' + elem)
        }
        return result;
    }
    
    
    
    
    
    console.log(' addPrefix: ',  addPrefix(['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'], 'Mr'));


}