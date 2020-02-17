const Manager = require('../models/manager.model');

exports.create = (req, res) => {
        const manager = new Manager({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone
            })

        manager.save()
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
    Manager.findById(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Manager not found with id" + req.params.id
                });
            }
            res.send(manager);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Manager.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(manager => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            })
        }
        // res.send(user);
        Manager.findById(req.params.id)
            .then(newManager => {
                res.send({
                    new_manager: newManager,
                    old_manager: manager
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Manager.findByIdAndRemove(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Manager not found"
                })
            }
            res.send({
                message: `Manager with id ${req.params.id} deleted successfully`
            })
        })
}



// exports.findAll = (req, res) => {
//     Manager.find()
//         .then(managers => {
//             res.send(managers);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occured when finding managers."
//             })
//         })
// }


// exports.removeAll = (req, res) => {
//     Manager.deleteMany((err) => {
//         if (err) {
//             res.send(err)
//         }
//         res.send('Managers removed');
//     });
// }