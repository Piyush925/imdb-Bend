MovieDB
=======
[![Build Status](https://travis-ci.org/KevinMidboe/moviedb.svg?branch=master)](https://travis-ci.org/KevinMidboe/moviedb)
[![NPM version](https://badge.fury.io/js/km-moviedb.svg)](http://badge.fury.io/js/km-moviedb)
[![Known Vulnerabilities](https://snyk.io/test/github/KevinMidboe/moviedb/badge.svg?targetFile=package.json)](https://snyk.io/test/github/KevinMidboe/moviedb?targetFile=package.json)
[![npm](https://img.shields.io/npm/dm/km-moviedb.svg?maxAge=2592000)]()

node.js library that makes the interaction with themoviedb.org V3 API easy.

## Installation
```bash
npm install moviedb --save
```
## Usage

Require MovieDB and provide your themoviedb.org API KEY
```js
const MovieDB = require('moviedb')('your api key');
```
Use the api methods as you want, for example:
```js
mdb.searchMovie({ query: 'Alien' }, (err, res) => {
  console.log(res);
});
```
or
```js
mdb.movieInfo({ id: 666}, (err, res) => {
  console.log(res);
});
```
now you can also make chain calls
```js
mdb
  .searchMovie({ query: 'Zoolander' }, (err, res) => {
    console.log(res);
  })
  .movieInfo({ id: 123 }, (err, res) => {
    console.log(res);
  });
```
## Available methods

All themoviedb.org API v3 methods included. Endpoint methods are included on [a wiki page](https://github.com/impronunciable/moviedb/wiki/Library-endpoints)
