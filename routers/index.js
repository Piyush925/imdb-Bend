const express = require('express');
const router = express.Router();
const schemas = require('../schemas')
const middleware = require('../middleware')
const { addMovies } = require("./api/admin/Addmovies");
const { getMovies } = require('./api/movie/getMovies')
const { getFilter } = require('./api/filter/filter')
const { createUser } = require('./api/user/createUser')
const { login } = require('./api/user/login')
const { actorList } = require('./api/actorlist/Actorlist')
const { addFavList } = require('./api/user/FavList/addfavlist');
const { deleteFavList } = require('./api/user/FavList/deletefavList');
const { getFavList } = require('./api/user/FavList/getfavList')
const { addWatchList } = require('./api/user/WatchList/addwatchlist')
const { deleteWatchList } = require('./api/user/WatchList/deletewatchList')
const { getwatchList } = require('./api/user/WatchList/getwatchList');
const { getPaticularMovie } = require('./api/movie/get-paticular-movie-details');
const { filterList } = require('./api/filter/filterlist')
const { list } = require('./api/movie/list')
const { rating } = require('./api/rating/rating');
const { addPersons } = require('./api/admin/addpersons')
const { review } = require('./api/review/movie-review')
const { deletePersons } = require('./api/admin/deletepersons')
const { deleteMovies } = require('./api/movie/deletemovie')
router.post('/addmovie', middleware(schemas.moviePOST, 'body'), addMovies)
router.get('/getmovie', getMovies)
router.get('/getmovie/:id', middleware(schemas.getParticularMovie, 'params'), getPaticularMovie)
router.get('/getmovies/query?', middleware(schemas.filter, 'query'), getFilter)
router.post('/signup', middleware(schemas.userPOST, 'body'), createUser)
router.put('/login', middleware(schemas.login, 'body'), login)
router.get('/getactor', actorList)
router.get('/getperson/:id', middleware(schemas.getPersons, 'params'), filterList)
router.get('/getlist/:options', middleware(schemas.getoptions, 'params'), list)
router.post('/watchlist/add', middleware(schemas.addWatchlist, 'body'), addWatchList);
router.put('/rating', middleware(schemas.rating, 'body'), rating);
router.put('/review', middleware(schemas.review, 'body'), review);
router.post('/favlist/add', middleware(schemas.addFavlist, 'body'), addFavList);
router.post('/addperson', middleware(schemas.addperson, 'body'), addPersons)
router.get('/watchlist/get', getwatchList);
router.get('/favlist/get', getFavList);
router.delete('/watchlist/delete', middleware(schemas.deleteWatchlist, 'body'), deleteWatchList)
router.delete('/favlist/delete', middleware(schemas.deleteFavlist, 'body'), deleteFavList)
router.delete('/deleteperson', middleware(schemas.deletePerson, 'body'), deletePersons)
router.delete('/deletemovies', middleware(schemas.deleteMovie, 'body'), deleteMovies)
module.exports = router;