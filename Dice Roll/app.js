function shuffle() {
    const img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    img.setAttribute("src", `${randomNumber}.png`);
}
function anim(){
    setTimeout(shuffle, 500);
    const img = document.getElementById("img");
    img.setAttribute("src", "dice-anim.gif");
}