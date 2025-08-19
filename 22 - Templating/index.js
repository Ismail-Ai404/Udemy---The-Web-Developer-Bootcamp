/** @format */
const express = require("express");
const axios = require("axios");

const app = express();
app.set("view engine", "ejs");

const typeColors = {
     normal: "#A8A878",
     fire: "#F08030",
     water: "#6890F0",
     electric: "#F8D030",
     grass: "#78C850",
     ice: "#98D8D8",
     fighting: "#C03028",
     poison: "#A040A0",
     ground: "#E0C068",
     flying: "#A890F0",
     psychic: "#F85888",
     bug: "#A8B820",
     rock: "#B8A038",
     ghost: "#705898",
     dragon: "#7038F8",
     dark: "#705848",
     steel: "#B8B8D0",
     fairy: "#F0B6BC",
};

// Fetch data for one Pokémon
const getPokemon = async (num) => {
     try {
          const response = await axios.get(
               `https://pokeapi.co/api/v2/pokemon/${num}`
          );
          return response.data;
     } catch (error) {
          console.error(error);
          return null;
     }
};

// Home route
app.get("/", async (req, res) => {
     try {
          // Example: fetch 3 Pokémon
          const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

          // Run requests in parallel
          const pokemons = await Promise.all(nums.map(getPokemon));

          // Pass to EJS template
          res.render("home", { pokemons });
     } catch (err) {
          res.status(500).send("Something went wrong");
     }
});

// Dynamic route: detailed page
app.get("/info/:identifier", async (req, res) => {
     const { identifier } = req.params;
     try {
          const response = await axios.get(
               `https://pokeapi.co/api/v2/pokemon/${identifier}`
          );
          res.render("info", { pokemon: response.data });
     } catch (err) {
          res.status(404).send("Pokémon not found");
     }
});

app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
});
