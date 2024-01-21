const express = require('express');
const route = express.Router();

const buy = require('./buy');
const user = require('./user');
const recipe = require('./recipe');
const category = require('./category');

route.use('/buy', buy);
route.use('/user', user);
route.use('/recipe', recipe)
route.use('/category', category)

module.exports = route;