function tocaSom(idElemento) {
  document.querySelector(idElemento).play();
}

const listaTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaTeclas.length) {
  const tecla = listaTeclas[contador];
  let instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  listaTeclas[contador].addEventListener("click", function () {
    tocaSom(idAudio);
  });
  contador++;
}
