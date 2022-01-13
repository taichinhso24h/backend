const mongoose = require('mongoose');
var uuid = require('uuid');

const { actionFindOne, actionFindAll, actionCreate, actionUpdate, actionRemove, actionCount } = require('../core/action');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    id: { type: String, default: uuid.v4() },
    avatar:{ type: String, require: false },
    username: { type: String, require: false },
    password: { type: String, require: false },
    full_name: { type: String, require: false },
    email: { type: String, require: false },
    address: { type: String, require: false },
    phone: { type: String, require: false },
    role: { type: String, require: false },
    status: { type: String, require: false },
    last_login: { type: String, require: false },
    create_by: { type: String, require: false },
    create_date:{ type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
});
var Musers = mongoose.model('users', usersSchema);

const count = (params) => {
    return actionCount(Musers, params);
}
const findOne = (params) => {
    return actionFindOne(Musers, params);
}
const findAll = (params) => {
    return actionFindAll(Musers, params);
}
const create = (params) => {
    return actionCreate(Musers, params);
}
const update = (params) => {
    return actionUpdate(Musers, params);
}
const remove = (params) => {
    return actionRemove(Musers, params);
}
module.exports = {
    count,
    findOne,
    findAll,
    create,
    update,
    remove
}