//first100Price = 80
//second100Price = 70
//avobe200price = 50

function getDiscountPrice(quaintity){
  const first100Price = 80;
  const second100Price = 70;
  const above200Price = 50;
  if(quaintity <= 100){
    const Total = quaintity * first100Price;
    return Total;

  }
  else if(quaintity <= 200){
    const first100Total = 100 * first100Price;
    const remainingQuaintiy = quaintity - 100;
    const remainingTotal = remainingQuaintiy * second100Price;
    const Total = first100Total + remainingTotal;
    return Total;
  }
  else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuaintity = quaintity - 200;
    const remainingTotal = remainingQuaintity * above200Price;
    const Total = first100Total + second100Total + remainingTotal;
    return Total;
  }

}
const totalPrice = getDiscountPrice(230);
console.log(totalPrice);
