const farms = require('../../../controllers/farm/v1/farm');

module.exports = (app) => {
    app.get('/farm_list', farms.getAll);
    app.post('/farm', farms.create);
    app.put('/farm/:id', farms.update);
    app.delete('/farm/:id', farms.remove);
};