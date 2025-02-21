document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".toggle");

        answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
        icon.textContent = icon.textContent === "+" ? "−" : "+";
    });
});

// to create stars
function createStars() {
    const starsContainer = document.getElementById("stars-container");
    for (let i = 0; i < 20; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 2 + 1 + "s";
        starsContainer.appendChild(star);
    }
}
createStars();
