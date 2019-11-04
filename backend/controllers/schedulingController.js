var { createSchedule, getSchedule, getAllSchedules, deleteSchedule, updateSchedule } = require('../services/schedulingServices')

module.exports = function schedulingController() {
    this.create = (req, res) => {
        console.log(req.file)

            createSchedule(req.body).then(result => {
                res.send({
                    success: true,
                    message: 'schedule created and booking done',
                    data: result
                })
            }).catch(error => {
                res.send({ 
                    success: false, 
                    message: "could not create schedule", 
                    data: error })
            })
        
    }

    this.get = (req, res) => {
        getSchedule(req.query).then(result => {
            res.send({
                success: true,
                data: result
            })
        })
    }

    this.getAll = (req, res) => {
        getAllSchedules(req.query).then(result => {
            res.send({
                success: true,
                data: result
            })
        })
    }

    this.delete = (req, res) => {

    }

    this.update = (req, res) => {

    }


}
