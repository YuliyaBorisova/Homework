document.getElementById("start-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("playerName").value.trim();
    const rounds = parseInt(document.getElementById("rounds").value);

    if (name && rounds > 0) {
        localStorage.setItem("playerName", name);
        localStorage.setItem("rounds", rounds);
        window.location.href = "game.html";
    }
});