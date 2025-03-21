const express = require('express');
const app = express();
const moviesRoutes = require('./routes/movies');

app.use(express.json());
app.use('/movies', moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

