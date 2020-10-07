let lastRenderTime = 0
const SNAKE_SPEED = 1;

function main(currentTime) {
	window.requestAnimationFrame(main);
	
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // ms -> s
	
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return // change speed animation
	
	console.log(secondsSinceLastRender)
	
	lastRenderTime = currentTime
}	

window.requestAnimationFrame(main) // animation queue management
