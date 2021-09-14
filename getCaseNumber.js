const interface = require('readline').createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});
const input = [];
interface.on
(
  'line',
  function (line)
  {
    input.push(line);
  }
).on
(
  'close',
  function ()
  {
    console.log(getCaseNumber(Number(input[0])));
    process.exit();
    function getCaseNumber(n) {
        const memo = [1, 1, 3];
        for (let i = 3; i <= n; i++) {
            memo[i] = memo[i - 1] + 2*memo[i -2 ];
        }
        return memo[n] % 10007;
    }
  }
)