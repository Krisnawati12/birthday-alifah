function nextPage(current){

    document
    .getElementById(`page${current}`)
    .classList
    .remove("active");

    document
    .getElementById(`page${current + 1}`)
    .classList
    .add("active");

}

function prevPage(current){

    document
    .getElementById(`page${current}`)
    .classList
    .remove("active");

    document
    .getElementById(`page${current - 1}`)
    .classList
    .add("active");

}

function playMusic(){

    const music =
    document.getElementById("bg-music");

    music.play();

}