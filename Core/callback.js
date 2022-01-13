module.exports = {
    callback: function (res, err, doc, erMgs) {
        if (err) {
            return res.json({ error: err });
        }
        if (doc) {
            res.json(doc);
        } else {
            return res.json({ status: false, message: erMgs });
        }
    },
};