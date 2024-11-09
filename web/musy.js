function runMusy() {
    murl = document.getElementById("musy").value
    player = document.getElementById("player")
    player.src=murl;
    event.preventDefault();
}
function testMode() {
    player = document.getElementById("player")
    player.src="https://www.onlinemictest.com/wp-content/themes/onlinemictest/sound.mp3";
}
document.getElementById("btn").addEventListener("click", runMusy);