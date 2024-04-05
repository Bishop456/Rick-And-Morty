function generar(evento){
  const resultado = fetch("https://rickandmortyapi.com/api/character");
  resultado
        .then(response => response.json())
        .then(data => {evento(data)});
}

generar(data => {
  data.results.forEach(personaje => {
    const article = document.createRange().createContextualFragment(`
       <article>
         <div class="image-container">
           <img src="${personaje.image}" alt="Personaje">
         </div>
         <h1>${personaje.name}</h1>
         <h1 style="color: blue;">${personaje.status}</h1>
       </article>
    `);
    const main = document.querySelector("main");
    main.append(article);
  });
});

