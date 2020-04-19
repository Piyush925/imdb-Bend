const express=require('express');
const router=express.Router();
const {addMovies} = require("./api/Addmovies");
const { getMovies } = require('./api/getMovies')
const {getByYear }=require('./api/filterYear')
const { createUser}=require('./api/user/createUser')
const { login}=require('./api/user/login')
const { actorList }=require('./api/Actorlist')
const { addFavList }=require('./api/user/FavList/addfavlist');
const { deleteFavList }=require('./api/user/FavList/deletefavList');
const { getFavList }=require('./api/user/FavList/getfavList')
const { addWatchList }=require('./api/user/WatchList/addwatchlist')
const { deleteWatchList }=require('./api/user/WatchList/deletewatchList')
const { getwatchList }=require('./api/user/WatchList/getwatchList');
const {getPaticularMovie }=require('./api/get-paticular-movie-details');
const { filterlist }=require('./api/filterlist')
const { list }=require('./api/list')
router.post('/addmovie',addMovies)
router.get('/getmovie',getMovies)
router.get('/getmovie/:id',getPaticularMovie)
router.get('/getmovies/query?',getByYear)
router.post('/signup',createUser)
router.put('/login',login)
router.get('/getactor',actorList)
router.get('/getperson/:id',filterlist)
router.get('/getlist/:options',list)
router.post('/watchlist/add',addWatchList);
router.post('/favlist/add',addFavList);
router.get('/watchlist/get',getwatchList);
router.get('/favlist/get',getFavList);
router.delete('/watchlist/delete',deleteWatchList)
router.delete('/favlist/delete',deleteFavList)
module.exports=router;





