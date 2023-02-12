const numbers = document.querySelectorAll(".number h4");
const targetValues = [10, 314, 12];
const duration = 2000; // animation duration in milliseconds

// Step 1: Create a loading screen element
const loadingScreen = document.createElement("div");
loadingScreen.id = "loading-screen";
loadingScreen.textContent = "Loading";
document.body.appendChild(loadingScreen);

// Step 2: Show the loading screen
loadingScreen.style.display = "flex";
loadingScreen.style.opacity = 1;
loadingScreen.style.visibility = "visible";

// Step 3: Delay the start of the number animation by 3 seconds
setTimeout(function () {
	// Step 4: Hide the loading screen
	loadingScreen.style.opacity = 0;
	loadingScreen.style.visibility = "hidden";

	// Step 5: Start the number animation
	function animateNumbers() {
		const startTime = new Date().getTime();
		const updateInterval = 50; // milliseconds

		const timer = setInterval(function () {
			const timePassed = new Date().getTime() - startTime;
			const progress = timePassed / duration;

			if (progress >= 1) {
				clearInterval(timer);
			}

			numbers.forEach(function (number, index) {
				const startValue = 0;
				const endValue = targetValues[index];
				const currentValue = Math.floor(
					startValue + (endValue - startValue) * progress
				);

				number.textContent = currentValue.toLocaleString();
			});
		}, updateInterval);
	}

	animateNumbers();
}, 3000); // 3000 milliseconds = 3 seconds
