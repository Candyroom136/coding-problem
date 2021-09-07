function getDotProduct(vectorA, vectorB) {

  return  vectorA.reduce((dotProduct, elementA, indexOfB) => (dotProduct + elementA * vectorB[indexOfB]), 0);
}

console.log(getDotProduct([1,2,3,4], [-3,-1,0,2])) // 결과값 3
console.log(getDotProduct([-1,0,1],	[1,0,-1]))     // 결과값 -2