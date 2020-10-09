import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'


let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
	window.requestAnimationFrame(main);
	
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // ms -> s
	
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return // change speed animation
	
	lastRenderTime = currentTime
	
	update();
	draw();
}	

window.requestAnimationFrame(main) // animation queue management

function update() {
	updateSnake()
}

function draw() {
	drawSnake(gameBoard)
}