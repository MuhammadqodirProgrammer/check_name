

// const arr =[1,2,3,4,5]
// const arr2 =[5,5,5,5,5]
// const arr3 =[]

// function myFunction(x,y) {
//     if(x.length == 0){
//         return false
//     }
// return x.every((val) => val === y)
// }
// // console.log(arr2.every((val) => val == 5));
// // console.log(arr3.every((val) => val == 5));
// myFunction(arr,5)
// console.log(myFunction(arr,5));
// console.log(myFunction(arr2,5));
// console.log(myFunction(arr3,5));


const arr = [];

const form = document.querySelector("#form");
const addname =document.querySelector("#btnadd")
const userName = document.querySelector("#username");
const btnt =document.querySelector("#btnt");

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#name");
    arr.push(name.value);
    console.log(arr);
    document.querySelector(".item1").innerHTML =arr[0];
    document.querySelector(".item2").innerHTML =arr[1];
    document.querySelector(".item3").innerHTML =arr[2];
    document.querySelector(".item4").innerHTML =arr[3];
    document.querySelector(".item5").innerHTML =arr[4];
    document.querySelector(".item6").innerHTML =arr[5];
    document.querySelector(".item7").innerHTML =arr[6];
    document.querySelector(".item8").innerHTML =arr[7];
    document.querySelector(".item8").innerHTML =arr[7];
    document.querySelector(".item9").innerHTML =arr[8];
    document.querySelector(".item10").innerHTML =arr[9];
    document.querySelector(".item11").innerHTML =arr[10];
});

const arr2 =[]
btnt.addEventListener("click",(e)=>{
    e.preventDefault();
    const userName = document.querySelector("#username");
    arr2.push(userName.value)
    console.log(arr2);
    console.dir(userName.value);
    console.log(arr.some((val) => val == userName.value));
    
    if (arr.some((val) => val == userName.value)) {
        document.querySelector("#heading").innerHTML ="Bu ism bizda avvaldan mavjud" 
    }else{
        document.querySelector("#heading").innerHTML ="Kechrasz bunday ism  mavjud emas hohlasangiz qo'shib qoying" 
        addname.style.display ="block"
    }

})
addname.addEventListener("click",event =>{
    event.preventDefault();
    arr.push(userName.value)

 console.log(arr);
 document.querySelector(".item1").innerHTML =arr[0];
 document.querySelector(".item2").innerHTML =arr[1];
 document.querySelector(".item3").innerHTML =arr[2];
 document.querySelector(".item4").innerHTML =arr[3];
 document.querySelector(".item5").innerHTML =arr[4];
 document.querySelector(".item6").innerHTML =arr[5];
 document.querySelector(".item7").innerHTML =arr[6];
 document.querySelector(".item8").innerHTML =arr[7];
 document.querySelector(".item9").innerHTML =arr[8];
 document.querySelector(".item10").innerHTML =arr[9];
 document.querySelector(".item11").innerHTML =arr[10];

})

console.log(arr2);



// for (let i = 0; i < arr.length; i++) {
   
// }

// console.dir(arr);

// *some vs every 

// console.log(arr.every((val =>{val ==2})));

// const resalt =arr.some((val) =>val == 2)

// console.log(resalt);


// var numbers =[3.02, -3.65,5, -9]
// var floornumber =[]
// function yaxlit(son) {
//     for(i of son){
//         if(i<0){
//             console.log(Math.round(i*-1));
//         }else{
//             console.log(Math.round(i));
//         }
//     }
// }
// console.log(yaxlit(numbers));

// console.log(Math.floor(numbers[0]));

// if(Math.floor(numbers[0]) ){
//     floornumber.push(Math.floor(numbers[0]))
// }
// if(Math.floor(numbers[1]) ){
//     floornumber.push((Math.floor(numbers[1])*-1))
// }
// if(Math.floor(numbers[2]) ){
//     floornumber.push(Math.floor(numbers[2]))
// }
// if(Math.floor(numbers[3]) ){
//     floornumber.push((Math.floor(numbers[3])*-1))
// }
// console.log(floornumber);





