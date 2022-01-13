var Mcategories = require('../Models/Mcategories');
const getOne = async (req, res) => {
    let params = {
        "id": req.params.id
    }
    var user = await Mcategories.findOne(params);
    res.json(user);
}
const getAll = async (req, res) => {
    var user = await Mcategories.findAll();
    res.json(user);
}
const createCategory = async (req, res) => {
    try {
        var user = await Mcategories.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ erMessage: error.toString() })
    }
}
const update = async (req, res) => {
    let params = {
        id: req.body.id
    }
    var checkExists = await Mcategories.count(params);
    console.log('checkExists::', req.body.id, "", checkExists);
    if (checkExists > 0) {
        try {
            var customer = await Mcategories.update(params, req.body);
            console.log('product::', customer);
            res.json(customer);
        } catch (error) {
            res.json({ erMessage: error.toString() })
        }
    } else {
        res.json('Không tìm thấy dữ liệu cập nhật');
    }
}
const remove = async (req, res) => {
    let params = {
        id: req.body.id
    }
    try {
        await Mcategories.remove(params);
        var customer = await Mcategories.findAll();
        res.json(customer);
    } catch (error) {
        res.json({ erMessage: error.toString() })
    }
}
module.exports = {
    getOne,
    getAll,
    createCategory,
    update,
    remove,
}