//- створити функцію яка повертає найменьше число з масиву
let theSmallest = (a,b) => {
    if (a>b){
        console.log("1st number is bigger than 2nd");
        return a;
    }
    if (a<b){
        console.log("2nd number is bigger than 1st")
        return b;
    }
    if (a==b){
        console.log("1st equals 2nd");
    }
}

theSmallest(10, 5);

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [10, 2, 7];
let sum = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    console.log(sum);
    return sum;
}

sum(arr);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr,index1,index2) => {
    let buffer = arr[index1];
    let buffer1 = arr[index2];
    console.log(arr)
    arr[index1] = buffer1;
    arr[index2] = buffer;
    console.log(arr)
}

swap(arr, 2, 1);

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let exchange = (value,currencyValues,exchangeCurrency) => {
    let result = 0;
    if (exchangeCurrency == 'USD'){
        result = value / currencyValues[0].value;
        console.log(result)
        return result
    }
    if (exchangeCurrency == 'EUR'){
        result = value / currencyValues[1].value;
        console.log(result)
        return result
    }
    else {
        console.log('err');
        return 0;
    }
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR');