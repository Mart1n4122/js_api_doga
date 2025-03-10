let movies = [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010, oscar: true },
    { id: 2, title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, oscar: true },
    { id: 3, title: "Interstellar", director: "Christopher Nolan", year: 2014, oscar: false }
  ];
  
  exports.getAllMovies = (req, res) => {
    res.json(movies);
  };
  
  exports.getMovieById = (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie);
  };
  
  exports.addMovie = (req, res) => {
    const newMovie = {
      id: movies.length + 1,
      title: req.body.title,
      director: req.body.director,
      year: req.body.year,
      oscar: req.body.oscar
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
  };
  
  exports.updateMovieById = (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
  
    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.year = req.body.year;
    movie.oscar = req.body.oscar;
    res.json(movie);
  };
  
  exports.deleteMovieById = (req, res) => {
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');
  
    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie);
  };