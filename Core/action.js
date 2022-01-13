const actionFindOne = async (Collection, params) => {
    return Collection.findOne(params);
}

const actionFindAll = (Collection, params) => {
    return Collection.find(params);
}
const actionCount = (Collection, params) => {
    return Collection.countDocuments(params);
}
const actionCreate = (Collection, params) => {
    console.log('actionMultiCreate:::',params);
    return Collection.create(params);
}
const actionUpdate = (Collection, params, setBody) => {
    return Collection.update(params, { $set: setBody });
}
const actionUpdateMultiple = (Collection, params, setBody) => {
    return Collection.updateMany(params, { $set: setBody });
}
const actionRemove = (Collection, params) => {
    return Collection.deleteMany(params);
}

module.exports = {
    actionFindOne,
    actionFindAll,
    actionCount,
    actionCreate,
    actionUpdateMultiple,
    actionUpdate,
    actionRemove
}