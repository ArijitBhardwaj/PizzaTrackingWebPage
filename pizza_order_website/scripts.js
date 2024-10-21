document.addEventListener("DOMContentLoaded", () => {
    const submitOrderButton = document.getElementById("submitOrder");
    const statusMessage = document.getElementById("statusMessage");

    if (submitOrderButton) {
        submitOrderButton.addEventListener("click", () => {
            alert("Your order has been placed!");
            window.location.href = "track.html";
        });
    }

    if (statusMessage) {
        let currentStep = 0;
        const statusSteps = [
            "Your order is being prepared...",
            "Your order is in the oven...",
            "Your order is out for delivery...",
            "Your order has been delivered!"
        ];

        setInterval(() => {
            if (currentStep < statusSteps.length) {
                statusMessage.textContent = statusSteps[currentStep];
                currentStep++;
            }
        }, 5000);
    }
});
