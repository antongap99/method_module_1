"use strict";

{
const students = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failed = ['Попов', 'Сидоров','Смирнов']


const filter = (allStudents, faildStudents) => {
    const passStudents = [];
    for(let elem of allStudents){
        if(!(faildStudents.includes(elem))){
            passStudents.push(elem)
        }
    }
    return passStudents;
}
console.log(filter(students, failed));





}
