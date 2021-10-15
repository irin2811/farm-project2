const mongoose = require('mongoose');

const User = mongoose.model('User');

const getAll = (req, res) => {
    User.find().exec(function(err, result) {
        if(err) {
            res.send('Error farm data!');
        } else {
            res.send(JSON.stringify(result));
        }
    });
};

const create = (req, res) => {
    if(req.body.id && req.body.firstName && req.body.lastName) {
        let newUser = new User({
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        newUser.save(function(err, result) {
            if(err) {
                res.send('Error user data!');
            } else {
                res.send(JSON.stringify(newUser));
            }
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

const update = (req, res) => {
    if(req.params.id) {
        if(req.body.firstName && req.body.lastName) {
            let updatedUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }
            User.updateOne({id: req.params.id}, updatedUser, function(err, result) {
                if(err) {
                    res.send('Error user data!');
                } else {
                    res.send(JSON.stringify(updatedUser));
                }
            });
        }
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

const remove = function(req, res) {
    if(req.params.id) {
        User.deleteOne({id: req.params.id}, function(err, result) {
            if(err) {
                res.send('Error user data!');
            } else {
                res.send('User has been deleted!')
            }
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

module.exports = {
    getAll,
    create,
    update,
    remove,
};