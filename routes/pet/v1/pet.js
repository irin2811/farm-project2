const pets = require('../../../controllers/pet/v1/pet');

module.exports = (app) => {
    app.get('/pet_list', pets.getAll);
    app.post('/pet', pets.create);
    app.put('/pet/:id', pets.update);
    app.delete('/pet/:id', pets.remove);
};