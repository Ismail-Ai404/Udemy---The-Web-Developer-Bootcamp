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
     fairy: "#EE99AC",
};

const typeGradients = {
     normal: "linear-gradient(to right, #A8A878, #E0E0A0)",
     fire: "linear-gradient(to right, #F08030, #F8A030)",
     water: "linear-gradient(to right, #6890F0, #78A0F0)",
     electric: "linear-gradient(to right, #F8D030, #F8E030)",
     grass: "linear-gradient(to right, #78C850, #88D850)",
     ice: "linear-gradient(to right, #98D8D8, #A8E0E0)",
     fighting: "linear-gradient(to right, #C03028, #D03030)",
     poison: "linear-gradient(to right, #A040A0, #B050B0)",
     ground: "linear-gradient(to right, #E0C068, #E0D070)",
     flying: "linear-gradient(to right, #A890F0, #B8A0F0)",
     psychic: "linear-gradient(to right, #F85888, #F87898)",
     bug: "linear-gradient(to right, #A8B820, #B8C830)",
     rock: "linear-gradient(to right, #B8A038, #C0A040)",
     ghost: "linear-gradient(to right, #705898, #8060A0)",
     dragon: "linear-gradient(to right, #7038F8, #8040F8)",
     dark: "linear-gradient(to right, #705848, #806050)",
     steel: "linear-gradient(to right, #B8B8D0, #C0C0D0)",
     fairy: "linear-gradient(to right, #F0B6BC, #F0C0C0)",
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
          const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

          // Run requests in parallel
          const pokemons = await Promise.all(nums.map(getPokemon));

          // Pass to EJS template
          res.render("home", { pokemons, typeColors, typeGradients });
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
          res.render("info", { pokemon: response.data }), typeGradients;
     } catch (err) {
          res.status(404).send("Pokémon not found");
     }
});

app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
});
