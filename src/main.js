// DOM VARIABLES
const pomodoro = document.getElementById("pomo-1");
const shortBreak = document.getElementById("pomo-2");
const longBreak = document.getElementById("pomo-3");
const btnStart = document.querySelector(".btn-1");
const btnPause = document.querySelector(".btn-2");
const timer = document.querySelector(".timer");
const title = document.querySelector("title");

// LOGICAL VARIABLES
let time = 25;
let s = 0;
let countdownInterval;
let audio = new Audio("../music/-2nNgcwXCRI-140.m4a");
let clickBtnSound = new Audio("../music/mixkit-fast-double-click-on-mouse-275.wav");

// HANDLER FUNCTIONS
function handler() {
	pomodoro.addEventListener("click", () => {
		pomodoro.classList.add("bg-color");
		shortBreak.classList.remove("bg-color");
		longBreak.classList.remove("bg-color");
		document.body.style.backgroundColor = "rgb(186, 73, 73)";
		btnStart.style.color = "rgb(186, 73, 73)";
		btnPause.style.color = "rgb(186, 73, 73)";
		timer.innerText = "25:00";
		title.innerText = "25:00";
		btnStart.style.display = "block";
		btnPause.style.display = "none";
		time = 25;
		resetTimer("Pomodoro");
	});

	shortBreak.addEventListener("click", () => {
		shortBreak.classList.add("bg-color");
		pomodoro.classList.remove("bg-color");
		longBreak.classList.remove("bg-color");
		document.body.style.backgroundColor = "rgb(56, 133, 138)";
		btnStart.style.color = "rgb(56, 133, 138)";
		btnPause.style.color = "rgb(56, 133, 138)";
		timer.innerText = "05:00";
		title.innerText = "05:00 - Time for a break!";
		btnStart.style.display = "block";
		btnPause.style.display = "none";
		time = 5;
		resetTimer("Time for a break!");
		// audio = new Audio("./piano.mp3");
		// audio.play();
	});

	longBreak.addEventListener("click", () => {
		longBreak.classList.add("bg-color");
		pomodoro.classList.remove("bg-color");
		shortBreak.classList.remove("bg-color");
		document.body.style.backgroundColor = "rgb(57, 112, 151)";
		btnStart.style.color = "rgb(57, 112, 151)";
		btnPause.style.color = "rgb(57, 112, 151)";
		timer.innerText = "15:00";
		title.innerText = "15:00 - Time for a break!";
		btnStart.style.display = "block";
		btnPause.style.display = "none";
		time = 15;
		resetTimer("Time for a break!");
	});

	btnStart.addEventListener("click", () => {
		btnPause.style.display = "block";
		btnStart.style.display = "none";
		startBtn();
		clickBtnSound.play();
		// audio = new Audio("./piano.mp3");
		audio.play();
	});

	btnPause.addEventListener("click", () => {
		btnStart.style.display = "block";
		btnPause.style.display = "none";
		pauseBtn();
		clickBtnSound.play();

		// audio = new Audio("./piano.mp3");
		audio.pause();
	});
}

// TIMER FUNCTIONS
const startBtn = () => {
	if (!countdownInterval) {
		countdownInterval = setInterval(() => {
			timer.innerText = `${addNullNumber(time)}:${addNullNumber(s)}`;
			title.innerText = `${addNullNumber(time)}:${addNullNumber(s)}`;

			if (s === 0) {
				if (time === 0) {
					clearInterval(countdownInterval);
					countdownInterval = null;
					return;
				}
				s = 59;
				time--;
			} else {
				s--;
			}
		}, 1000);
	}
};

const pauseBtn = () => {
	clearInterval(countdownInterval);
	countdownInterval = null;
};

const addNullNumber = (num) => (num < 10 ? "0" + num : num);

const resetTimer = (str) => {
	clearInterval(countdownInterval);
	s = 0;
	timer.innerText = `${addNullNumber(time)}:${addNullNumber(s)}`;
	title.innerText = `${addNullNumber(time)}:${addNullNumber(s)} -${str}`;
	countdownInterval = null;
};

// INITIALIZE
function init() {
	handler();
}

init();
