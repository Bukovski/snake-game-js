import {
	update as updateSnake, draw as drawSnake, SNAKE_SPEED,
	getSnakeHead, snakeIntersection, snakeLength
} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from "./grid.js";


const gameBoard = document.getElementById('game-board');

let lastRenderTime = 0;
let gameOver = false;


function main(currentTime) {
	if (gameOver) {
		if (confirm('Length of your snake: ' + snakeLength() + '\r Press ok to restart.')) {
			window.location.reload();
		}
		
		return;
	}
	
	window.requestAnimationFrame(main);
	
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // ms -> s
	
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return // change speed animation
	
	lastRenderTime = currentTime
	
	update();
	draw();
}	

window.requestAnimationFrame(main) // animation queue management

function update() {
	updateSnake();
	updateFood();
	checkDeath();
}

function draw() {
	gameBoard.innerHTML = "";
	
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}