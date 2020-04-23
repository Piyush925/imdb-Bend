const express = require('express');
const router = express.Router();
const { addMovies } = require("./api/admin/Addmovies");
const { getMovies } = require('./api/movie/getMovies')
const { getfilter } = require('./api/filter/filter')
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
const { filterlist } = require('./api/filter/filterlist')
const { list } = require('./api/movie/list')
const { rating } = require('./api/rating/rating');
const { addPersons } = require('./api/admin/addpersons')
const { review } = require('./api/review/movie-review')
const { deletePersons } = require('./api/admin/deletepersons')
const { deletemovies } = require('./api/movie/deletemovie')
router.post('/addmovie', addMovies)
router.get('/getmovie', getMovies)
router.get('/getmovie/:id', getPaticularMovie)
router.get('/getmovies/query?', getfilter)
router.post('/signup', createUser)
router.put('/login', login)
router.get('/getactor', actorList)
router.get('/getperson/:id', filterlist)
router.get('/getlist/:options', list)
router.post('/watchlist/add', addWatchList);
router.put('/rating', rating);
router.put('/review', review);
router.post('/favlist/add', addFavList);
router.post('/addperson', addPersons)
router.get('/watchlist/get', getwatchList);
router.get('/favlist/get', getFavList);
router.delete('/watchlist/delete', deleteWatchList)
router.delete('/favlist/delete', deleteFavList)
router.delete('/deleteperson', deletePersons)
router.delete('/deletemovies', deletemovies)
module.exports = router;





