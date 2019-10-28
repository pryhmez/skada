var { createSchedule } = require('../services/schedulingServices')

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
}
