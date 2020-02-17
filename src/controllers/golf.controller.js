const Golf = require('../models/golf.model');

exports.create = (req, res) => {
        const golf = new Golf({
                titre: req.body.titre,
                description: req.body.description,
                position: req.body.position,
                manager: req.body.manager
            })

        golf.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }


exports.findOne = (req, res) => {
    console.log(req.params);
    Golf.findById(req.params.id)
        .then(golf => {
            if (!golf) {
                return res.status(404).send({
                    message: "Golf not found with id" + req.params.id
                });
            }
            res.send(golf);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Golf.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(golf => {
        if (!golf) {
            return res.status(404).send({
                message: "Golf not found"
            })
        }
        Golf.findById(req.params.id)
            .then(newgolf => {
                res.send({
                    new_golf: newgolf,
                    old_golf: golf
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Golf.findByIdAndRemove(req.params.id)
        .then(golf => {
            if (!golf) {
                return res.status(404).send({
                    message: "golf not found"
                })
            }
            res.send({
                message: `golf with id ${req.params.id} deleted successfully`
            })
        })
}



exports.findAll = (req, res) => {
    Golf.find()
        .then(golfs => {
            res.send(golfs);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding golfs."
            })
        })
}


// exports.removeAll = (req, res) => {
//     Golf.deleteMany((err) => {
//         if (err) {
//             res.send(err)
//         }
//         res.send('Golfs removed');
//     });
// }