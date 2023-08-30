//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let Srectangle = (a,b) => {
    let c = a * b;
    console.log(c)
    return c;
}
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let Scircle = (r) => {
    let S = 2 * 3.14 * r;
    console.log(S);
    return S;
}
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let Scilinder = (r,h) => {
    let S = 2 * 3.14 * r * h;
    console.log(S);
    return S;
}
//- створити функцію яка приймає масив та виводить кожен його елемент
let printArr = (arr) =>{
    for (let i = 0; i < arr.size; i++) {
        console.log(arr[i])
    }
}
