const detailhandler = require('../controllers/detailcontroller')

module.exports = app => {
    app.route('/portfolio/details').get(detailhandler.getdetails);
}