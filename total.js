const products = [
         {name : "chiruni", price : 50  , quainty : 2 },
         {name : "belun", price : 10    , quainty : 5  },
         {name : "ball", price : 100    , quainty : 2 },
         {name : "bat", price : 400     , quainty : 1 },
         {name : "shirt", price : 500   , quainty : 3 },
         {name : "pant", price : 1100   , quainty : 2 }
]
function getProduct(products){
    let totalPrice= 0;
    for(const product of products){
       totalPrice=totalPrice + (product.price * product.quainty);
    }
    return totalPrice;
}
const total = getProduct(products);
console.log(total);