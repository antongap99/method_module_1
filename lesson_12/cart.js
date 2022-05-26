'use strict';

{
  const cart = {
    items: [],
    count: 0,
    discount: 0,

    get totalPrice() {
      return this.calculateItemsPrice();
    },
    set setDiscount(promo){
        if(promo === 'METHED') this.discount = 15;
        if(promo === 'NEWYEAR') this.discount = 21;
    },
    increaseCount(num) {
      this.count += num;
      return this.count;
    },

    calculateItemsPrice() {
      return this.items.reduce((acc, curr) => {
       return  Math.ceil((acc + (curr.itemPrice * curr.itemCount)) * (100 - this.discount) / 100);
      }, 0);
    },
    add(itemName, price, countItem = 1) {
      this.items.push({
        itemName,
        itemPrice: price,
        itemCount: countItem,
      });
      this.increaseCount(countItem);
    },

    clear() {
      this.count = 0;
      this.items = 0;
      this.totalPrice = 0;
    },
    print() {
      return JSON.stringify(this.items);
    },
  };

  //  добавление товаров
  cart.add('apple', 100000, 3);
  cart.add('gygabite', 100000, 10);
  cart.add('asus', 50000, 10);

  // cart.setDiscount = 'METHED';
  cart.setDiscount = 'NEWYEAR';

  console.log(cart.totalPrice);
}
