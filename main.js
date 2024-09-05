
document.querySelector("button").onclick = () => {
    document.querySelector(".menu").classList.add("open");
    document.querySelector(".overlay").classList.add("open");
};

document.querySelector(".menu i").onclick = () => {
    document.querySelector(".menu").classList.remove("open");
    document.querySelector(".overlay").classList.remove("open");
};
document.querySelector('.overlay').onclick = function() {
    document.querySelector('.menu').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
};