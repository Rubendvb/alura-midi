function tocaSom(idElemento) {
  const elemento = document.querySelector(idElemento);
  elemento.play();
}

const listaTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaTeclas.length; i++) {
  const tecla = listaTeclas[i];
  let instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  listaTeclas[i].addEventListener("click", function () {
    tocaSom(idAudio);
  });

  listaTeclas[i].addEventListener("keydown", function (e) {
    if (e.keyCode === 13 || e.keyCode == 32) {
      listaTeclas[i].classList.add("ativa");
    }
  });

  listaTeclas[i].addEventListener("keyup", function (e) {
    if (e.keyCode === 13 || e.keyCode == 32) {
      listaTeclas[i].classList.remove("ativa");
    }
  });
}
