// N은 마지막 stage단계이고 stages는 각 플레이어별로 정체되어 있는 스테이지를 가리킨다.
// 이 때 각 스테이지별로 실패율을 계산하여 실패율이 높은 순서데로 스테이지를 내림차순으로 나열한 배열을 구하는 문제

function getFailureOrder(N, stages) {
    let failureNumber =  new Array(N + 1).fill(0).map((cur, idx) => [idx, 0]);
    let stagePlayerNumber = stages.length;
    
    stages.forEach(cur => {
        if (cur !== N + 1){
            failureNumber[cur][1] += 1; 
        }
    })
    
    failureNumber.shift();
    
    failureNumber.forEach((cur, idx) => {
        [failureNumber[idx][1], stagePlayerNumber] = [failureNumber[idx][1] / stagePlayerNumber, stagePlayerNumber - failureNumber[idx][1]];
    })
    
    failureNumber = failureNumber.sort((a, b) => b[1] - a[1]).map(cur => cur[0]);
    
    return failureNumber;
}

console.log(getFailureOrder(5, [2, 1, 2, 6, 2, 4, 3, 3])); // 결과값 [3,4,2,1,5]
console.log(getFailureOrder(4, [4,4,4,4,4]));          // 결과값 [4,1,2,3]