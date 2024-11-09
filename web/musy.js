function runMusy() {
    murl = document.getElementById("musy").value
    player = document.getElementById("player")
    player.src=murl;
    event.preventDefault();
}
document.getElementById("btn").addEventListener("click", runMusy);