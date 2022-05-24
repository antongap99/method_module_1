{

const cart = {
    items: [],

    get totalPrice(){
        return this.calculateItemsPrice();
    }, 
    count: 0,
    
    

    
    increaseCount(num){
        this.count += num;
        return this.count;
    },

    
    calculateItemsPrice(){
           return this.items.reduce((acc , curr) => {return  acc + (curr.itemPrice * curr.itemCount)}, 0);
    },

    add(itemName, price, countItem = 1){
        this.items.push({
            itemName,
            itemPrice: price,
            itemCount: countItem,
        });
        this.increaseCount(countItem);
        
    },

    clear(){
        this.count = 0;
        this.items = 0;
        this.totalPrice =  0;
    },
    
    print(){
        return JSON.stringify(this.items);
    },
}


//добавление товаров
cart.add('apple', 100000, 3);
cart.add('asus', 50000, 10);
cart.add('gygabite', 100000, 10);



console.log(cart.totalPrice);
cart.totalPrice = 10;

console.log(cart.totalPrice);
}