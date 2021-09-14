// 어떤 사람이 매일 다른 옷을 입으며 위장을 한다.
// 그 사람이 입을 수 있는 옷들은  [옷 이름, 옷 종류]를 원소로 값는 이중배열이다.
// 매일 적어도 하나의 옷은 입어야 하며 한 종류에는 하나의 옷만 입을 수 있을 때 이 사람이 입을 수 있는 옷의 조합의 수를 구하는 문제

function getCamouflageNumber(clothes) { 
  let quantityOfClothes = {};
    
  for (let i = 0; i < clothes.length; i++) {
    const currentQuantityOfClothes = quantityOfClothes[clothes[i][1]] || 0;
    quantityOfClothes[clothes[i][1]] = currentQuantityOfClothes + 1;     
  }
    
  return Object.values(quantityOfClothes).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

console.log(getCamouflageNumber([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])); // 결과값 5
console.log(getCamouflageNumber([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])); 	          // 결과값 3