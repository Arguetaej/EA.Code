var cartForParty =
{
 banana: 1.25,
  handkerchief: .99,
  tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

var vegetables={
  tomatoes:2.00,
  lettuce:1.00,
};

var outfit={
  shirt:10,
  pants:20,
  belt:15,
  shoes:25,
};

function addAll(x){

let prices =Object.values(x);
let length = Object.keys(x).length;
let totalSum = 0;

for(var i=0; i<length; i++){totalSum+= prices[i]
};
console.log(totalSum);
}
addAll(outfit)
