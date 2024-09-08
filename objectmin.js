const phone =[
    {name: 'samsung', price:26000, cemera: '12px',battary: '4000mp'},
    {name: 'xoimi', price:20000, cemera: '12px',battary: '4000mp'},
    {name: 'Oppo', price:24000, cemera: '12px',battary: '4000mp'},
    {name: 'realme', price:18000, cemera: '12px',battary: '4000mp'},
    {name: 'iphome', price:106000, cemera: '12px',battary: '4000mp'},
    {name: 'redme',price:27000, cemera: '12px',battary: '4000mp'},
    {name: 'motorola', price:21000, cemera: '12px',battary: '4000mp'}
]
function phoneObject(phones){
    let minprice = phones[0];;
    for(const phone of phones){
        if(phone.price < minprice.price){
            minprice = phone;
        }
    }
    return minprice;
}
const min = phoneObject(phone);
console.log(min);