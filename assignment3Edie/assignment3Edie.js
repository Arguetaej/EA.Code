
var cartForParty =
{

};


function itemA(){
	cartForParty.miters=250.00*document.getElementById("quantityA").value
};

function itemB(){
	cartForParty.ladders=75.00*document.getElementById("quantityB").value
};


function itemC(){
	cartForParty.ccleaner=175.00*document.getElementById("quantityC").value
};

function itemD(){
	cartForParty.acompressor=150.00*document.getElementById("quantityD").value
};

function itemE(){
	cartForParty.generator=195.00*document.getElementById("quantityE").value
};

function itemF(){
	cartForParty.Auger=95.00*document.getElementById("quantityF").value
};

function itemG(){
	cartForParty.tiller=125.00*document.getElementById("quantityG").value
};

function itemH(){
	cartForParty.lmower=85.00*document.getElementById("quantityH").value
};

function itemI(){
	cartForParty.pump=165.00*document.getElementById("quantityI").value
};




//bear-hunt





function addCart(){
let prices =Object.values(cartForParty);

let length = Object.keys(cartForParty).length;
let totalSum = 0;

for(var i=0; i<length; i++){totalSum+= prices[i];

document.getElementById("tot").innerHTML= "$" + totalSum;}



console.log(totalSum)

};
