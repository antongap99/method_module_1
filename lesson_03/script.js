'use strict'

{
    const item = 'smart проектор philips';
    const count = 15;
    const category = 'электроника';
    const price = 1200;     
}

{
    const item = 'Телевизор Samsumg';
    const count = 10
    const category = 'электроника';
    const price = 30000;
}

{
    const item = 'Смарт-часы Apple';
    const count = 120
    const category = 'электроника';
    const price = 25000;
}

{
    const answer_item = prompt("Какой товар инересует?", 'часы');
    const answer_count = Number(prompt("Сколько на склада?", '20'));
    const answer_category = prompt("Категория?", 'электроника');
    const answer_price = Number(prompt("цена одного товара?", '10000'));

    console.log('На складе `${answer_count}` единицы товара `${answer_item}` на сумму `${answer_price}` деревянных.');
}
