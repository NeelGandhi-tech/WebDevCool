const button = document.getElementById("runaway-btn");

const moveAnime = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

['mouseover', 'click'].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const pol = Rando(window.innerHeight - this.offsetHeight);
    const bol = Rando(window.innerWidth - this.offsetWidth);

    moveAnime(this, "left", bol).play(); 
    moveAnime(this, "top", pol).play();  
  });
});

const Rando = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
