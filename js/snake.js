
export const SNAKE_SPEED = 1;
const snakeBody = [
	{ x: 11, y: 11 },
	{ x: 10, y: 11 },
	{ x: 9, y: 11 },
	{ x: 8, y: 11 },
	]


export function update() {
	console.log("update snake");
}

export function draw(gameBoard) {
	console.log("draw snake");
	
	snakeBody.forEach(segment => {
		const snakeElement = document.createElement('div');
		
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add('snake');
		
		gameBoard.appendChild(snakeElement);
	})
}

