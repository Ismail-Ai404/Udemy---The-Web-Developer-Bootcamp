/** @format */

const express = require("express");
const path = require("path");
const { json } = require("stream/consumers");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// ✅ Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

const topMovies = [
     {
          id: "tt0068646",
          title: "The Godfather",
          rating: 9.2,
          img: "https://image.tmdb.org/t/p/w300/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
     },
     {
          id: "tt0071562",
          title: "The Godfather: Part II",
          rating: 9.0,
          img: "https://image.tmdb.org/t/p/w300/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
     },
     {
          id: "tt0468569",
          title: "The Dark Knight",
          rating: 9.0,
          img: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
     },

     {
          id: "tt0108052",
          title: "Schindler's List",
          rating: 9.0,
          img: "https://image.tmdb.org/t/p/w300/c8Ass7acuOe4za6DhSattE359gr.jpg",
     },
     {
          id: "tt0167260",
          title: "The Lord of the Rings: The Return of the King",
          rating: 9.0,
          img: "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
     },
     {
          id: "tt0110912",
          title: "Pulp Fiction",
          rating: 8.9,
          img: "https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
     },
     {
          id: "tt0060196",
          title: "The Good, the Bad and the Ugly",
          rating: 8.8,
          img: "https://image.tmdb.org/t/p/w300/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
     },
     {
          id: "tt0120737",
          title: "The Lord of the Rings: The Fellowship of the Ring",
          rating: 8.8,
          img: "https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
     },
];
const moreMovies = [
     {
          id: "tt0109830",
          title: "Forrest Gump",
          rating: 8.8,
          img: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
     },
     {
          id: "tt0137523",
          title: "Fight Club",
          rating: 8.8,
          img: "https://i.pinimg.com/736x/d0/92/ce/d092ce78e7d8d43073f47067e28609b7.jpg",
     },
     {
          id: "tt0120737",
          title: "The Lord of the Rings: The Fellowship of the Ring",
          rating: 8.8,
          img: "https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
     },
     {
          id: "tt0102926",
          title: "The Silence of the Lambs",
          rating: 8.6,
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeGH9FYpjNiPioEvrpj0HMUw62-14MTzsI--_XuUoUDj1Bk54iL_vRO075w44IlXGDKbhe",
     },
     {
          id: "tt0167260",
          title: "The Lord of the Rings: The Return of the King",
          rating: 9.0,
          img: "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
     },

     {
          id: "tt1853728",
          title: "Django Unchained",
          rating: 8.4,
          img: "https://m.media-amazon.com/images/I/41SEqQEfijL._UF1000,1000_QL80_.jpg",
     },
     {
          id: "tt1375666",
          title: "Inception",
          rating: 8.8,
          img: "https://i.pinimg.com/736x/c4/d9/dc/c4d9dcc15f1d6226ab4e75d38ce63583.jpg",
     },
];

app.get("/movie", (req, res) => {
     res.render("home", { topMovies });
});

app.get("/movie/new", (req, res) => {
     res.render("new", { moreMovies });
});

app.post("/movie", (req, res) => {
     const { id, title, rating, img } = req.body;
     topMovies.push({ id, title, rating, img });
     res.redirect("/movie");
});

app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
});
