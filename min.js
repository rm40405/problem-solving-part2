const array = [23,14,12,23,1,23,21,3];
function minValue(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number<min){
            min = number;
        }
    }
    return min;
}
console.log("min value: "+minValue(array));