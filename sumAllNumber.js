// 부호를 생략한 숫자들의 배열 absolutes와 각 숫자들의 부호를 true, false로 나타낸 signs가 주어질 때 부호를 적용한 숫자들의 합을 구하여 리턴한다.

// 시간복잡도 O(n)
// absolutes에 대해 순회하면서 signs를 보며 부호를 정해 더한 값을 리턴한다.

function sumAllNumber(absolutes, signs) {
    const result = absolutes.reduce((sum, cur, idx) => (sum + cur * convertBooleanToSign(signs[idx])), 0);
    
    function convertBooleanToSign(isPlusSign) {
        return isPlusSign ? 1 : -1;
    }
    
    return result;
}

console.log(sumAllNumber([4,7,12], [true,false,true]));	// 결과값 9
console.log(sumAllNumber([1,2,3], [false,false,true])); // 결과값 0