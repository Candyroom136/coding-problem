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

		while (input.length !== 0 && input[0] !== '0 0') {
			const currentMap = makeMap();
			const currentIslandNumber = getIslandNumber(currentMap);
			console.log(currentIslandNumber);
		} 

    process.exit();

		function makeMap() {
			const [width, height] = 	input.shift().split(' ').map(cur => Number(cur));
			const map = new Array(height).fill(0).map(cur => new Array(width));
			
			for (let i = 0; i < height; i++) {
				const rowMap = input.shift().split(' ');
				for (let j = 0; j < width; j++) {
					map[i][j] = rowMap[j];
				}
			}

			return map;
		}

		function getIslandNumber(map) {
			const isVisited = new Array(map.length).fill(0).map(cur => new Array(map[0].length).fill(false));
			let islandNumber = 0;

			for (let i = 0; i < map.length; i++) {
				for (let j = 0; j < map[0].length; j++) {
					if (isValidLocation(i, j)) {
						visitIsland(i, j);
						islandNumber++;
					}
				}
			}

			return islandNumber;
	
			function visitIsland(x, y) {
				if(isValidLocation(x, y)) {
					isVisited[x][y] = true;
					visitIsland(x + 1, y + 1);
					visitIsland(x + 1, y);
					visitIsland(x + 1, y - 1);
					visitIsland(x, y + 1);
					visitIsland(x, y - 1);
					visitIsland(x - 1, y + 1);
					visitIsland(x - 1, y);
					visitIsland(x - 1, y - 1);
				} else {
					return 0;
				}
			}

			function isValidLocation(x, y) {
				return isVisited[x] && !isVisited[x][y] && map[x][y] === '1'
			}
		}
  }
)