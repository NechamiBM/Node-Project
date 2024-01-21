const express = require('express');
const route = express.Router();
const buyServer = require('../server/buy')

route.post('/', buyServer.AddToList)
route.get('/:UserId', buyServer.GetMaList)
route.post('/delete/:Id', buyServer.Delete)

module.exports = route;