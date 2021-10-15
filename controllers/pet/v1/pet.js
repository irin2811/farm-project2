const mongoose = require('mongoose');

const Pet = mongoose.model('Pet');

const getAll = function(req, res) {
    Pet.find().exec(function(err, result) {
        if(err) {
            res.send('Error pet data!');
        } else {
            res.send(JSON.stringify(result));
        }
    });
};

const create = function(req, res) {
    if(req.body.nickName && req.body.age && req.body.id) {
        let newPet = new Pet({
            _id: new mongoose.Types.ObjectId(),
            id: req.body.id,
            nickName: req.body.nickName,
            age: req.body.age,
        });
        newPet.save(function(err) {
            if(err) {
                res.send('Error pet data!');
            } else {
                res.send(JSON.stringify(newPet));
            }            
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

const update = function(req, res) {
    let pet_id = req.params.id;
    if(pet_id) {
        if(req.body.nickName && req.body.age) {
            let updatedPet = {
                nickName: req.body.nickName,
                age: req.body.age,
            };
            Pet.updateOne({id: pet_id}, updatedPet, function(err, result) {
                if(err) {
                    res.send('Error pet data!');
                } else {
                    res.send(JSON.stringify(updatedPet));
                }
            });
        }
    } else {
        res.status(400).send({message: 'Bad request'});
    }
};

const remove = function(req, res) {
    let pet_id = req.params.id;
    if(pet_id) {
        Pet.deleteOne({id: pet_id}, function(err, result) {
            if(err) {
                res.send('Error pet data!');
            } else {
                res.send('Pet has been deleted!')
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