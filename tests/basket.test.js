const {scanItem,
       addItemToBasket, 
       basket, 
       getBasketValue, 
       removeItemFromBasket,
    } = require("../basket");

// example data

const orange = {
    barcode: 789,
    price: 7,
};

const pineapple = {
    barcode: 5367,
    price: 89,
};

const kiwi = {
    barcode: 765,
    price: 25,
};

const apple = {
    barcode: 123,
    price: 5,
};

const banana = {
    barcode: 456,
    price: 6,
};


const items = [
    orange,
    pineapple,
    kiwi,
    apple,
    banana
];

describe("Shopping Basket", ()=>{
    
    it("should scan an item barcode and return matching item",()=>{
        const resultItem = scanItem(123)
        
        expect(resultItem).toEqual(apple)
        
    });

    it("should add item to basket", () => {
        addItemToBasket(banana);

        expect(basket).toContain(banana);
    });


    it("should calculate the total price of all items in the basket", () =>{
        addItemToBasket(kiwi);
        const total = getBasketValue()
        expect(total).toBe(31); //kiwi + banana


    });

    it("should remove an item from the basket", ()=>{
        removeItemFromBasket(banana);

        expect(basket).not.toContain(banana)
    });

});