import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 1;
const snakeBody = [{ x: 11, y: 11 }]


export function update() {
	console.log("update snake");
	
	const inputDirection = getInputDirection()
	
	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] }
	}
	
	// move snake head
	snakeBody[0].x += inputDirection.x;
	snakeBody[0].y += inputDirection.y;
	
	console.log(snakeBody)
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

