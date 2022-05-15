{

const cart = {
    items: [],
    totalPrice: 0, 
    count: 0,
    
    getTotalPirce(){
        return this.totalPrice;
    },

    
    increaseCount(num){
        this.count += num;
        return this.count;
    },

    
    calculateItemPrice(){
           this.totalPrice = this.items.reduce((acc , curr) => {return  acc + (curr.itemPrice * curr.itemCount)}, 0);
    },

    add(itemName, price, countItem = 1){
        this.items.push({
            itemName,
            itemPrice: price,
            itemCount: countItem,
        });
        this.increaseCount(countItem);
        this.calculateItemPrice();
    },

    clear(){
        this.count = 0;
        this.items = 0;
        this.totalPrice =  0;
    },
    
    print(){
       return console.log(JSON.stringify(this.items));
    }
}



cart.add('apple', 100000, 3);
cart.add('asus', 50000, 10);
cart.add('gygabite', 100000, 10);

console.log(cart.items);

console.log( cart.count);

console.log(cart.totalPrice);
//console.log( cart.getTotalPirce());




}