/** @format */

const baseURL =
     "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/";

const container = document.querySelector(".container");

for (let index = 1; index <= 200; index++) {
     const div = document.createElement("div");
     const img = document.createElement("img");
     const span = document.createElement("span");

     img.classList.add("pokeimg");
     div.classList.add("pokediv");

     let paddedIndex = "";

     if (index < 10) {
          paddedIndex = `00${index}`;
     } else if (index < 100) {
          paddedIndex = `0${index}`;
     } else {
          paddedIndex = `${index}`;
     }

     img.src = `${baseURL}${paddedIndex}.png`;
     span.textContent = `#${paddedIndex}`;

     // Append img and span to div
     div.appendChild(img);
     div.appendChild(span);

     // Append div to container
     container.appendChild(div);
}
