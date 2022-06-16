let addButtons = Array.from(document.querySelectorAll("#add-button"));
let minusButtons = Array.from(document.querySelectorAll("#minus-button"));
let quantitys = Array.from(document.querySelectorAll("#quantity"));
let prices = Array.from(document.querySelectorAll("#price"));
let remove = Array.from(document.querySelectorAll("#remove"));
let parents = Array.from(document.querySelectorAll("#itemInfo"));
let hearts = Array.from(document.querySelectorAll("#heart"));

let arrOfQuantitys = [];
let arrOfPrices = [];
let arrOfcPrices = ["cPrice"];
for(let i in quantitys){
    arrOfQuantitys[i] = 1 ;
}
for(let i in prices ){
    arrOfPrices[i] = +prices[i].innerHTML;
}

function updateTotal(){
    let total = 0 ;
    for(let i in quantitys)
    total += arrOfPrices[i]*arrOfQuantitys[i];

    document.getElementById('total').textContent=`TOTAL: ${total} MAD`;
}
updateTotal();

function updatePrices(){
    let cPrice = 0 ;
    for(let i in quantitys)
    total += arrOfcPrices[i]*arrOfQuantitys[i];
    document.getElementById('cPrice').textContent=`: ${cPrice} `;
}



// Plus
for(let i in addButtons){
    addButtons[i].addEventListener("click",function(){
        arrOfQuantitys[i]++;
        quantitys[i].innerHTML = arrOfQuantitys[i];
        updateTotal();
    });
}

//Minus
for(let i in minusButtons){
    minusButtons[i].addEventListener("click",function(){
        if(arrOfQuantitys[i] > 1){
            arrOfQuantitys[i]--;
            quantitys[i].innerHTML = arrOfQuantitys[i];
            updateTotal();
        }
    });
}

//Delete
for(let i in remove){
    remove[i].addEventListener("click",function(){
        arrOfQuantitys[i] = 0;
        updateTotal();
        parents[i].remove();
    });
}


//Heart
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('src') == "img/heartE.png")
        hearts[i].setAttribute('src','img/heartA.png');
        else
        hearts[i].setAttribute('src','img/heartE.png');
    });
}
