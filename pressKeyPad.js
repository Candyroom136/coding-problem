// 1 2 3
// 4 5 6
// 7 8 9
// * 0 #
// 위와 같은 키패드가 있고 왼쪽 손가락은 *, 오른쪽 손가락은 #에서 시작할 때
// 1,4,7은 왼손으로 치고 3,6,9는 오른손으로 치며 2,5,8,0은 두손가락에서 가까운 곳에서 친다
  // 거리 계산은 각 손가락에서 상하좌우 한칸씩 이동할 때 2,5,8,0으로 도착 할 수 있는 가장 작은 칸수로 한다.
  // 만약 거리가 같을 경우에는 왼손잡이는 왼손으로 입력, 오른손잡이는 오른손으로 입력한다.
// 주어진 숫자입력정보 numbers와 사용자의 손잡이 정보 hand를 통해 사용자의 왼손, 오른손 사용결과를 문자열을 통해 리턴한다.

// 시간복잡도 O(n)
// numbers가 1,4,7이면 왼손입력 추가, numbers가 3,6,9이면 오른손입력 추가
// 그 외의 경우 location 변수에 각 손가락 위치를 할당한 이후 가고자 하는 버튼의 위치와의 거리를 비교 더 짧을 곳에 위치한 손가락입력 추가. 같을 경우에는 hand에 나타난 손가락을 입력.


function pressKeyPad(numbers, hand) {
  let result = '';
  let leftLocation = [3, 0];
  let rightLocation = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 1) {
      result += 'L';
      leftLocation = [parseInt(numbers[i] / 3), 0];
    } else if (numbers[i] %3 === 0 && numbers[i] !== 0) {
      result += 'R';
      rightLocation = [parseInt(numbers[i] / 3) - 1, 2];
    } else {
      let destination;
      if (numbers[i] === 0) {
        destination = [3, 1];
      } else {
        destination = [parseInt(numbers[i] / 3), 1];
      }
        const leftDistance = Math.abs(destination[0] - leftLocation[0]) + Math.abs(destination[1] - leftLocation[1]);
        const rightDistance = Math.abs(destination[0] - rightLocation[0]) + Math.abs(destination[1] - rightLocation[1]);
      if (leftDistance < rightDistance) {
        result += 'L';
        leftLocation = destination.slice();
      } else if (leftDistance > rightDistance) {
        result += 'R';
        rightLocation = destination.slice();
      } else {
        if (hand === 'left') {
          result += 'L';
          leftLocation = destination.slice();
        } else {
          result += 'R';
          rightLocation = destination.slice();
        }
      }
    }
  }
        
  return result;
}

console.log(pressKeyPad([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],	'right')); //	결과값 'LRLLLRLLRRL'
console.log(pressKeyPad([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],	'left'));	 // 결과값 'LRLLRRLLLRR'
console.log(pressKeyPad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],	'right'));	   // 결과값 'LLRLLRLLRL'