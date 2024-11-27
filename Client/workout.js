// Function to start the countdown timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var warmupMinutes = 5,
        highIntensitySeconds = 30,
        activeRecoverySeconds = 30,
        coolDownMinutes = 5,
        warmupSeconds = warmupMinutes * 60,
        coolDownSeconds = coolDownMinutes * 60,
        totalRounds = 3,
        display = document.querySelector('#countdown');

    // Warm-up timer
    display.textContent = "Warm-Up";
    startTimer(warmupSeconds, display);

    setTimeout(function () {
        // High-intensity and active recovery intervals
        for (var i = 0; i < totalRounds; i++) {
            // High-intensity timer
            display.textContent = "High Intensity";
            startTimer(highIntensitySeconds, display);

            // Active recovery timer
            setTimeout(function () {
                display.textContent = "Active Recovery";
                startTimer(activeRecoverySeconds, display);
            }, highIntensitySeconds * 1000 + i * (highIntensitySeconds + activeRecoverySeconds) * 1000);
        }

        // Cool-down timer
        setTimeout(function () {
            display.textContent = "Cool Down";
            startTimer(coolDownSeconds, display);
        }, totalRounds * (highIntensitySeconds + activeRecoverySeconds) * 1000);
    }, warmupSeconds * 1000);
};
