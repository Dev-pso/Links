function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  /////////////////////////////////////////////////////////

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/astro-black.png")
  } else {
    //se tiver sem light mode, mantera imgame normal
    img.setAttribute("src", "./assets/astro.png")
  }
}
