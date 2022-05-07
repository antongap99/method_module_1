const rain = Math.round(Math.random());
//console.log('rain: ', rain);


//Second task
let answer = (random)  => {
    if(random){
        console.log('Пошел дождь. Возьми зонт!');
    } else{
        console.log('Дождя нет!');
    }
}

answer(rain);

//Third task

const russianLang = Number(prompt('Баллы по русскому языку?', 0));
const mathObject = Number(prompt('Баллы по математике?', 0));
const infoObject = Number(prompt('Баллы по информатике?', 0));

function isPassEx( firstObject, secondObject, thirdObject){
    const sumScore = firstObject + secondObject + thirdObject;
    
    
    if(Number.isNaN(firstObject)|| Number.isNaN(secondObject) || Number.isNaN(thirdObject)) {
            
        console.log('Вы ввели некорректные данные');
    } else {
        if(sumScore >= 265){
            console.log('Поздравляю, вы поступили на бюджет!');
        } else{
            console.log('Вы не поступили');
        }
    }    
}

//isPassEx(russianLang, mathObject, infoObject);


//fourth task

const cushQuery = Number(prompt('Введите сумму выдачи', 0));

const bankAnswer = (req) => {
    if(!(Number.isNaN(req))){
        if( req % 100 == 0){
            console.log(`Вы получили ${req / 100} купюр`);
        } else {
            console.log('минимальная сумм выдачи 100р')
        }
    }
}

bankAnswer(cushQuery);

