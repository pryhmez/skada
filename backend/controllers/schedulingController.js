var { createSchedule, getSchedule, getAllSchedules, deleteSchedule, updateSchedule } = require('../services/schedulingServices');

const AppError = require('../utils/appError');

module.exports = function schedulingController() {
    this.create = (req, res) => {

        createSchedule(req.body, req.file).then(result => {
            res.send({
                success: true,
                message: 'schedule created and booking done',
                data: result
            })
        }).catch(error => {
            res.send({
                success: false,
                message: "could not create schedule",
                data: error
            })
        })

    }

    this.get = (req, res) => {
        console.log(req.ip)
        getSchedule(req.query).then(result => {
            if (result) {
                res.send({
                    success: true,
                    data: result
                })
            } else {
                res.send({
                    success: false,
                    data: "could not find file"
                })
            }
        }).catch(error => {
            return next(new AppError(error, 404))
        })
    }

    this.getAll = (req, res) => {
        getAllSchedules(req.query).then(result => {
            if (result) {
                res.send({
                    success: true,
                    data: result
                })
            } else {
                res.send({
                    success: false,
                    data: "could not find file"
                })
            }
        }).catch(error => {
            return next(new AppError(error, 404))
        })
    }

    this.delete = (req, res) => {
        deleteSchedule(req.query).then(result => {
            res.send({
                success: true,
                message: "deleted successfully",
                data: result
            })
        }).catch(error => {
            return next(new AppError(error + " could not delete", 404))
        })
    }

    this.update = (req, res) => {

    }


}
