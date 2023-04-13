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

const basket = [];

const scanItem = (barcode) =>{

    const found = items.find((item)=>{
        if(item.barcode === barcode){
            return true;
        }
    });

    return found;


}

const addItemToBasket = (item) =>{
    return basket.push(item);
}


const getBasketValue = () =>{

    const total = basket.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.price;
    }, 0)

    return total;
}

const removeItemFromBasket = (item) =>{
    const indexToRemove = basket.indexOf(item);

    basket.splice(indexToRemove, 1);

}


module.exports={
    scanItem,
    addItemToBasket,
    basket,
    getBasketValue,
    removeItemFromBasket,
}