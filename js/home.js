// -----------For setting counter--------------
// Starting minute
const startingMinutes = 1;
// multiplied by 60 
let time = startingMinutes * 60;
// Getting the value of element by its id
const countdownEl = document.getElementById('count');
// Set interval
let t=setInterval(updateCountdown,1000);
// Function called on setinterval
function updateCountdown() {
	const minutes = Math.floor(time/60);
	let seconds = time % 60;
	// Append a zero to seconds when value is less than 1
	seconds = seconds < 1 ? '0' + seconds : seconds;
	// Appending value to the element
	countdownEl.innerHTML= minutes + ':' + seconds;
	time--;
	// If time=0:0 
	// if (seconds==0 && minutes==0) {
	// 	// Clearing the interval
	// 	clearInterval(t);
	// 	// go back to the login page
	// 	window.location.href = 'login.html';
	// }
}