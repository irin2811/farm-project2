const mongoose = require('mongoose');

const Farm = mongoose.model('Farm');

const getAll = (req, res) => {
    Farm.find().exec(function(err, result) {
        if(err) {
            res.send('Error farm data!');
        } else {
            res.send(JSON.stringify(result));
        }
    });
};

const create = (req, res) => {
    if(req.body.id && req.body.name) {
        let newFarm = new Farm({
            _id: new mongoose.Types.ObjectId,
            id: req.body.id,
            name: req.body.name,
        });
        newFarm.save(function(err, result) {
            if(err) {
                res.send('Error farm data!');
            } else {
                res.send(JSON.stringify(newFarm));
            }
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

const update = (req, res) => {
    if(req.params.id) {
        if(req.body.name) {
            let updatedFarm = {
                name: req.body.name,
            }
            Farm.updateOne({id: req.params.id}, updatedFarm, function(err, result) {
                if(err) {
                    res.send('Error pet data!');
                } else {
                    res.send(JSON.stringify(updatedFarm));
                }
            });
        }
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

const remove = function(req, res) {
    if(req.params.id) {
        Farm.deleteOne({id: req.params.id}, function(err, result) {
            if(err) {
                res.send('Error pet data!');
            } else {
                res.send('Pet farm has been deleted!')
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