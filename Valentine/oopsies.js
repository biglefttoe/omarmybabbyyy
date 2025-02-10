const goal = document.getElementById("goal");

let playerX = 50, playerY = 50;
const speed = 20;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "w") playerY -= speed;
    if (e.key === "ArrowDown" || e.key === "s") playerY += speed;
    if (e.key === "ArrowLeft" || e.key === "a") playerX -= speed;
    if (e.key === "ArrowRight" || e.key === "d") playerX += speed;

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;

    if (isTouchingGoal()) {
        setTimeout(() => {
            alert("gOOOD JOB MY LOVE!!!!!!!!! next page honey :33 smack the ok");
            window.location.href = "valentine.html";
        }, 200);
    }
});

function isTouchingGoal() {
    let playerBox = player.getBoundingClientRect();
    let goalBox = goal.getBoundingClientRect();
    return !(
        playerBox.right < goalBox.left ||
        playerBox.left > goalBox.right ||
        playerBox.bottom < goalBox.top ||
        playerBox.top > goalBox.bottom
    );
}