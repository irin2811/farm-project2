const express = require('express');

module.exports = app => {
    require('../models'),
    require('./pet/v1/pet')(app),
    require('./farm/v1/farm')(app),
    require('./user/v1/user')(app)
};
