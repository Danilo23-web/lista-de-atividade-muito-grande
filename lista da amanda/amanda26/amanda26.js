  const img = document.getElementById("imagem-hover");

  const imagemOriginal = "Filho-de-Pablo-Marcal-faz-o-L.webp";
  const imagem2 = "172645411366e79961db57f_1726454113_16x9_xl.jpg";

  img.addEventListener("mouseover", () => {
    img.src = imagem2;
  });

  img.addEventListener("mouseout", () => {
    img.src = imagemOriginal;
  })