const interface = require('readline').createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});
const input = [];
  
interface.on(
  'line',
  function (line) {
    input.push(line);
  }
).on(
  'close',
  function () {

		const sizeOfBoxes = input[1].split(' ').map(cur => Number(cur));

		const memo = [1];

		for (let i = 1; i < sizeOfBoxes.length; i++) {
			
			let minBoxNumber = 1;
			
			for (let j = 0; j < i; j++) {
				if (sizeOfBoxes[j] < sizeOfBoxes[i] && minBoxNumber <= memo[j]) {
					minBoxNumber = memo[j] + 1;
				}
			}

			memo[i] = minBoxNumber;

		}

		console.log(Math.max(...memo));
  }
)