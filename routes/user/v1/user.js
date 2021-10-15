const users = require('../../../controllers/user/v1/user');

module.exports = (app) => {
    app.get('/user_list', users.getAll);
    app.post('/user', users.create);
    app.put('/user/:id', users.update);
    app.delete('/user/:id', users.remove);
};