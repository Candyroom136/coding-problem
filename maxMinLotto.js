// 로또 번호중 일부와 당첨 번호 전부를 알고 있을 때 최대 당첨순위와 최소 당첨순위를 알아내는 문제
// 6개 일치 1등, 5개 일치 2등, 4개 일치 3등, 3개 일치 4등, 2개 일치 5등, 1개 or 0개 일치 6등.

// 시간복잡도 O(n^2)
// lottos에 대하여 win_nums에 포함되어 있는 게 있을 때마다 sameNumberCounter을 증가시킴

function maxMinLotto(lottos, win_nums) {
  let sameNumberCounter = 0;
  let zeroNumberCounter = 0;

  for (let number of lottos) {
    const winNumberIndex = win_nums.indexOf(number)
    if (winNumberIndex !== -1 && number !== 0) {
      sameNumberCounter++;
    } else if (number === 0) {
      zeroNumberCounter++;
    }
  }

  const maxPriority = 7 - sameNumberCounter - zeroNumberCounter;
  const minPriority = 7 - sameNumberCounter;
  const result = [maxPriority === 7 ? 6 : maxPriority, minPriority === 7 ? 6: minPriority]; 

  return result;
}

console.log(maxMinLotto([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19])); // 결과값	[3, 5]
console.log(maxMinLotto([0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]));   // 결과값 [1, 6]
console.log(maxMinLotto([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))    // 결과값 [1, 1]
