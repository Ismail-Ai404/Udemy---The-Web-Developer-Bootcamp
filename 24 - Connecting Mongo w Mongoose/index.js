/** @format */

const mongoose = require("mongoose");
mongoose
     .connect("mongodb://127.0.0.1:27017/movieApp")
     .then(() => {
          console.log("Open");
     })
     .catch((err) => {
          console.log("err");
          console.log(err);
     });

const movieSchema = new mongoose.Schema({
     title: String,
     year: Number,
     score: Number,
     rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const superman = new Movie({
//      title: "Super-Man",
//      year: 2025,
//      score: 8.2,
//      rating: "E",
// });
// superman.save();

// Movie.insertMany([
//      {
//           title: "Super-Man",
//           year: 2025,
//           score: 8.2,
//           rating: "E",
//      },
//      {
//           title: "Bat-Man",
//           year: 2023,
//           score: 7.9,
//           rating: "PG-13",
//      },
//      {
//           title: "Spider-Man",
//           year: 2024,
//           score: 8.5,
//           rating: "PG",
//      },
//      {
//           title: "Iron-Man",
//           year: 2019,
//           score: 8.1,
//           rating: "PG-13",
//      },
//      {
//           title: "Wonder Woman",
//           year: 2020,
//           score: 7.4,
//           rating: "PG-13",
//      },
//      {
//           title: "Hulk",
//           year: 2018,
//           score: 6.9,
//           rating: "PG-13",
//      },
//      {
//           title: "Thor",
//           year: 2021,
//           score: 7.8,
//           rating: "PG-13",
//      },
//      {
//           title: "Flash",
//           year: 2022,
//           score: 7.2,
//           rating: "PG",
//      },
//      {
//           title: "Black Panther",
//           year: 2018,
//           score: 8.3,
//           rating: "PG-13",
//      },
//      {
//           title: "Doctor Strange",
//           year: 2016,
//           score: 7.5,
//           rating: "PG-13",
//      },
// ]);

const a = Movie.find({ title: "Doctor Strange" }).then((m) => console.log(m));
console.log(a.data);

Movie.findOneAndUpdate({ title: "Bat-Man" }, { score: 10 }, { new: true }).then(
     (m) => console.log(m)
);
