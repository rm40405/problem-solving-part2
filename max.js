const array = [10,12,3,14,20,35,4,40,2,15];

function maxValue(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number> max){
            max = number;
        }

    }
    return max;
}
console.log('max value: '+maxValue(array));