// const arr = [];

// const form = document.querySelector("#form");
// const addname =document.querySelector("#btnadd")
// const userName = document.querySelector("#username");
// const btnt =document.querySelector("#btnt");

// form.addEventListener("submit", event => {
//     event.preventDefault();
//     const name = document.querySelector("#name");
//     arr.push(name.value);
//     console.log(arr);
//     document.querySelector(".item1").innerHTML =arr[0];
//     document.querySelector(".item2").innerHTML =arr[1];
//     document.querySelector(".item3").innerHTML =arr[2];
//     document.querySelector(".item4").innerHTML =arr[3];
//     document.querySelector(".item5").innerHTML =arr[4];
//     document.querySelector(".item6").innerHTML =arr[5];
//     document.querySelector(".item7").innerHTML =arr[6];
//     document.querySelector(".item8").innerHTML =arr[7];
//     document.querySelector(".item8").innerHTML =arr[7];
//     document.querySelector(".item9").innerHTML =arr[8];
//     document.querySelector(".item10").innerHTML =arr[9];
//     document.querySelector(".item11").innerHTML =arr[10];
// });

// const arr2 =[]
// btnt.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const userName = document.querySelector("#username");
//     arr2.push(userName.value)
//     console.log(arr2);
//     console.dir(userName.value);
//     console.log(arr.some((val) => val == userName.value));

//     if (arr.some((val) => val == userName.value)) {
//         document.querySelector("#heading").innerHTML ="Bu ism bizda avvaldan mavjud"
//     }else{
//         document.querySelector("#heading").innerHTML ="Kechrasz bunday ism  mavjud emas hohlasangiz qo'shib qoying"
//         addname.style.display ="block"
//     }

// })
// addname.addEventListener("click",event =>{
//     event.preventDefault();
//     arr.push(userName.value)

//  console.log(arr);
//  document.querySelector(".item1").innerHTML =arr[0];
//  document.querySelector(".item2").innerHTML =arr[1];
//  document.querySelector(".item3").innerHTML =arr[2];
//  document.querySelector(".item4").innerHTML =arr[3];
//  document.querySelector(".item5").innerHTML =arr[4];
//  document.querySelector(".item6").innerHTML =arr[5];
//  document.querySelector(".item7").innerHTML =arr[6];
//  document.querySelector(".item8").innerHTML =arr[7];
//  document.querySelector(".item9").innerHTML =arr[8];
//  document.querySelector(".item10").innerHTML =arr[9];
//  document.querySelector(".item11").innerHTML =arr[10];

// })

// console.log(arr2);
const cardel = document.querySelector("#card-box");

function myFunc() {
  let cards = "";
  for (item of pokemons) {
    // Bu yerga col-sm-12 ya'ni kichik telefonlarga yozmapsiz
    cards += `  <div class="card col-sm-12 col-lg-3 col-md-4 col-sm-12 col-12 mx-sm-auto  mx-3 text-center  shadow-lg p-2  rounded  rounded-4  mt-2 mb-4 " >
          <img src="${item.img}" class="card-img-top" alt="images">
       <div class="card-body">
       <h4 class="card-title">${item.id}</h4>
        <h5 class="card-title">${item.name}</h5>
        <h5 class="card-title">${item.spawn_time}</h5>
        <p class="card-text"><span> height: ${item.height}</span><br><span> weight: ${item.weight}</span></p>
        <h6 class="card-title"><span>${item.weaknesses}</span></h6>
      </div>
      </div> `;

    console.log(item.egg);
  }

  cardel.innerHTML = cards;
}
myFunc();

// let cartoonList = document.querySelector(".cartoonList");

// function renderPokemon(pokemons) {
//   let res = "";

//   for (i of pokemons) {
//     res += `
//         <div class="card shadow-lg p-2 mb-5  rounded rounded-4 ms-5 mt-2 mb-5 me-5" style="width: 15rem;  background-color: orange; ">
//         <img src="${i.img}" class="card-img-top" alt="pokemons">
//         <div class="card-body">
//         <h4 style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-text">${i.id}</h4>
//         <h5 style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-title">${i.name}</h5>
//         <h6 style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-title">${i.spawn_time}</h6>
//         <p style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-text">${i.height} ${i.weight}</p>
//         <p style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-text">${i.weaknesses}</p>

//         </div>
//         </div>
//         `;
//   }
//   cartoonList.innerHTML = res;
// }

// renderPokemon(pokemons);
