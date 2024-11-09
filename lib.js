function playMusic1() {
player = document.getElementById("player")
player.src="music1.mp3"
}
function playMusic2() {
    player = document.getElementById("player")
    player.src="music2.mp3"
}
function playMusic3() {
    player = document.getElementById("player")
    player.src="music3.mp3"
}
document.getElementById("music").addEventListener("click", playMusic1);
document.getElementById("music2").addEventListener("click", playMusic2);
document.getElementById("music3").addEventListener("click", playMusic3);