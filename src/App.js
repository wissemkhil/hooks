import { useState } from "react";
import "./App.css";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/Movie/MovieList";
import Rate from "./Components/Rate";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const movies = [
    {
      title: "BHARAT",
      description:
        "The film stars Salman Khan Katrina Kaif Sunil Grover and Jackie Shroff Disha Patani makes a special appearance Tabu makes a friendly appearance",

      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Bharat_film_poster.jpg/220px-Bharat_film_poster.jpg",
      rating: 5,
    },
    {
      title: "Blacklight",
      description:
        "Blacklight, c’est une histoire de Travis Block un ancien collaborateur du FBI, qui va se transformer en leur pire ennemi",
      posterUrl:
        "https://fr.web.img2.acsta.net/pictures/22/01/27/17/27/0656121.jpg",
      rating: 5,
    },
    {
      title: "EXODUS",
      description: "Gods and Kings cam I had already sped both Hercules films",
      posterUrl:
        "https://canvas-bridge02.tubitv.com/PuU0Nar-teSXYFfZrzglvFoh304=/9x0:1524x2162/400x574/smart/img.adrise.tv/c60a5309-61ea-4164-9b3f-96cad488bd1e.jpg",
      rating: 5,
    },
    {
      title: "Medieval",
      description: "“Medieval” features the same kind of brutal violence",
      posterUrl:
        "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/medieval-2022/large_medieval-movie-poster-2022.jpeg",
      rating: 5,
    },
    {
      title: "Smile",
      description:
        " Smile is a 2022 American supernatural psychological horror film ",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/220px-Smile_%282022_film%29.jpg",
      rating: 5,
    },
    {
      title: "THE MESSAGE",
      description:
        " The film shows the first people of Islam, and the pain and obstacles they faced ",
      posterUrl:
        "https://media.npr.org/assets/img/2016/07/08/p47209_d_v8_aa_custom-afb9476532f68be61fc8a208f2f9ad71aac6a4f5-s1100-c50.jpg",
      rating: 5,
    },
  ];
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const add = (newMovie) => {
    this.setState({
      movies: this.state.movies.concat(newMovie),
    });
  };

  return (
    <div className="App">
      <Filter
        text={text}
        setText={setText}
        rating={rating}
        setRating={setRating}
      />
      <MovieList
        movies={movies.filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(text.toLowerCase()) &&
            movie.rating == rating
        )}
      />
      <Rate />
      <AddMovie handleAdd={add} />
    </div>
  );
};

export default App;
