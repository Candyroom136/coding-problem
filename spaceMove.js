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
		const xyDistance = input.map(cur => {
			const location = cur.split(' ');
			return location[1] - location[0];
		});
		xyDistance.shift();

		for (let i = 0; i < xyDistance.length; i++) {
			console.log(minExecution(xyDistance[i]));
		}

		function minExecution(distance) {
			const sqrtDistanceBase = parseInt(Math.sqrt(distance));
			const distanceBase = Math.pow(sqrtDistanceBase, 2)
			let minDistance = sqrtDistanceBase * 2;

			if (distance === distanceBase) {
				minDistance--;
			} else if (distance > distanceBase + sqrtDistanceBase && distance <= distanceBase + 2 * sqrtDistanceBase) {
				minDistance++;
			}

			return minDistance;
		}
  }
)