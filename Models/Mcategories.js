const mongoose = require('mongoose');
var uuid = require('uuid');

const { actionFindOne, actionFindAll, actionCreate, actionUpdate, actionRemove } = require('../core/action');
var Schema = mongoose.Schema;
var categoriesSchema = new Schema({
    id: { type: String, default: uuid.v4() },
    image:{ type: String, require: false },
    name: { type: String, require: false },
    status: { type: String, require: false },
    create_by: { type: String, require: false },
    create_date:{ type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
});
var Mcategories = mongoose.model('category', categoriesSchema);

const findOne = (params) => {
    return actionFindOne(Mcategories, params);
}
const findAll = (params) => {
    return actionFindAll(Mcategories, params);
}
const create = (params) => {
    return actionCreate(Mcategories, params);
}
const update = (params) => {
    return actionUpdate(Mcategories, params);
}
const remove = (params) => {
    return actionRemove(Mcategories, params);
}
module.exports = {
    findOne,
    findAll,
    create,
    update,
    remove
}