const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getAllMovies);
router.get('/:id', moviesController.getMovieById);
router.post('/', moviesController.addMovie);
router.put('/:id', moviesController.updateMovieById);
router.delete('/:id', moviesController.deleteMovieById);

module.exports = router;