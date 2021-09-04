// 숫자의 영어 스펠링이 섞인 숫자와 영어로 이루어진 문자열이 주어질 때 해당 문자열을 숫자로 바꾸는 문제

// 시간복잡도 O(n)
// 해당 문자열을 단 한번만 순회하면서 spelling으로 이루어진 숫자들을 실제 숫자로 바꾸도록 하였음.


function spellingToNumber(s) {
    const sArray = s.split('');
    
    for (let i = 0; i< sArray.length; i++) {
        if (sArray[i] === 'z') {
            sArray[i] = '0';
            sArray.splice(i + 1, 3);
        } else if (sArray[i] === 'o') {
            sArray[i] = '1';
            sArray.splice(i + 1, 2);            
        } else if (sArray[i] === 't') {
            if (sArray[i + 1] === 'w') {
                sArray[i] = '2';
                sArray.splice(i + 1, 2);
            } else if (sArray[i + 1] === 'h') {
                sArray[i] = '3';
                sArray.splice(i + 1, 4);
            }
        } else if (sArray[i] === 'f') {
            if (sArray[i + 1] === 'o') {i + 1
                sArray[i] = '4';
            } else if (sArray[i + 1] === 'i') {
                sArray[i] = '5';
            }
            sArray.splice(i + 1, 3)
        } else if (sArray[i] === 's') {
            if (sArray[i + 1] === 'i') {
                sArray[i] = '6';
                sArray.splice(i + 1, 2);
            } else if (sArray[i + 1] === 'e') {
                sArray[i] = '7';
                sArray.splice(i + 1, 4);
            }         
        } else if (sArray[i] === 'e') {
            sArray[i] = '8';
            sArray.splice(i + 1, 4);
        } else if (sArray[i] === 'n') {
            sArray[i] = '9';
            sArray.splice(i + 1, 3);
        }
    }
    
    const answerNumber = Number(sArray.join(''));

    return answerNumber;
}

console.log(spellingToNumber('one4seveneight'));     // 결과값 1478
console.log(spellingToNumber('23four5six7'));        // 결과값 234567
console.log(spellingToNumber('2three45sixseven'));   // 결과값 234567
console.log(spellingToNumber('123'));                // 결과값 123