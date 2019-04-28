const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postalModel = new Schema({
    d_codigo: { type: String, required: false },
    d_ciudad: { type: String, required: false },
    d_asenta: { type: String, required: false },
    D_mnpio: { type: String, required: false },
    d_estado: { type: String, required: false },
    d_CP: { type: String, required: false }
}, {collection:'postal'});
module.exports = mongoose.model('Postal', postalModel);
