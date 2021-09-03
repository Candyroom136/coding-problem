// 어떤 놀이기구는 한 번더 탈때마다 가격이 price만큼 오름.
// 처음 가격은 price
// 이 놀이기구를 count번 탈 때 가지고 있는 money에 비해 부족한 돈이 얼마인지 묻는 문제.
// 단, 돈이 부족하지 않으면 0을 리턴한다.

function insufficientMoney(price, money, count) {
  const totalPrice = price * count * (count + 1) / 2
  const remain = totalPrice >= money ? totalPrice - money : 0;
  return remain;
}

console.log(insufficientMoney(3, 20, 4)) // 결과값 10